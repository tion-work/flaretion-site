'use client'

import { useEffect, useRef } from 'react'

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);
  const hasAdLoaded = useRef(false);

  useEffect(() => {
    // 检查是否已经加载过广告
    if (hasAdLoaded.current) {
      return;
    }

    // 检查元素是否已经包含广告
    if (adRef.current && adRef.current.querySelector('iframe')) {
      hasAdLoaded.current = true;
      return;
    }

    // 执行 Google AdSense 代码
    if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasAdLoaded.current = true;
      } catch (error) {
        console.log('AdSense ad already loaded or error occurred:', error);
        hasAdLoaded.current = true;
      }
    }
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">广告</p>
            {/* Google AdSense 广告单元 */}
            <ins
              ref={adRef}
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-3668315850009617"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
