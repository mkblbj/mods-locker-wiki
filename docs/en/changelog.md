# Changelog

[ :material-download: Go to Downloads ](../downloads/){ .md-button .md-button--primary }
<!-- [ :material-shield-check: Verification & Integrity ](downloads/#verification--integrity){ .md-button } -->

---

## Changelog: v0.2.2 - September 25, 2025

???+ success ":material-tag: v0.2.2 · 2025-09-25 (click to toggle)"

    ### ✨ New Features

    - **Modium Game Launcher Feature**: Added Modium game launcher functionality to support quick launch of NBA 2K game versions, optimizing user experience
    - **Tooltip Component**: Added Tooltip component to enhance interface interaction and improve user operation feedback
    ![简单图床 - EasyImage](https://pic.x-yue.top/i/2025/09/25/xqsso0.png)
    ![简单图床 - EasyImage](https://pic.x-yue.top/i/2025/09/25/xqtk2h.png)

    ### 🐛 Bug Fixes & Improvements

    - **Category Page Display Fix**: Fixed bug where category details page didn't display immediately after adding categories in info page
    - **Update Dialog Optimization**: Added update notes link parsing component, optimized update dialog logic, support opening download page in browser

    ### 📝 Other Updates

    - **User Experience Details**: Continuously optimized various interaction details to improve overall user experience

---

??? summary ":material-tag: v0.2.1 · 2025-09-21 (click to toggle)"

    ### ✨ New Features

    - **System Default Category**: Introduced "Uncategorized" as system default category to optimize mod management workflow. Newly imported mods will automatically be placed in "Uncategorized" to avoid management confusion
    - **Mod Relocation Feature**: Added mod relocation functionality to reselect mod file locations for better organization and maintenance of mod library
    - **Mod Removal Feature**: Enhanced mod management capabilities to completely remove unwanted mods from the system
    - **Multilingual Optimization**: Updated multilingual support
    - **Enhanced Search Experience**: Improved search functionality for smoother and more accurate mod search experience
    - **Category Tag System**: Added category tag components to optimize category display logic on Mods page, providing more intuitive category navigation

    ### 🐛 Bug Fixes & Improvements

    - **Free Version Limitation Prompts**: Optimized free version feature limitation prompts to improve user interaction feedback experience
    - **Management Page Optimization**: Optimized management page display content and layout to enhance visual effects and user experience
    - **Hardware Encryption Service**: Simplified hardware encryption service implementation to improve system stability
    - **Info Page Scan Refresh Optimization**: Fixed issue where list doesn't automatically refresh after scan import, improving user experience
    - **Removal Function Experience Optimization**: Optimized mod removal function user feedback, added toast prompts with specific mod names
    - **Delete Function Smooth Experience**: Optimized delete operations using partial update mechanism instead of page refresh, eliminating loading circles and improving operation smoothness
    - **System Constants Optimization**: Introduced system category ID constants to improve user experience and system consistency
    - **Cover Management Improvements**: Updated cover image saving logic to ensure users are notified immediately after cover updates, enhancing interaction experience

    ### 🚀 Performance Improvements

    - **Mod Management Process Optimization**: Refactored mod management related APIs and database operations to improve management efficiency
    - **Category System Refactoring**: Optimized category management system to support system default categories, improving data organization efficiency
    - **Interface Response Speed**: Optimized frontend component loading and rendering performance to improve user operation response speed
    - **Delete Operation Performance Optimization**: Optimized mod delete operations using partial update mechanism instead of full page refresh, improving operation smoothness
    - **Data Cleanup Mechanism**: Introduced cleanup of expired data functionality to ensure frontend data is updated promptly, improving system performance
    - **Error Handling Optimization**: Improved Mods page loading experience with friendly error handling mechanisms, enhancing user experience

    ### 🔧 Technical Updates

    - **Backend API Optimization**: Refactored category and mod management related APIs to improve data processing capabilities
    - **Uncategorized Mods Backfill**: Added automatic backfill functionality for uncategorized mods to optimize mod management workflow
    - **Mods Page Loading Logic**: Adjusted Mods page loading logic to improve user experience and system performance

    ### 🎨 User Interface (UI/UX)

    - **Category Page Refactoring**: Refactored category management page to improve visual hierarchy and operation convenience
    - **Mod Card Optimization**: Optimized mod information display cards to improve information density and readability
    - **Navigation Bar Adjustments**: Fine-tuned UI and navigation bar interactions to improve overall visual consistency
    - **Interaction Feedback Improvements**: Enhanced user feedback for various operations to improve operation experience
    - **Operation Experience Unification**: Unified add and delete operation user experiences, removed page refresh loading circles to improve operation smoothness
    - **Category Tag Display**: Added category tag components to provide more intuitive category navigation and display effects

    ### 📝 Other Updates

    - **User Experience Details**: Continuously optimized various interaction details to improve overall user experience

---

??? summury ":material-tag: v0.2.0 · 2025-09-17 (click to toggle)"

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
