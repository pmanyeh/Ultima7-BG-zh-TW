import os
import subprocess
import shutil

ipack_exe = r"C:\Program Files\Exult\Tools\ipack.exe"
orig_flx = r"G:\GOG Galaxy\Games\Ultima 7\STATIC\endshape.flx"
palettes_flx = r"G:\GOG Galaxy\Games\Ultima 7\STATIC\palettes.flx"
work_dir = r"d:\git\exult\tools\ucxt\output\endshape_pngs"
output_flx = r"d:\git\exult\tools\ucxt\output\ENDSHAPE_ZH.FLX"

local_flx = os.path.join(work_dir, "endshap_local.flx")
local_pal = os.path.join(work_dir, "palettes_local.flx")

# 先把原版的 FLX 複製過來，因為 ipack -u 是直接修改目標檔案
print(f"複製原檔準備打包...")
shutil.copy2(orig_flx, local_flx)
shutil.copy2(palettes_flx, local_pal)

# 建立 ipack 更新用的腳本
script_path = os.path.join(work_dir, "update.txt")
with open(script_path, "w", encoding="utf-8") as f:
    f.write(f"archive endshap_local.flx\n")
    f.write(f"palette palettes_local.flx\n")
    f.write("21/1:shape21\n")
    f.write("22/1:shape22\n")
    f.write("23/1:shape23\n")
    f.write("24/1:shape24\n")
    f.write("25/1:shape25\n")
    f.write("26/1:shape26\n")
    f.write("28/1:shape28\n")

print("正在將修改好的 PNG 圖片重新打包進 FLX...")
try:
    subprocess.run([ipack_exe, "-u", "update.txt"], cwd=work_dir, check=True)
    # 完成後，將修改後的 endshap_local.flx 複製到 ENDSHAP_ZH.FLX
    shutil.copy2(local_flx, output_flx)
    print("\n打包成功！")
    print(f"新的檔案位於：{output_flx}")
    print("請將它複製到遊戲中（根據需求改名為 endshape.flx 或透過 patch 機制讀取）！")
except Exception as e:
    print(f"發生錯誤: {e}")
