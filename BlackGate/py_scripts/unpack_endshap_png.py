import os
import subprocess
import shutil

ipack_exe = r"C:\Program Files\Exult\Tools\ipack.exe"
orig_flx = r"G:\GOG Galaxy\Games\Ultima 7\STATIC\endshape.flx"
# 需要 palettes.flx 來提取正確的顏色
palettes_flx = r"G:\GOG Galaxy\Games\Ultima 7\STATIC\palettes.flx"
work_dir = r"d:\git\exult\tools\ucxt\output\endshape_pngs"

if not os.path.exists(work_dir):
    os.makedirs(work_dir)

# 複製檔案到工作目錄以避免路徑空白問題
local_flx = os.path.join(work_dir, "endshap_local.flx")
local_pal = os.path.join(work_dir, "palettes_local.flx")
shutil.copy2(orig_flx, local_flx)
shutil.copy2(palettes_flx, local_pal)

# 建立 ipack 提取用的腳本
script_path = os.path.join(work_dir, "extract.txt")
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

print(f"正在從 {orig_flx} 提取 PNG 圖片...")
try:
    subprocess.run([ipack_exe, "-x", "extract.txt"], cwd=work_dir, check=True)
    print("\n提取成功！")
    print(f"請前往 {work_dir} 目錄，您會看到 shape2100.png ~ shape2800.png。")
    print("這些是普通的 PNG 圖片！您現在可以直接用 Photoshop 修改它們（保留背景的透明色即可）。")
    print("修改完後，直接執行 python pack_endshap_png.py 來打包。")
except Exception as e:
    print(f"發生錯誤: {e}")
