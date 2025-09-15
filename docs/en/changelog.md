# Changelog

[ :material-download: Go to Downloads ](../downloads/){ .md-button .md-button--primary }
<!-- [ :material-shield-check: Verification & Integrity ](downloads/#verification-integrity){ .md-button } -->


---

???+ success ":material-tag: v0.2.0 · 2025-09-16 (Click to collapse/expand)"
    
    - ✨ **Coming Soon**

---

??? summary ":material-tag: v0.1.0 · 2025-09-14 (Click to expand)"
    
    - 🐛 Bug Fixes

        * **[Core Security Update]** Completely rewrote the deployment algorithm, fundamentally solving the **critical issue of potentially deleting original files in the game directory when disabling or switching Mods**. Operations are now much safer and more reliable.
        * **[Database Optimization]** Fixed data persistence issues, including bugs where category covers would be lost after restart.

    - ✨ New Features

        * **License System**: Brand new license system is now live! Newly installed users will automatically receive a **3-day full-feature trial license**.
        * **Multi-location Search**: Added powerful **search boxes** to both the "Mods Info" page and "Categories" page, allowing you to quickly locate the exact Mod you need from your vast collection.
        * **Deployment Manifest**: Added a "Deployment Manifest" view to the "Mods Management" page, giving you a clear overview of which Mod links are currently active in your game.

    - 🚀 Optimizations & Improvements

        * **Import Experience Optimization**:
            * You can now **customize Chinese names** for imported Mods.
            * Simplified interface by hiding lengthy file paths, making your Mod display cleaner and more organized.
        * **Mods Info Cover Import Optimization**
            * Added cropping tool for custom cover DIY
        * **Category Management Refactor**:
            * Categories now support sorting by time in both ascending and descending order
            * The category mods add/remove page features a brand new **left-right layout**
            * Enhanced visual contrast in the mods list, making add/remove operations more intuitive and efficient.
        * **Deployment Performance Boost**:
            * Significantly optimized deployment performance, especially for large Mod packages containing numerous files - enable/disable operations are now much faster.
        * **Core Performance Enhancement**:
            * Comprehensively optimized the application's **startup and loading speeds** for silky-smooth operation experience.
            * Refactored the underlying database for better data read/write performance. Existing users will experience **seamless data migration** during upgrade with no additional actions required.

    - 🐛 Other Optimizations

        * **[Error Message Optimization]** Added user-friendly error messages with direct output instead of HTTP errors
        * **[Windows 10 Performance Optimization]** Special optimizations for Windows 10 systems to avoid lag and various quirky bugs

---

<!-- ## Version Description Standards

- **New Features**: New functionality or visible capabilities (`feat:`)  
- **Fixes**: Bug fixes (`fix:`)  
- **Performance**: Performance or resource usage improvements (`perf:`)  
- **Breaking Changes**: Requires manual migration or is not backward compatible (`BREAKING CHANGE:`) -->