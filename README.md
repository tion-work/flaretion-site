# Flaretion SaaS 网站

一个使用 Next.js (App Router) 和 Tailwind CSS 构建的现代化 SaaS 首页。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **字体**: Google Fonts (Inter)

## 功能特性

- 🎨 现代化响应式设计
- 📱 移动端友好
- 🚀 基于 App Router 的 Next.js 14
- 💰 集成 Google AdSense
- 🎯 完整的 SaaS 页面组件
- ⚡ 优化的性能和 SEO

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm run start
# 或
yarn build
yarn start
# 或
pnpm build
pnpm start
```

## 项目结构

```
flaretion-site/
├── app/                    # App Router 目录
│   ├── components/        # 可复用组件
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页面
├── public/                # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── next.config.js         # Next.js 配置
└── tsconfig.json          # TypeScript 配置
```

## Google AdSense

项目已集成 Google AdSense，使用以下发布商 ID：
- `ca-pub-3668315850009617`

## 自定义

- 修改 `tailwind.config.js` 来自定义颜色主题
- 在 `app/components/` 目录中编辑组件
- 更新 `app/layout.tsx` 中的元数据

## 部署

项目可以部署到任何支持 Next.js 的平台：

- [Vercel](https://vercel.com) (推荐)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- 自托管服务器

## 许可证

MIT License