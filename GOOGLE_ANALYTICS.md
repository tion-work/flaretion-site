# Google Analytics 集成说明

## 🎯 **已集成的功能**

### **1. 基础跟踪**
- **页面浏览跟踪**: 自动跟踪所有页面访问
- **用户会话跟踪**: 跟踪用户访问时长和页面数
- **设备信息跟踪**: 跟踪设备类型、操作系统、浏览器

### **2. 事件跟踪**
已为以下关键按钮添加事件跟踪：

#### **Header 导航栏**
- `Header - 免费试用` - 导航栏的免费试用按钮

#### **Hero 首页横幅**
- `Hero - 免费试用7天` - 主要CTA按钮
- `Hero - 观看演示` - 次要CTA按钮

#### **Pricing 价格方案**
- `免费版 - 免费开始` - 免费版CTA
- `Pro版 - 开始试用` - Pro版CTA
- `Premium版 - 联系销售` - Premium版CTA

#### **CTA 最终行动号召**
- `Final CTA - 免费试用7天` - 最终CTA按钮
- `Final CTA - 联系销售` - 联系销售按钮

## 📊 **跟踪的数据**

### **自动跟踪**
- 页面浏览量 (Page Views)
- 会话时长 (Session Duration)
- 跳出率 (Bounce Rate)
- 用户地理位置
- 流量来源 (Traffic Sources)
- 设备信息

### **自定义事件**
- CTA按钮点击
- 价格方案选择
- 用户交互行为

## 🔧 **技术实现**

### **1. Google Analytics 组件**
```typescript
// src/components/GoogleAnalytics.tsx
'use client'

import Script from 'next/script'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
```

### **2. 事件跟踪工具函数**
```typescript
// src/lib/gtag.ts
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
```

### **3. 使用示例**
```typescript
// 在组件中使用
onClick={() => event({
  action: 'click',
  category: 'CTA',
  label: 'Hero - 免费试用7天'
})}
```

## 📈 **分析指标**

### **关键指标 (KPIs)**
1. **转化率**: CTA按钮点击率
2. **用户参与度**: 页面停留时间、页面浏览数
3. **流量来源**: 有机搜索、直接访问、社交媒体
4. **设备分析**: 桌面端 vs 移动端使用情况

### **业务指标**
1. **免费试用转化**: 从访问到注册的转化率
2. **价格方案偏好**: 哪个方案最受欢迎
3. **用户行为路径**: 用户如何浏览网站
4. **地域分布**: 用户地理位置分析

## 🎯 **优化建议**

### **1. 转化率优化**
- 监控CTA按钮点击率
- A/B测试不同的按钮文案
- 优化页面加载速度

### **2. 用户体验优化**
- 分析用户跳出点
- 优化移动端体验
- 改进页面导航

### **3. 内容优化**
- 分析最受欢迎的页面
- 优化SEO关键词
- 改进内容结构

## 🔍 **查看数据**

### **Google Analytics 4 控制台**
1. 访问 [Google Analytics](https://analytics.google.com)
2. 选择 `G-43E0E5CBKJ` 属性
3. 查看实时数据和历史报告

### **关键报告**
- **实时报告**: 当前访问用户
- **获取报告**: 流量来源分析
- **参与度报告**: 用户行为分析
- **转化报告**: 目标完成情况

## 🚀 **部署后验证**

### **1. 实时验证**
1. 访问网站
2. 在GA4中查看实时报告
3. 确认数据正在收集

### **2. 事件验证**
1. 点击各个CTA按钮
2. 在GA4事件报告中查看
3. 确认事件正确触发

### **3. 数据准确性**
1. 检查页面浏览量
2. 验证用户会话数据
3. 确认地理位置信息

## 📱 **移动端跟踪**

- 自动跟踪移动设备访问
- 响应式设计分析
- 移动端用户行为分析

## 🔒 **隐私合规**

- 符合GDPR要求
- 用户数据保护
- Cookie政策说明

---

**Google Analytics ID**: `G-43E0E5CBKJ`

**Flaretion** - 让策略更智能 🚀
