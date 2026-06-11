# Ultima 7 - Serpent Isle (巨蛇之島) `.es` 腳本翻譯工作流程 (SOP)

這份文件旨在統整 Serpent Isle 腳本 (Usecode) 從解包、過濾、翻譯，一直到重新編譯掛載的完整端到端 (End-to-End) 流程。這份指南捨棄了容易出錯的 XML 或低階組合語言 (`.uc`) 手動修改方式，全面採用最符合程式邏輯的**高階 Exult Script (`.es`)** 來進行作業。

---

## 階段一：提取全量 `.uc` 組合語言腳本

雖然我們的最終目標是 `.es`，但我們必須先用 `ucxt` 產生一份完整的 `.uc` 檔，這是為了讓後續的腳本能精準統計並定位「哪些函數含有對話文本」。

1. **開啟終端機 (PowerShell)**。
2. **執行全量解包指令**：
   請注意，為避開 `ucxt` 處理輸出參數的 Bug，我們必須使用 `>` 將畫面輸出導向成檔案。
   ```powershell
   & "C:\Program Files\Exult\Tools\ucxt.exe" -si -i"D:\U7_project\Ultima 7 - Serpent Isle\STATIC\USECODE" -a -fa > "D:\git\exult-master\tools\ucxt\output\si_usecode_full.uc"
   ```
   *(`-si` 代表巨蛇之島，`-a` 代表全部函數，`-fa` 代表導出組合語言格式)*

---

## 階段二：使用腳本自動過濾並產出 `.es` 檔

遊戲中有數千個函數，但許多只是底層系統邏輯（無文字）。我們透過 Python 腳本 (`extract_si_es.py`) 來自動找出有對話的函數，並將其轉為 `.es` 檔。

1. **基礎原理解說：手動導出單一 `.es` 檔**：
   如果您只需要修改特定的單一函數（例如函數 `0401`），您完全可以直接在 PowerShell 中執行：
   ```powershell
   & "C:\Program Files\Exult\Tools\ucxt.exe" -si -fs -i"D:\U7_project\Ultima 7 - Serpent Isle\STATIC\USECODE" 0401 | Out-File -FilePath 0401.es -Encoding ascii
   ```
   這行指令會直接將函數 `0401` 的高階腳本萃取出來，並且利用管道符號 (`| Out-File`) 完美避開了 `ucxt` 的 `-o` 寫檔 Bug。

   > [!NOTE]
   > **為什麼這裡是用 `-Encoding ascii` 而不是 `utf8`？**
   > 因為 Windows 內建的 PowerShell 在使用 `-Encoding utf8` 導出檔案時，預設會在檔案開頭強迫加入 **BOM (位元組順序記號 `\xEF\xBB\xBF`)**。這會導致後續 `ucc.exe` 編譯器在讀取第一行時報錯崩潰 (`Invalid character found`)。
   > 
   > 導出為 ASCII 可以確保檔案極度乾淨 (無 BOM)。後續翻譯人員用 VS Code 打開這個檔案、填入中文並存檔時，VS Code 預設就會自動以「無 BOM 的標準 UTF-8」將其儲存，完美解決編譯器的相容性問題。

2. **為什麼需要 Python 腳本？**
   雖然上面的手動指令非常實用，但整個遊戲中含有文字的函數多達 **1237 個**。為了避免手動輸入一千多次指令，我們開發了一支自動化腳本來代勞。

3. **執行 `extract_si_es.py` 腳本**：
   - 腳本會自動掃描 `si_usecode_full.uc`，找出所有具備 `.data` (字串資料) 的 `.funcnumber`。
   - 接著，腳本會在背景自動對這些目標呼叫 `ucxt.exe -fs` (導出為高階 `.es` 格式)。
   - 為了避開 PowerShell 與 `ucc` 對 UTF-8 BOM 的編碼衝突，腳本會強制以 **ASCII 編碼**寫入檔案。
2. **檔案輸出結構**：
   - 腳本共計會篩選出約 **1237 個**有文本的函數。
   - 為了方便多人分工，腳本會以「**每 20 個檔案為一個資料夾**」的方式進行分裝，資料夾命名從 `001` 到 `062`。
   - 每個 `.es` 檔的檔名即為其函數編號，例如：`0096.es`。

4. **產生編譯所需的入口檔 (main.es)**：
   為了方便後續編譯，我們額外執行了產生 `main.es` 的 Python 腳本。這會在每個子資料夾（如 `001`）內產生一個 `main_001.es`，裡面自動 `#include` 該資料夾的 20 個檔案。
   最後，在 `zh_scripts` 根目錄會自動產生一個總的 `main.es`，裡面 `#include` 了所有子目錄的 `main_xxx.es`。這讓編譯器只要吃一個 `main.es` 就能讀取全部 1237 個函數！

---

## 階段三：翻譯作業與注意事項

翻譯人員請使用 **VS Code** 等純文字編輯器開啟 `.es` 檔進行翻譯。

### 1. 該翻譯哪裡？
請尋找帶有 `message` 或是 `FuncXXXX` 裡面夾著的字串（通常被 `@` 或雙引號 `"` 包圍）。
**範例原文：**
```c
message("\"The ether is flowing freely! Magic is with us once again!\"");
Func094A("@The sails must be furled before the planks are raised.@");
```
**翻譯後：**
```c
message("\"乙太正自由流動！魔法再次與我們同在！\"");
Func094A("@在升起跳板之前，必須先捲起船帆。@");
```

### 2. 重要保留字元與規則
- **`@` 標記**：請務必保留頭尾的 `@` 符號，不可刪除。
- **雙引號 `\"`**：如果字串裡面原本有 `\"` (代表遊戲畫面上要顯示出引號)，請保留，並將中文夾在中間。
- **`\n` 換行符號**：請保留。
- **`*` 延遲符號**：如果你在句尾看到星號 (如 `"Goodbye, Avatar."*`)，這在遊戲中代表「等待玩家點擊或短暫延遲」，請保留在句尾。
- **參數與變數**：如果遇到 `message(var000F);` 這種語法，請不要改動它，這代表遊戲在此處會印出數字或變數。

### 3. 絕對不可更動的部分
- **函數宣告**：如 `void Func0096 shape#(0x96) ()`。
- **邏輯控制**：如 `if`, `goto`, `return`, `abort` 以及所有的 `labelFunc...`。
- **變數與陣列**：如 `var0000 = [0xFFC2, 0xFF6A...];`。

### 4. 存檔編碼要求
當你在 VS Code 加上中文並存檔時，請確認右下角的編碼為 **UTF-8 (無 BOM)**。若帶有 BOM，`ucc` 編譯器會因為第一行出現 `\xEF` 而報錯。

---

## 階段四：使用 `ucc` 重新編譯為 USECODE

當翻譯工作告一段落，我們需要將這些數以千計的 `.es` 檔掛載回遊戲中覆蓋原始英文邏輯。

### 1. 執行編譯指令
我們在階段二已經自動產生了包含所有子資料夾的 `main.es`，因此不需要手動新增檔案清單。
請開啟終端機，切換到 `zh_scripts` 資料夾，並執行 Exult 的編譯器 `ucc`：
```bash
ucc -o USECODE main.es
```
這會將所有 `.es` 腳本重新組譯，並產出一個名為 `USECODE` 的無副檔名二進位檔。

### 2. 掛載至 Patch 目錄
將剛剛產生的 `USECODE` 檔案複製到您 Serpent Isle 的補丁 (Patch) 目錄下：
`D:\U7_project\Ultima 7 - Serpent Isle\patch` (依您團隊的實際 Patch 路徑為準)。
進入遊戲後，該函數的對話就會顯示為您翻譯的中文了！
