# 🚀 Flaretion SaaS 网站

一个使用 Next.js (App Router) 和 Tailwind CSS 构建的现代化 SaaS 首页，已集成 Google AdSense 并针对 SEO 和用户体验进行了全面优化。

## ✨ 主要特性

- 🎨 **现代化设计**: 响应式布局，支持所有设备
- 📱 **移动端优化**: 完美的移动端体验
- 🚀 **Next.js 14**: 使用最新的 App Router 架构
- 💰 **Google AdSense**: 已集成并优化广告展示
- 🎯 **SEO 优化**: 完整的搜索引擎优化配置
- ⚡ **性能优化**: 快速加载和流畅交互
- 🔍 **完整页面**: 首页、关于我们、联系我们等

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **字体**: Google Fonts (Inter)
- **部署**: Netlify (已配置)
- **广告**: Google AdSense

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本
```bash
npm run build
npm run start
```

## 📁 项目结构

```
flaretion-site/
├── app/                    # Next.js 应用代码
│   ├── components/         # React 组件
│   ├── about/             # 关于我们页面
│   ├── contact/           # 联系我们页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── public/                 # 静态资源
│   ├── robots.txt         # 搜索引擎配置
│   └── sitemap.xml        # 网站地图
├── docs/                   # 项目文档
├── package.json            # 项目依赖配置
├── next.config.js          # Next.js 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── netlify.toml           # Netlify 部署配置
```

## 🎯 页面功能

### 首页 (`/`)
- 产品介绍和主要特性
- 价格方案展示
- Google AdSense 广告集成
- 响应式设计

### 关于我们 (`/about`)
- 公司介绍和故事
- 使命与愿景
- 核心价值观
- 团队介绍

### 联系我们 (`/contact`)
- 详细联系信息
- 联系表单
- 常见问题解答
- 社交媒体链接

## 💰 Google AdSense

项目已集成 Google AdSense，使用以下发布商 ID：
- `ca-pub-3668315850009617`

### 广告特性
- 异步加载，不阻塞页面渲染
- 响应式布局，适配所有设备
- 智能状态管理，避免重复加载
- 广告拦截器检测和友好提示

## 🔍 SEO 优化

### 已完成的优化
- 完整的 Meta 标签配置
- Open Graph 和 Twitter Cards
- 结构化数据 (Schema.org)
- robots.txt 和 sitemap.xml
- 预连接和性能优化

### 关键词策略
- SaaS、企业服务、智能化
- 数字化转型、云端服务
- 企业软件、工作流程、团队协作

## 🚀 部署

### Netlify 部署 (推荐)
项目已完全配置好 Netlify 部署，包括：
- 静态导出配置
- 构建命令和发布目录
- 重定向规则和安全头部
- 环境变量配置

详细部署指南请查看 [docs/NETLIFY_DEPLOY.md](./docs/NETLIFY_DEPLOY.md)

### 其他平台
项目也可以部署到：
- [Vercel](https://vercel.com)
- [Railway](https://railway.app)
- 自托管服务器

## 📚 文档

完整的项目文档位于 `docs/` 目录：

- **[部署指南](./docs/NETLIFY_DEPLOY.md)** - 详细的 Netlify 部署步骤
- **[部署总结](./docs/DEPLOY_SUMMARY.md)** - 部署配置和问题解决记录
- **[SEO 优化](./docs/SEO_OPTIMIZATION.md)** - SEO 和广告展示优化记录
- **[导航修复](./docs/NAVIGATION_FIX.md)** - 导航菜单修复记录
- **[页面导航](./docs/PAGE_NAVIGATION.md)** - 页面结构和导航说明

## 🎨 自定义

### 主题定制
- 修改 `tailwind.config.js` 来自定义颜色主题
- 在 `app/components/` 目录中编辑组件
- 更新 `app/layout.tsx` 中的元数据

### 内容更新
- 编辑 `app/page.tsx` 更新首页内容
- 修改 `app/about/page.tsx` 更新公司信息
- 调整 `app/contact/page.tsx` 更新联系信息

## 🔧 开发建议

### 代码质量
- 使用 TypeScript 确保类型安全
- 遵循 React 最佳实践
- 保持组件的可复用性

### 性能优化
- 使用 Next.js 的图片优化
- 实现代码分割和懒加载
- 优化字体和资源加载

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Flaretion SaaS 网站 - 专业的智能化解决方案** 🎉

如有问题，请查看 [docs/](./docs/) 目录中的详细文档。
