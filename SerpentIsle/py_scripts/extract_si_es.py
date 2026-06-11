import os
import subprocess

# ================= 設定區 =================
# 您的全量 .uc 檔案位置
uc_full_path = r"d:\git\exult-master\tools\ucxt\output\si_usecode_full.uc"

# ucxt 執行檔位置 (根據您的環境可修改)
ucxt_exe = r"C:\Program Files\Exult\Tools\ucxt.exe"

# USECODE 原始檔路徑 (供 ucxt 讀取)
usecode_source = r"D:\U7_project\Ultima 7 - Serpent Isle\STATIC\USECODE"

# 輸出目錄
output_dir = r"d:\git\exult-master\tools\ucxt\output\si_translation\es_scripts"

# 每個資料夾包含的檔案數量
FILES_PER_FOLDER = 20

# ==========================================

def extract_valid_functions(uc_file):
    """
    分析 .uc 檔案，找出所有包含 .data 區段的函數編號
    """
    print(f"正在分析全量 .uc 檔案: {uc_file}")
    valid_funcs = []
    
    current_func = None
    has_data = False
    
    with open(uc_file, 'r', encoding='utf-16', errors='ignore') as f:
        for line in f:
            line = line.strip()
            
            # 找到新的函數宣告
            if line.startswith(".funcnumber"):
                # 結算上一個函數
                if current_func and has_data:
                    valid_funcs.append(current_func)
                
                parts = line.split()
                if len(parts) >= 2:
                    current_func = parts[1].replace('H', '')
                has_data = False
                
            elif line.startswith(".data"):
                has_data = True

        # 結算最後一個函數
        if current_func and has_data:
            valid_funcs.append(current_func)
            
    print(f"分析完成！共找到 {len(valid_funcs)} 個需要翻譯的函數。")
    return valid_funcs

def decompile_to_es(funcs):
    """
    呼叫 ucxt 將目標函數反編譯成 .es，依序存入編號資料夾
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    total_funcs = len(funcs)
    
    for i, func_hex in enumerate(funcs):
        # 計算所在的資料夾編號 (001, 002, ...)
        folder_id = (i // FILES_PER_FOLDER) + 1
        folder_name = f"{folder_id:03d}"
        folder_path = os.path.join(output_dir, folder_name)
        
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            
        file_name = f"{func_hex}.es"
        file_path = os.path.join(folder_path, file_name)
        
        # 顯示進度
        if i % 100 == 0:
            print(f"進度: {i}/{total_funcs}...")
            
        # 執行 ucxt -fs，完全避開 -o 參數
        cmd = [
            ucxt_exe,
            "-si",
            "-fs",
            f"-i{usecode_source}",
            func_hex
        ]
        
        try:
            # 使用 subprocess 攔截 stdout
            result = subprocess.run(cmd, capture_output=True, check=False)
            if result.returncode == 0:
                # 將輸出強制轉為 ascii (避免 utf8 BOM 問題)，無法轉換的字元替換掉
                output_str = result.stdout.decode('utf-8', errors='replace')
                ascii_bytes = output_str.encode('ascii', errors='replace')
                
                with open(file_path, 'wb') as outfile:
                    outfile.write(ascii_bytes)
            else:
                print(f"  警告: 函數 {func_hex} 反編譯失敗。")
        except Exception as e:
            print(f"  執行 ucxt 發生錯誤: {e}")

    print(f"\n所有反編譯完成！檔案已分裝至: {output_dir}")

if __name__ == "__main__":
    if not os.path.exists(uc_full_path):
        print(f"錯誤: 找不到全量檔案 {uc_full_path}，請確認路徑。")
    else:
        valid_functions = extract_valid_functions(uc_full_path)
        if valid_functions:
            decompile_to_es(valid_functions)
