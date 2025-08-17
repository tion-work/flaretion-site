'use client'

import { useEffect, useRef, useState } from 'react'

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);
  const hasAdLoaded = useRef(false);
  const [adStatus, setAdStatus] = useState<'loading' | 'loaded' | 'error' | 'blocked'>('loading');
  const [adHeight, setAdHeight] = useState<number>(250);

  useEffect(() => {
    // 检查是否已经加载过广告
    if (hasAdLoaded.current) {
      return;
    }

    // 检查元素是否已经包含广告
    if (adRef.current && adRef.current.querySelector('iframe')) {
      hasAdLoaded.current = true;
      setAdStatus('loaded');
      return;
    }

    // 设置加载状态
    setAdStatus('loading');

    // 延迟加载广告，确保页面完全加载
    const timer = setTimeout(() => {
      // 执行 Google AdSense 代码
      if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          hasAdLoaded.current = true;
          
          // 监听广告加载完成
          const checkAdLoaded = () => {
            if (adRef.current && adRef.current.querySelector('iframe')) {
              setAdStatus('loaded');
              const iframe = adRef.current.querySelector('iframe') as HTMLIFrameElement;
              if (iframe) {
                const height = parseInt(iframe.height) || 250;
                setAdHeight(height);
              }
            } else {
              setTimeout(checkAdLoaded, 100);
            }
          };
          
          checkAdLoaded();
        } catch (error) {
          console.log('AdSense ad already loaded or error occurred:', error);
          hasAdLoaded.current = true;
          setAdStatus('error');
        }
      } else {
        setAdStatus('error');
      }
    }, 1000);

    // 清理定时器
    return () => clearTimeout(timer);
  }, []);

  // 检测广告拦截器
  useEffect(() => {
    const checkAdBlocker = () => {
      if (typeof window !== 'undefined') {
        // 简单的广告拦截器检测
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        
        if (testAd.offsetHeight === 0) {
          setAdStatus('blocked');
        }
        
        document.body.removeChild(testAd);
      }
    };

    // 延迟检测，给页面加载时间
    const timer = setTimeout(checkAdBlocker, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 渲染广告内容
  const renderAdContent = () => {
    switch (adStatus) {
      case 'loading':
        return (
          <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
              <span className="text-gray-600">广告加载中...</span>
            </div>
          </div>
        );
      
      case 'error':
        return (
          <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-gray-500 mb-2">广告加载失败</div>
              <button 
                onClick={() => {
                  hasAdLoaded.current = false;
                  setAdStatus('loading');
                  window.location.reload();
                }}
                className="text-sm text-primary-600 hover:text-primary-700 underline"
              >
                重新加载
              </button>
            </div>
          </div>
        );
      
      case 'blocked':
        return (
          <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-gray-500 mb-2">检测到广告拦截器</div>
              <div className="text-xs text-gray-400">
                请关闭广告拦截器以支持我们
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            {/* 广告标识 */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-500">广告</p>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            {/* 广告容器 */}
            <div className="relative">
              {/* Google AdSense 广告单元 */}
              <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ 
                  display: 'block',
                  minHeight: adHeight,
                  width: '100%',
                  maxWidth: '728px',
                  margin: '0 auto'
                }}
                data-ad-client="ca-pub-3668315850009617"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              
              {/* 广告加载状态覆盖层 */}
              {adStatus !== 'loaded' && (
                <div className="absolute inset-0 bg-white rounded-lg">
                  {renderAdContent()}
                </div>
              )}
            </div>
            
            {/* 广告说明 */}
            <div className="mt-4 text-xs text-gray-400">
              广告帮助我们提供免费服务
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
