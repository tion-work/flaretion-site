import Link from 'next/link'

export default function StrategyLibrary() {
  const strategies = [
    {
      id: 'rsi_multi_resonance',
      name: '多周期RSI共振',
      type: 'advanced',
      description: '结合6/12/24小时RSI指标，通过多周期共振识别最佳买卖时机',
      winRate: 78,
      profitRate: 25,
      conditions: ['RSI6 < 30', 'RSI12 < 30', 'RSI24 < 30'],
      icon: '📊'
    },
    {
      id: 'rsi_macd_divergence',
      name: 'RSI+MACD背离',
      type: 'advanced',
      description: 'RSI与MACD背离信号检测，捕捉趋势反转机会',
      winRate: 72,
      profitRate: 22,
      conditions: ['RSI背离', 'MACD背离'],
      icon: '🔄'
    },
    {
      id: 'boll_rsi_combo',
      name: '布林带+RSI组合',
      type: 'advanced',
      description: '布林带突破配合RSI确认，提高信号可靠性',
      winRate: 68,
      profitRate: 18,
      conditions: ['布林带突破', 'RSI确认'],
      icon: '📈'
    },
    {
      id: 'ai_optimized_rsi',
      name: 'AI优化RSI策略',
      type: 'premium',
      description: 'AI自动优化RSI参数组合，动态调整阈值',
      winRate: 82,
      profitRate: 35,
      conditions: ['AI优化参数', '动态调整'],
      icon: '🤖'
    },
    {
      id: 'whale_chain_analysis',
      name: '巨鲸链上分析',
      type: 'premium',
      description: '结合巨鲸转账和链上数据的策略分析',
      winRate: 75,
      profitRate: 28,
      conditions: ['巨鲸转账', '链上数据', 'RSI确认'],
      icon: '🐋'
    },
    {
      id: 'rsi_single_1h',
      name: '1小时RSI超买超卖',
      type: 'basic',
      description: '基于1小时RSI6的简单超买超卖提醒',
      winRate: 65,
      profitRate: 12,
      conditions: ['RSI6 < 30', 'RSI6 > 70'],
      icon: '⏰'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'basic':
        return 'bg-green-100 text-green-800'
      case 'advanced':
        return 'bg-blue-100 text-blue-800'
      case 'premium':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeText = (type: string) => {
    switch (type) {
      case 'basic':
        return '基础策略'
      case 'advanced':
        return '进阶策略'
      case 'premium':
        return '高级策略'
      default:
        return '未知'
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            智能策略库
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            从基础策略到AI优化，从单一指标到多周期共振，满足不同层次交易者的需求
          </p>
          
          {/* Strategy Types */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">基础策略 (免费)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">进阶策略 (Pro)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">高级策略 (Premium)</span>
            </div>
          </div>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Strategy Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{strategy.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {strategy.name}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(strategy.type)}`}>
                      {getTypeText(strategy.type)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {strategy.description}
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{strategy.winRate}%</div>
                  <div className="text-xs text-gray-500">胜率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{strategy.profitRate}%</div>
                  <div className="text-xs text-gray-500">收益率</div>
                </div>
              </div>

              {/* Conditions */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">触发条件:</div>
                <div className="space-y-1">
                  {strategy.conditions.map((condition, index) => (
                    <div key={index} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {condition}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                {strategy.type === 'basic' ? '免费使用' : '立即体验'}
              </button>
            </div>
          ))}
        </div>

        {/* Strategy Builder CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            想要自定义策略？
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            使用我们的策略构建器，自由组合RSI、MACD、布林带等指标，创建属于你的专属交易策略
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/strategy-builder"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              策略构建器
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              观看演示
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
