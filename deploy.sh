#!/bin/bash

# Flaretion 官网部署脚本

echo "🚀 开始部署 Flaretion 官网..."

# 检查 Node.js 版本
echo "📋 检查环境..."
node --version
npm --version

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo "🌐 启动生产服务器..."
    npm start
else
    echo "❌ 构建失败！"
    exit 1
fi
