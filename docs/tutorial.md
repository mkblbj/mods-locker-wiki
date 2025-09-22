---
comments: true
---

# NBA 2K Mods Locker 使用教程

!!! warning "操作前先备份你的 **Mods 目录**！"
    误操作或冲突时可快速还原。

???+ info "🎬 视频教程（B 站）"

    <div class="video-wrapper">
      <iframe src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1mFnwzXEBV&p=1"
              scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
    </div>
    <p><a href="https://www.bilibili.com/video/BV1mFnwzXEBV/" target="_blank">🔗 在 B 站打开</a></p>

!!! tip "一句话搞懂"
    把 **“Mods 库”** 里的文件，以**不复制**的方式**部署**到 **“游戏目录/mods”**；  
    省空间，可一键 **启用/禁用**。

## 🚀 2 分钟上手（TL;DR）

**Step 1｜设置目录**

1. 打开 **设置 → 目录配置**
2. 选择 **游戏目录**（==指向 2K25/26 根目录；不要选 `…/mods`==）
3. 选择 **Mods 库目录**
![settings](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250914/bLiU/2036X1350/image.png/webp)

**Step 2｜导入 Mods**

1. 进入 **Mods 信息管理（或 Mods 库）**
2. 点击 **扫描并刷新**（会扫描库目录，发现新文件夹后可一键导入）
3. 勾选 → **导入选中**（若有导入面板）
4. 设置分类 → 将 mods **加入分类** 

![import](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250917/kdS1/2130X1418/CleanShot_2025-09-17_at_5%E2%80%AF.27.33%402x.png/webp)

![categories](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250917/ovmp/1986X1308/CleanShot_2025-09-17_at_6%E2%80%AF.59.47%402x.png/webp)

**Step 3｜启用并自动部署（新）**

1. 打开 **Mods 管理**，切换开关 **启用/禁用**
2. 系统会在约 **2 秒** 内自动进行**增量部署**（顶部会显示“等待部署…”与进度提示）
3. 不再需要手动点“部署已启用的 Mods”
4. 需要回到全干净状态：点右上角 **清理并重置**（清理链接并禁用全部）

![deploy](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250914/6Lhx/1950X1428/CleanShot_2025-09-14_at_0%E2%80%AF.05.09%402x.png/webp)

---

## 🔎 1 分钟自查（最常见问题）
- **目录没选对** → 游戏目录选到 **2K25/26 根**，不是 `…/mods`  
- **刚启用没生效** → 等待约 **2 秒** 自动部署；顶部有“等待部署…”徽章和进度；如异常可用 **清理并重置** 后再试  
- **层级异常** → 每个 Mod **单独文件夹**（示例见下）  
- **权限/安全软件** → 无法创建链接时，请以管理员运行或放行安全软件  
- **免费版启用上限** → 免费版最多启用 **10 个 Mods**；达到上限会提示“升级”

---

## 🗂️ 推荐目录与命名（必须，易管理）

??? tip "建议结构（每个 Mod 独立文件夹）"
    **推荐两种：**

    - `你的Mods库目录/<mod-name>/mods/<具体内容>/`  
      例：`face-kobe08/mods/char/sig/png...`
    - `你的Mods库目录/<mod-name>/<具体内容>/`  
      例：`face-kobe08/char/sig/png...`

    **命名示例：**

    -  科比面补：`face-kobe08/mods/char/sig/png...` 或 `face-kobe08/char/sig/png...`
    -  湖人 2010 总决赛球衣：`jersey-01lakers-finals/mods/char/...` 或 `jersey-01lakers-finals/char/...`
    - 科比 10 圣诞鞋：`shoes-kobe10-christmas/clothing/...` 或 `shoes-kobe10-christmas/mods/clothing/...`
    - 例如拜纳姆面补

      ![900X290/image.png](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250914/IbGM/900X290/image.png)

    **小贴士：**

    - 尽量使用 **英文命名**，统一风格、简洁清楚  
    - 一个 Mod 最好 **一个文件夹**（DIY 例外）

    ![tree](https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250907/vLJi/401X455/RustDesk_2025-09-07_%E4%B8%8B%E5%8D%882.55.11.png/webp)

---- 

## 🔗 Modium 集成（可选）
- 在主页打开 **Modium 集成** → 点击 **启动 Modium**，进入 **Library / NBA2K25(26)**。  
- 在 Modium 中管理 Modium 的 Mods；本应用继续负责**部署与开关**。

??? info "视频演示（B 站 / YouTube）"
    <div class="video-wrapper">
      <iframe src="//player.bilibili.com/player.html?bvid=BV16SHfzzEwW&p=1"
              scrolling="no" frameborder="no" allowfullscreen="true"></iframe>
    </div>

    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/BmPMehdjIXQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
    </div>

    ![modium](https://tc-new.z.wiki/autoupload/f/0pBYZfzIlUv4F-Bz-bvqDF_82zW-loUyBwHfOBaTmzCyl5f0KlZfm6UsKj-HyTuv/20250904/uW9h/2283X1441/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2025-09-04_215307.png/webp)

---

## 🧩 高级与即将上线（了解即可）

??? info "配置集（Profiles）*即将上线*"
    为不同场景保存一组启用状态（如“现役”、“复古”），一键切换。

??? info "清单（Manifest）*即将上线*"
    查看当前已启用 Mods 列表；支持导出/导入共享清单。

---

## 🔐 版本与许可
- **试用版**：新下载自带 **3 天完整试用**，无需激活码  
- **完整版**：解锁全部功能；如需购买请联系作者  
- 详细限制见下载页与更新日志

---

## ❓FAQ
**Q1：导入失败怎么办？**  
请核对目录是否配置正确，目录层级是否规范（见“推荐结构”）。

**Q2：Modium 无法启动/列表无响应？**  
确认已在 **Library / NBA2K25(26)** 页面；检查 Modium 路径与权限。

**Q3：如何备份与还原？**  
备份你的 **Mods 库目录** 即可；部署是链接，清理即可恢复。

**Q4：为什么开关后没看到部署？**  
启用后系统会以**增量方式**在约 **2 秒** 内自动部署；期间顶部显示“等待部署…”与进度。若仍异常：1) 检查设置中的路径；2) 点击 **清理并重置** 后再尝试。

---

## 🆘 技术支持
- 查看应用内 **帮助**  
- 官网教程与常见问题：https://modslocker.x-yue.top/tutorial/  
- 联系作者（见设置页）；或到 Discord 反馈

---

*本教程为随着版更新，详细说明已折叠在相应小节中。随着版本演进，界面可能略有变化。*