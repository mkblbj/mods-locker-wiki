# MkDocs 到 VitePress 迁移说明

## 迁移完成时间
2025-11-08

## 备份位置
所有 MkDocs 相关文件已备份到 `.backup/mkdocs/` 目录，包括：
- `mkdocs.yml` - 原始配置文件
- `requirements.txt` - Python 依赖
- `overrides/` - 自定义模板目录
- `site/` - 构建输出目录

## 主要变更

### 1. 配置文件
- **原配置**: `mkdocs.yml`
- **新配置**: `docs/.vitepress/config.mts`
- 已迁移所有导航、侧边栏、多语言配置

### 2. 资源文件
- **原位置**: `docs/assets/`
- **新位置**: `docs/.vitepress/public/assets/`
- 已迁移所有图片、CSS、JavaScript 文件

### 3. 多语言支持
- 中文（默认）: `/`
- 英文: `/en/`
- 配置已完整迁移

### 4. 导航结构
- 首页
- 用户使用教程
- 下载
- 更新日志

### 5. 自定义样式和脚本
- `changelog.css` - 更新日志样式
- `video.css` - 视频播放器样式
- `header-social.css` - 社交链接样式
- `header-social.js` - 社交链接脚本（已配置但可能需要适配 VitePress）

## 使用方法

### 开发模式
```bash
npm run docs:dev
```

### 构建
```bash
npm run docs:build
```

### 预览构建结果
```bash
npm run docs:preview
```

## 注意事项

1. **Markdown 语法差异**: 
   - MkDocs Material 的 `!!!` 和 `???` 语法已转换为 VitePress 的 `:::` 语法
   - 按钮语法从 `.md-button` 改为 `.vp-button`

2. **资源路径**:
   - 所有资源文件路径已更新为 `/assets/...` 格式
   - 确保使用绝对路径引用资源

3. **自定义脚本**:
   - `header-social.js` 是为 MkDocs Material 设计的，可能需要适配 VitePress 的 DOM 结构

4. **插件功能**:
   - MkDocs 的某些插件功能（如 git-revision-date、macros 等）在 VitePress 中需要使用不同的实现方式

## 恢复备份

如果需要恢复 MkDocs 配置：
```bash
cp .backup/mkdocs/mkdocs.yml .
cp .backup/mkdocs/requirements.txt .
cp -r .backup/mkdocs/overrides .
```

## 已完成的迁移工作

### ✅ 核心配置
- [x] 创建完整备份到 `.backup/mkdocs/`
- [x] 配置 VitePress 多语言支持（中文/英文）
- [x] 迁移导航和侧边栏配置
- [x] 配置社交链接和主题设置

### ✅ 资源文件
- [x] 迁移所有图片到 `docs/.vitepress/public/assets/images/`
- [x] 迁移所有 CSS 到 `docs/.vitepress/public/assets/stylesheets/`
- [x] 迁移所有 JavaScript 到 `docs/.vitepress/public/assets/javascripts/`
- [x] 在配置中添加资源引用

### ✅ 文档转换
- [x] 转换 `docs/index.md`（中文首页）
- [x] 转换 `docs/en/index.md`（英文首页）
- [x] 转换 `docs/tutorial.md`（教程页面）
- [x] 转换 `docs/downloads/index.md`（下载页面）
- [x] 转换 `docs/changelog.md`（更新日志）

### ✅ 语法转换
- [x] `!!!` → `:::` (警告/提示/信息块)
- [x] `???` → `:::` (可折叠块)
- [x] `.md-button` → `.vp-button` (按钮样式)
- [x] `:material-*:` → 移除（图标语法）
- [x] 修复缩进和格式问题

## 待办事项

- [ ] 测试所有页面链接是否正常
- [ ] 验证多语言切换功能
- [ ] 检查自定义 CSS 和 JS 是否正常工作
- [ ] 适配 header-social.js 到 VitePress（如需要）
- [ ] 转换剩余的文档文件（如 `tutorial copy.md`、`en/tutorial.md` 等）
- [ ] 清理不再需要的 MkDocs 相关文件（site/, venv/ 等，可选）

