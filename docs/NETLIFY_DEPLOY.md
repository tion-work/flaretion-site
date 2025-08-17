# Netlify 部署指南

## 🚀 部署到 Netlify

本指南将帮助您将 Flaretion SaaS 网站部署到 Netlify 平台。

## 📋 前置要求

1. 确保您的代码已推送到 GitHub 仓库
2. 拥有 Netlify 账户（可以免费注册）

## 🔧 部署步骤

### 方法一：通过 Netlify UI 部署（推荐）

#### 1. 登录 Netlify
- 访问 [netlify.com](https://netlify.com)
- 使用 GitHub 账户登录

#### 2. 创建新站点
- 点击 "New site from Git"
- 选择 "GitHub" 作为 Git 提供商
- 授权 Netlify 访问您的 GitHub 账户

#### 3. 选择仓库
- 从列表中选择 `flaretion-site` 仓库
- 选择要部署的分支（通常是 `main` 或 `master`）

#### 4. 配置构建设置
在 "Configure the build settings" 部分，使用以下配置：

```
Build command: npm run build
Publish directory: out
```

#### 5. 环境变量设置
在 "Environment variables" 部分添加：

```
NODE_VERSION: 18
NPM_VERSION: 9
NODE_ENV: production
```

#### 6. 部署
- 点击 "Deploy site"
- 等待构建完成

### 方法二：通过 netlify.toml 文件（已配置）

如果您已经将 `netlify.toml` 文件推送到仓库，Netlify 会自动读取配置：

```toml
[build]
  command = "npm run build"
  publish = "out"
  
[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"
```

## ⚙️ 构建配置说明

### Next.js 静态导出
我们已将项目配置为静态导出模式：

```javascript
// next.config.js
const nextConfig = {
  output: 'export',        // 启用静态导出
  images: {
    unoptimized: true,     // 禁用图片优化
  },
  trailingSlash: true,     // 添加尾部斜杠
}
```

### 发布目录
- **开发环境**: `.next` (Next.js 默认)
- **生产环境**: `out` (静态导出目录)

## 🌐 域名配置

### 自动域名
Netlify 会为您的站点分配一个随机域名，格式如：
`https://random-name-123456.netlify.app`

### 自定义域名
1. 在站点设置中点击 "Domain settings"
2. 添加您的自定义域名
3. 按照指示配置 DNS 记录

## 🔄 自动部署

### 触发条件
- 推送到主分支时自动部署
- 创建 Pull Request 时生成预览部署
- 推送标签时触发生产部署

### 部署状态
- ✅ **Success**: 构建成功，站点可访问
- ❌ **Failed**: 构建失败，需要检查错误日志
- ⏳ **Building**: 正在构建中

## 🐛 常见问题解决

### 构建失败
1. **检查构建日志**
   - 在 Netlify 仪表板中查看构建日志
   - 确认所有依赖都已安装

2. **Node.js 版本问题**
   - 确保使用 Node.js 18 或更高版本
   - 在 `netlify.toml` 中设置 `NODE_VERSION = "18"`

3. **依赖安装失败**
   - 检查 `package.json` 中的依赖版本
   - 确保 `package-lock.json` 已提交

### 页面 404 错误
1. **检查重定向规则**
   - 确保 `netlify.toml` 中的重定向规则正确
   - 验证 `publish` 目录设置

2. **路由问题**
   - Next.js 静态导出需要特殊的路由处理
   - 确保所有页面都被正确导出

### Google AdSense 问题
1. **脚本加载**
   - 检查 AdSense 脚本是否正确加载
   - 验证发布商 ID 是否正确

2. **广告显示**
   - 确保广告单元代码正确
   - 检查是否有 JavaScript 错误

## 📱 性能优化

### 构建优化
- 使用 `npm ci` 而不是 `npm install` 进行更快的依赖安装
- 启用构建缓存
- 优化图片和静态资源

### 运行时优化
- 启用 Gzip 压缩
- 配置 CDN 缓存策略
- 优化字体加载

## 🔒 安全设置

### 安全头部
`netlify.toml` 已配置基本的安全头部：

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### HTTPS
Netlify 自动为所有站点提供 HTTPS 支持。

## 📊 监控和分析

### 部署监控
- 在 Netlify 仪表板中查看部署历史
- 监控构建时间和成功率
- 设置部署通知

### 性能监控
- 使用 Netlify Analytics（付费功能）
- 集成 Google Analytics
- 监控页面加载速度

## 🚀 后续步骤

1. **测试部署**
   - 访问生成的 Netlify 域名
   - 测试所有页面和功能
   - 验证 Google AdSense 是否正常工作

2. **配置自定义域名**
   - 添加您的品牌域名
   - 配置 DNS 记录
   - 设置 SSL 证书

3. **设置 CI/CD**
   - 配置自动部署规则
   - 设置分支保护
   - 配置部署通知

## 📞 获取帮助

- **Netlify 文档**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js 文档**: [nextjs.org/docs](https://nextjs.org/docs)
- **社区支持**: [community.netlify.com](https://community.netlify.com)

---

**注意**: 部署完成后，请确保测试所有功能，特别是 Google AdSense 的集成。
