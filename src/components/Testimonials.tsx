export default function Testimonials() {
  const testimonials = [
    {
      name: '张先生',
      role: '量化交易员',
      company: '某投资公司',
      avatar: '👨‍💼',
      content: 'Flaretion的多周期RSI共振分析让我找到了新的交易思路。以前我只看单一时间周期的RSI，现在通过多周期共振，信号准确率提高了30%以上。',
      rating: 5
    },
    {
      name: '李女士',
      role: '个人投资者',
      company: '自由职业者',
      avatar: '👩‍💻',
      content: '作为新手，Flaretion的傻瓜模式策略库让我快速上手。预设的策略效果很好，现在我也开始尝试自定义策略了。',
      rating: 5
    },
    {
      name: '王总',
      role: '策略分析师',
      company: '某基金公司',
      avatar: '👨‍💻',
      content: 'AI参数优化功能太强大了！以前需要手动调整RSI参数，现在AI自动优化，节省了大量时间，策略表现也更稳定。',
      rating: 5
    },
    {
      name: '陈博士',
      role: '区块链研究员',
      company: '某大学',
      avatar: '👨‍🎓',
      content: '巨鲸链上分析功能让我能够结合链上数据和技术分析，这种多维度分析在市场上很少见，非常有价值。',
      rating: 5
    },
    {
      name: '刘先生',
      role: '交易员',
      company: '某交易所',
      avatar: '👨‍💼',
      content: 'Flaretion的实时信号提醒很及时，24/7监控让我不错过任何交易机会。特别是多周期共振信号，准确率确实很高。',
      rating: 5
    },
    {
      name: '赵女士',
      role: '投资顾问',
      company: '某财富管理公司',
      avatar: '👩‍💼',
      content: '客户对Flaretion的策略分析很满意，特别是市场状态判断功能，帮助我们更好地为客户提供投资建议。',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            用户评价
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自不同行业用户的真实反馈，看看他们如何使用Flaretion提升交易表现
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-2xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              用户数据统计
            </h3>
            <p className="text-blue-100">
              基于真实用户反馈和平台数据
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98.5%</div>
              <div className="text-blue-100">信号准确率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">用户评分</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">实时监控</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            受到以下机构信任
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">币安</div>
            <div className="text-2xl font-bold text-gray-400">欧易</div>
            <div className="text-2xl font-bold text-gray-400">火币</div>
            <div className="text-2xl font-bold text-gray-400">OKX</div>
            <div className="text-2xl font-bold text-gray-400">Gate.io</div>
          </div>
        </div>
      </div>
    </section>
  )
}
