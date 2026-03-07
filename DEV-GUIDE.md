<div align="center">

# 📐 开发规范

[![返回主页](https://img.shields.io/badge/←_返回主页-README-blue?style=flat-square)](./README.md)

</div>

---

## 仓库命名规则

每个项目是一个独立仓库，命名格式：

```
100-day-{三位序号}-{英文短名}
```

示例：

```
100-day-001-todo-app
100-day-002-weather-dashboard
100-day-015-markdown-editor
```

规则：

- 序号三位数，从 001 开始
- 英文短名用小写，单词间用连字符 `-`
- 短名应该一眼能看出项目是什么
- 不超过 5 个单词

---

## 技术栈选择

没有固定限制，根据项目需求选择最合适的技术。常用的包括：

**前端框架**
- Vue 3 + Vite（优先，生态成熟）
- React + Next.js
- 纯 HTML/CSS/JS（简单项目）

**CSS**
- Tailwind CSS（优先）
- UnoCSS

**后端（如果需要）**
- Node.js + Express / Fastify
- Python + FastAPI
- Cloudflare Workers / Vercel Serverless

**部署**
- Vercel（优先，国内可访问）
- Cloudflare Pages
- 自有服务器（必要时）

---

## 项目结构模板

每个项目仓库应包含：

```
100-day-xxx-项目名/
├── README.md           ← 项目说明（必须）
├── LICENSE             ← MIT 协议（必须）
├── .gitignore          ← 忽略文件
├── package.json        ← 依赖管理
├── src/                ← 源代码
├── public/             ← 静态资源
└── docs/               ← 补充文档（可选）
```

### 每个项目的 README 应包含

1. 项目名称和一句话描述
2. 在线预览地址
3. 截图或 GIF 演示
4. 功能列表
5. 本地运行方式
6. 技术栈说明
7. 许可证

---

## 代码规范

**通用**
- 使用 ESLint + Prettier 保持代码风格统一
- 变量和函数名使用英文命名
- 注释可以用中文
- 提交前确保没有 lint 错误

**Git 工作流**
- `main` 分支始终可部署
- 开发在 `dev` 或 feature 分支
- 合并前需要测试通过

**Commit 规范**

```
<type>: <简短描述>

类型：
feat     新功能
fix      修复
docs     文档
style    格式
refactor 重构
test     测试
chore    构建/工具
```

---

## 部署规范

- 所有项目必须部署在国内可直接访问的地址
- 推荐使用 `.cn` 域名或已备案域名
- 项目地址格式建议：`xxx.openvibelab.com`（子域名）或独立域名
- 确保 HTTPS
- 考虑 CDN 加速

---

## 许可证

所有项目统一使用 **MIT License**，除非有特殊情况另行说明。

---

<div align="center">

**[返回主页](./README.md)** · **[查看项目列表](./PROJECTS.md)**

</div>
