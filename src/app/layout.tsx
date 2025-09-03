import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flaretion - 智能策略分析平台",
  description: "基于多周期RSI共振分析的专业策略平台，为交易者提供精准的市场状态判断和智能信号提醒",
  keywords: "策略分析,RSI,技术分析,量化交易,加密货币,交易信号",
  authors: [{ name: "Flaretion Team" }],
  openGraph: {
    title: "Flaretion - 智能策略分析平台",
    description: "基于多周期RSI共振分析的专业策略平台",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
