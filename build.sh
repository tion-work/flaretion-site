#!/bin/bash

echo "🚀 开始构建 Flaretion 官网..."

# 设置环境变量
export NODE_ENV=production
export NODE_VERSION=18

# 清理缓存
echo "🧹 清理缓存..."
rm -rf .next
rm -rf node_modules/.cache

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位置: .next/"
    ls -la .next/
else
    echo "❌ 构建失败！"
    exit 1
fi
