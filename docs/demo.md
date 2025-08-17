# Flaretion SaaS 网站演示

## 🎯 项目概述

这是一个使用 Next.js 14 (App Router) 和 Tailwind CSS 构建的现代化 SaaS 首页。

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问网站
在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## ✨ 主要功能

### 🎨 现代化设计
- 响应式布局，支持移动端和桌面端
- 使用 Tailwind CSS 构建的现代化 UI
- 渐变背景和阴影效果
- 平滑的过渡动画

### 📱 完整页面组件
- **Header**: 导航栏，包含 Logo 和菜单
- **Hero**: 主要标题区域，突出 SaaS 价值主张
- **AdBanner**: Google AdSense 广告横幅
- **Features**: 6 个核心功能特性展示
- **Pricing**: 3 个价格方案（免费版、专业版、企业版）
- **CTA**: 行动号召区域
- **Footer**: 页脚信息

### 💰 Google AdSense 集成
- 已配置发布商 ID: `ca-pub-3668315850009617`
- 响应式广告单元
- 自动广告格式

### 🌐 国际化支持
- 中文界面
- 适合中文用户的内容和文案

## 🛠️ 技术特性

- **Next.js 14**: 使用最新的 App Router
- **TypeScript**: 完整的类型支持
- **Tailwind CSS**: 原子化 CSS 框架
- **响应式设计**: 移动优先的设计理念
- **SEO 优化**: 完整的 meta 标签和语义化 HTML
- **性能优化**: 图片优化、字体预加载等

## 📁 项目结构

```
flaretion-site/
├── app/                    # App Router 目录
│   ├── components/        # 可复用组件
│   │   ├── Header.tsx    # 页面头部
│   │   ├── Hero.tsx      # 英雄区域
│   │   ├── Features.tsx  # 功能特性
│   │   ├── Pricing.tsx   # 价格方案
│   │   ├── CTA.tsx       # 行动号召
│   │   ├── Footer.tsx    # 页脚
│   │   └── AdBanner.tsx  # 广告横幅
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 主页面
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── next.config.js         # Next.js 配置
└── tsconfig.json          # TypeScript 配置
```

## 🎨 自定义选项

### 颜色主题
修改 `tailwind.config.js` 中的 `primary` 颜色：

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // 主色调
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### 内容修改
- 更新 `app/layout.tsx` 中的元数据
- 修改各个组件中的文案内容
- 调整价格方案和功能特性

## 🚀 部署

### Vercel (推荐)
```bash
npm install -g vercel
vercel
```

### 其他平台
- Netlify
- Railway
- 自托管服务器

## 📱 移动端预览

网站在移动设备上完全响应式，包括：
- 汉堡菜单导航
- 触摸友好的按钮尺寸
- 优化的字体大小和间距
- 移动端优化的布局

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📄 许可证

MIT License

---

**注意**: 这是一个演示项目，实际使用时请根据您的需求进行相应的修改和配置。
