# Flaretion 官网部署指南

## 🚀 Netlify 部署

### 问题解决

#### 1. Tailwind CSS 依赖问题
**问题**: `Error: Cannot find module 'tailwindcss'`

**解决方案**: 将 `tailwindcss`、`autoprefixer`、`postcss` 从 `devDependencies` 移动到 `dependencies`

```json
{
  "dependencies": {
    "next": "^14.2.32",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

#### 2. 组件路径解析问题
**问题**: `Module not found: Can't resolve '@/components/Hero'`

**解决方案**: 确保 `tsconfig.json` 中的路径配置正确

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 部署配置

#### 1. Netlify 配置 (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 2. 构建命令
```bash
npm run build
```

#### 3. 发布目录
```
.next
```

### 部署步骤

#### 方法1: 通过 Git 连接
1. 将代码推送到 GitHub
2. 在 Netlify 中连接 GitHub 仓库
3. 设置构建配置：
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `18`

#### 方法2: 手动部署
1. 本地构建: `npm run build`
2. 将 `.next` 文件夹拖拽到 Netlify
3. 设置重定向规则

### 环境变量

如果需要环境变量，在 Netlify 控制台设置：
```
NODE_ENV=production
NODE_VERSION=18
```

### 域名配置

#### 推荐域名
- **主站**: `signal.flaretion.com`
- **备选**: `analyze.flaretion.com`

#### DNS 配置
```
CNAME signal.flaretion.com -> your-site.netlify.app
```

### 性能优化

#### 1. 构建优化
- 使用 `npm ci` 而不是 `npm install`
- 启用构建缓存
- 设置 Node.js 版本为 18

#### 2. 运行时优化
- 静态生成 (SSG)
- 图片优化
- 代码分割

### 监控和调试

#### 1. 构建日志
- 查看 Netlify 构建日志
- 检查依赖安装
- 验证构建输出

#### 2. 运行时监控
- 使用 Netlify Analytics
- 设置错误监控
- 性能监控

### 常见问题

#### Q: 构建失败，找不到模块
**A**: 确保所有依赖都在 `dependencies` 中，不在 `devDependencies`

#### Q: 样式不生效
**A**: 检查 Tailwind CSS 配置和 PostCSS 配置

#### Q: 组件导入失败
**A**: 检查 `tsconfig.json` 中的路径配置

#### Q: 部署后页面空白
**A**: 检查控制台错误，可能是路由或组件问题

### 部署检查清单

- [ ] 所有依赖在 `dependencies` 中
- [ ] `netlify.toml` 配置正确
- [ ] 本地构建成功
- [ ] 组件导入路径正确
- [ ] Tailwind CSS 配置正确
- [ ] 环境变量设置
- [ ] 域名配置
- [ ] 重定向规则

---

**部署成功后访问**: `https://signal.flaretion.com`

**Flaretion** - 让策略更智能 🚀
