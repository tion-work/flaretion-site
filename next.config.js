/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 禁用图片优化（静态导出不支持）
  images: {
    unoptimized: true,
  },
  
  // 设置基础路径（如果需要）
  // basePath: '',
  
  // 设置资源前缀（如果需要）
  // assetPrefix: '',
  
  // 确保所有页面都被导出
  trailingSlash: true,
}

module.exports = nextConfig
