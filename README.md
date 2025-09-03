# Flaretion 官网

基于 Next.js + Tailwind CSS 构建的专业策略分析平台官网。

## 🚀 项目特色

### 差异化定位
- **专注策略分析**：不做交易执行，专注策略分析和信号生成
- **多周期RSI共振**：结合6/12/24小时RSI指标，提高信号准确率
- **中国市场优势**：深度服务中国用户，本土化体验

### 技术栈
- **Next.js 14**：React 全栈框架
- **TypeScript**：类型安全
- **Tailwind CSS**：原子化CSS框架
- **响应式设计**：完美适配各种设备

## 📁 项目结构

```
site/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页
│   └── components/         # React 组件
│       ├── Header.tsx      # 导航栏
│       ├── Hero.tsx        # 首页横幅
│       ├── Features.tsx    # 功能特色
│       ├── StrategyLibrary.tsx # 策略库
│       ├── Pricing.tsx     # 价格方案
│       ├── Testimonials.tsx # 用户评价
│       ├── CTA.tsx         # 行动号召
│       └── Footer.tsx      # 页脚
├── public/                 # 静态资源
├── tailwind.config.ts      # Tailwind 配置
├── next.config.js          # Next.js 配置
└── package.json           # 依赖管理
```

## 🎨 设计特色

### 视觉风格
- **现代简约**：清爽的界面设计
- **渐变色彩**：蓝色到紫色的品牌渐变
- **卡片布局**：信息层次清晰
- **动画效果**：流畅的交互动画

### 组件设计
- **模块化**：每个功能独立组件
- **可复用**：统一的样式系统
- **响应式**：移动端优先设计
- **无障碍**：符合WCAG标准

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
npm start
```

## 📱 页面结构

### 首页 (page.tsx)
- **Hero Section**：主标题和CTA按钮
- **Features Section**：核心功能展示
- **Strategy Library**：策略库展示
- **Pricing**：价格方案对比
- **Testimonials**：用户评价
- **CTA Section**：最终行动号召

### 核心组件

#### Header.tsx
- 响应式导航栏
- 移动端汉堡菜单
- 品牌Logo和导航链接

#### Hero.tsx
- 主标题和副标题
- 统计数据展示
- 模拟仪表板预览
- 浮动动画效果

#### Features.tsx
- 6大核心功能展示
- 与竞品对比
- 图标和描述

#### StrategyLibrary.tsx
- 策略库展示
- 分类标签（基础/进阶/高级）
- 性能指标（胜率/收益率）
- 触发条件展示

#### Pricing.tsx
- 3个价格方案
- 功能对比
- 常见问题
- 退款保证

## 🎯 营销策略

### 价值主张
- **WunderTrading**：自动化交易执行
- **Flaretion**：智能策略分析

### 目标用户
1. **策略分析师**：需要多维度技术分析工具
2. **量化交易员**：需要策略回测和优化功能
3. **个人投资者**：需要简单易用的信号提醒

### 差异化优势
1. **技术深度**：多周期共振分析
2. **模块化设计**：策略库组合系统
3. **中国市场**：本土化优势
4. **专业化定位**：专注策略分析

## 🔧 自定义配置

### 品牌色彩
在 `tailwind.config.ts` 中修改：
```typescript
colors: {
  primary: {
    // 蓝色系
  },
  secondary: {
    // 紫色系
  }
}
```

### 内容更新
- 修改各组件中的文本内容
- 更新策略库数据
- 调整价格方案

### 样式定制
- 使用 Tailwind CSS 类名
- 在 `globals.css` 中添加自定义样式
- 利用 CSS 变量进行主题切换

## 📈 SEO 优化

### 元数据
- 页面标题和描述
- Open Graph 标签
- Twitter Card 支持

### 性能优化
- 图片懒加载
- 代码分割
- 静态生成

### 可访问性
- 语义化HTML
- 键盘导航
- 屏幕阅读器支持

## 🚀 部署

### Vercel (推荐)
```bash
npm install -g vercel
vercel
```

### 其他平台
- Netlify
- AWS Amplify
- 自建服务器

## 📞 联系支持

- 官网：[https://flaretion.com](https://flaretion.com)
- 邮箱：support@flaretion.com
- 微信：FlaretionSupport

---

**Flaretion** - 让策略更智能 🚀