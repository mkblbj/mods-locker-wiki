# Changelog

[ :material-download: Go to Downloads ](../downloads/){ .md-button .md-button--primary }
<!-- [ :material-shield-check: Verification & Integrity ](downloads/#verification--integrity){ .md-button } -->

---

???+ success ":material-tag: v0.2.0 · 2025-09-17 (click to toggle)"

    - ✨ **Added**
        - **Cover cropping** on the Categories page
        - **Multilingual UI**: Chinese / Japanese / English (JP & EN via AI translation — please report inaccuracies)
        - **Auto‑update**
            - Automatically checks for and downloads new versions
            - One‑click install — no manual copying
            - Auto‑restarts the app after updating
            - Preview release notes to avoid accidental upgrades

    - 🛠️ **Fixed**
        - **Edit** button unresponsive in the **Info → Mods list** view

    - 🎨 **UI**
        - Redesigned the UI and navigation bar for smoother interactions and a more consistent look

    - ⚡ **Performance**
        - Major speed‑up for enable/disable; no more long “not responding” periods
        - Benchmarks: patch sets of `~108 GB / 6 files` and `~18 GB / 3000 files` both toggle in **≈5 s**

    - 🔧 **Other**
        - Breaking changes: **None**

---

??? summary ":material-tag: v0.1.0 · 2025-09-14 (click to expand)"
    
    - 🐛 **Bug Fixes**
        - **[Core safety]** Rewrote the deployment algorithm to eliminate the risk of **accidentally deleting existing files** in the game directory when disabling or switching mods — operations are now safer and more reliable.  
        - **[Database]** Fixed persistence issues that caused items like category covers to be lost after restart.

    - ✨ **New Features**
        - **License system**: brand‑new — new installs automatically receive a **3‑day full‑feature trial**.  
        - **Search in multiple views**: added powerful **search boxes** to “Mods Info” and “Categories” so you can quickly locate what you need among thousands of mods.  
        - **Deployed list**: new “Deployed list” view in “Mods Management” shows which mod links are currently active in‑game.

    - 🚀 **Optimizations & Improvements**
        - **Import experience**
            - You can now assign **custom Chinese names** to imported mods.
            - Simplified lists by hiding long file paths for a cleaner look.
        - **Covers in Mods Info**
            - Added a cropping tool so you can DIY covers freely.
        - **Categories refactor**
            - Sort categories by time (ascending/descending).
            - Refreshed **left/right layout** for adding/removing; increased contrast in lists so operations are clearer and faster.
        - **Deployment performance**
            - Significant speed‑ups, especially for large packs containing many files.
        - **Core performance**
            - Faster app startup and loading.  
            - Refactored the underlying database; existing users get a **seamless data migration** with no extra steps.

    - 🧹 **Other Enhancements**
        - **[Error messages]** Friendlier error prompts — no raw HTTP errors.  
        - **[Windows 10]** Targeted optimizations to reduce stutter and strange glitches.
