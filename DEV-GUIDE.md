<div align="center">

# 📐 开发规范

**快速但不潦草，灵活但有章法。**

[![返回主页](https://img.shields.io/badge/←_返回主页-README-blue?style=flat-square)](./README.md)

</div>

---

## 命名规则

每个项目是一个独立仓库：

```
100-day-{三位序号}-{英文短名}
```

示例：

```
100-day-001-todo-app
100-day-002-weather-dashboard
100-day-015-markdown-editor
100-day-042-ai-weekly-report
```

- 序号三位，从 001 开始
- 英文短名全小写，连字符分隔
- 一眼能看出是什么，不超过 5 个词

---

## 技术选择

**原则：什么合适用什么，不教条。**

Vibe Coding 的核心是快速把想法变成可用的东西，技术栈服务于这个目标。以下是常用选择，但不是限制：

### Web 端（主要形态）

| 层 | 推荐 | 备选 |
|:--|:-----|:-----|
| 前端框架 | Vue 3 + Vite | React, Next.js, Nuxt, 纯 HTML |
| 样式 | Tailwind CSS | UnoCSS, 原生 CSS |
| 后端 | Node.js, Python FastAPI | Go, Cloudflare Workers |
| 数据库 | SQLite, Supabase | PostgreSQL, MongoDB |
| 部署 | Vercel, Cloudflare Pages | 自有服务器 |

### 如果项目升级

社区反响好的项目，可能会扩展到其他平台：

| 平台 | 技术方向 |
|:-----|:---------|
| 小程序 | uni-app / Taro / 原生 |
| App | React Native / Flutter |
| 桌面端 | Electron / Tauri |
| CLI 工具 | Node.js / Python / Go |
| API 服务 | FastAPI / Express |

这些不需要在 MVP 阶段考虑。先把 Web 版做好，再说别的。

---

## 项目结构

每个项目仓库至少包含：

```
100-day-xxx-项目名/
├── README.md           ← 必须：项目说明
├── LICENSE             ← 必须：MIT 协议
├── .gitignore
├── package.json        ← 或 requirements.txt 等
├── src/                ← 源代码
└── public/             ← 静态资源
```

### 每个项目的 README 要写什么

1. 项目名 + 一句话说明
2. **在线地址**（最重要，让人直接用）
3. 截图或 GIF
4. 功能列表
5. 本地运行方式
6. 技术栈

不需要写得很长，但必须让人 30 秒内知道这是什么、怎么用。

---

## 代码规范

**核心原则：别人能看懂你的代码。**

- ESLint + Prettier 保持风格统一
- 变量函数英文命名，注释可以用中文
- `main` 分支始终可部署
- 开发用 `dev` 或 feature 分支

### Commit 格式

```
<type>: <描述>

feat     新功能
fix      修 bug
docs     文档
style    格式
refactor 重构
test     测试
chore    构建/工具
```

---

## 部署要求

- **国内可直接访问**，这是硬性要求
- 统一使用子域名：`{项目名}.openvibelab.com`（如 `todo.openvibelab.com`）
- 部署平台：Vercel（主力） / Cloudflare Pages（备选）
- HTTPS 必须
- 考虑 CDN 加速，保证访问速度

---

## 许可证

全部 MIT，除非特殊说明。

---

<div align="center">

**[返回主页](./README.md)** · **[项目总览](./PROJECTS.md)** · **[贡献指南](./CONTRIBUTING.md)**

</div>
