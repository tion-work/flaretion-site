import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            智能策略分析平台
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            让策略更
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              智能
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            基于多周期RSI共振分析的专业策略平台，为交易者提供精准的市场状态判断和智能信号提醒
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              免费试用 7 天
            </Link>
            <Link
              href="/demo"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-all duration-200"
            >
              观看演示
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <div className="text-gray-600">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98.5%</div>
              <div className="text-gray-600">信号准确率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">实时监控</div>
            </div>
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm">Flaretion Strategy Dashboard</div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">BTCUSDT</div>
                  <div className="text-green-400 font-mono">$108,500.00</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-gray-400 text-xs">RSI6</div>
                    <div className="text-white font-semibold">25.3</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-gray-400 text-xs">RSI12</div>
                    <div className="text-white font-semibold">28.7</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-gray-400 text-xs">RSI24</div>
                    <div className="text-white font-semibold">32.1</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-4">
                  <div className="text-white font-semibold text-center">
                    🚀 强烈抄底信号 - 多周期RSI共振
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </section>
  )
}
