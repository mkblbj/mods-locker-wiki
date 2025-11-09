# main.py
import os, hashlib, datetime

DOCS_DIR = "docs"
FILES_DIR = "downloads/files"

def define_env(env):
    @env.macro
    def list_downloads():
        base = os.path.join(DOCS_DIR, FILES_DIR)
        if not os.path.isdir(base):
            return []
        items = []
        for name in sorted(os.listdir(base), reverse=True):
            if not name.lower().endswith(".zip"):
                continue
            path_rel = f"{FILES_DIR}/{name}"
            path_abs = os.path.join(base, name)
            size = os.path.getsize(path_abs)
            mtime = datetime.date.fromtimestamp(os.path.getmtime(path_abs)).isoformat()
            # 只做短校验显示，避免页面过长
            with open(path_abs, "rb") as f:
                sha = hashlib.sha256(f.read()).hexdigest()[:12]
            items.append({
                "name": name,
                "link": path_rel,
                "size_mb": round(size/1024/1024, 2),
                "date": mtime,
                "sha": sha
            })
        return items

