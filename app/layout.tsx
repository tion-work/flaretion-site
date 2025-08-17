import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Flaretion - 智能 SaaS 解决方案',
    template: '%s | Flaretion'
  },
  description: '专业的 SaaS 平台，为企业提供智能化解决方案，包括企业服务、智能化工具、数字化转型服务。免费试用14天，无需信用卡。',
  keywords: ['SaaS', '企业服务', '智能化', '数字化转型', '云端服务', '企业软件', '工作流程', '团队协作'],
  authors: [{ name: 'Flaretion Team' }],
  creator: 'Flaretion',
  publisher: 'Flaretion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flaretion.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://flaretion.com',
    siteName: 'Flaretion',
    title: 'Flaretion - 智能 SaaS 解决方案',
    description: '专业的 SaaS 平台，为企业提供智能化解决方案，助力数字化转型。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flaretion SaaS 平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flaretion - 智能 SaaS 解决方案',
    description: '专业的 SaaS 平台，为企业提供智能化解决方案，助力数字化转型。',
    images: ['/og-image.jpg'],
    creator: '@flaretion',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google AdSense - 确保在 head 中加载 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3668315850009617"
          crossOrigin="anonymous"
        />
        
        {/* 结构化数据 - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Flaretion",
              "url": "https://flaretion.com",
              "logo": "https://flaretion.com/logo.png",
              "description": "专业的 SaaS 平台，为企业提供智能化解决方案",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-400-123-4567",
                "contactType": "customer service",
                "availableLanguage": "Chinese"
              },
              "sameAs": [
                "https://twitter.com/flaretion",
                "https://linkedin.com/company/flaretion"
              ]
            })
          }}
        />
        
        {/* 结构化数据 - 网站信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Flaretion",
              "url": "https://flaretion.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flaretion.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* 预连接到外部域名 */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://tpc.googlesyndication.com" />
        
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* 性能优化 */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
