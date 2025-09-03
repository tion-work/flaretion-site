'use client'

import Link from 'next/link'
import { event } from '../lib/gtag'

export default function Pricing() {
  const plans = [
    {
      name: '免费版',
      price: '0',
      period: '永久免费',
      description: '适合初学者和策略分析师',
      features: [
        '最多使用 1 个策略',
        '基础指标 (RSI、MA)',
        '单一时间周期',
        '最多设置 3 个提醒',
        '基础信号推送',
        '社区支持'
      ],
      limitations: [
        '不支持多周期共振',
        '不支持AI优化',
        '不支持链上数据'
      ],
      cta: '免费开始',
      ctaLink: '/signup',
      popular: false,
      color: 'green'
    },
    {
      name: 'Pro版',
      price: '9',
      period: '每月',
      description: '适合专业交易者和量化团队',
      features: [
        '无限策略数量',
        '所有指标 (RSI、MACD、布林带、KDJ)',
        '多周期共振支持 (15m+1h+4h)',
        '无限提醒设置',
        '高级信号推送',
        '策略回测功能',
        'API接口访问',
        '优先客服支持'
      ],
      limitations: [
        '不支持AI优化',
        '不支持链上数据'
      ],
      cta: '开始试用',
      ctaLink: '/signup?plan=pro',
      popular: true,
      color: 'blue'
    },
    {
      name: 'Premium版',
      price: '29',
      period: '每月',
      description: '适合机构用户和高级交易者',
      features: [
        'Pro版所有功能',
        'AI策略顾问',
        '自动参数优化',
        '链上数据结合 (巨鲸转账/清算事件)',
        '社区策略库',
        '策略分享和订阅',
        '机构级分析工具',
        '专属客户经理',
        '定制化服务'
      ],
      limitations: [],
      cta: '联系销售',
      ctaLink: '/contact',
      popular: false,
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          gradient: 'from-green-600 to-green-700',
          hover: 'hover:from-green-700 hover:to-green-800',
          border: 'border-green-200',
          badge: 'bg-green-100 text-green-800'
        }
      case 'blue':
        return {
          gradient: 'from-blue-600 to-blue-700',
          hover: 'hover:from-blue-700 hover:to-blue-800',
          border: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-800'
        }
      case 'purple':
        return {
          gradient: 'from-purple-600 to-purple-700',
          hover: 'hover:from-purple-700 hover:to-purple-800',
          border: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-800'
        }
      default:
        return {
          gradient: 'from-gray-600 to-gray-700',
          hover: 'hover:from-gray-700 hover:to-gray-800',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800'
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            选择适合你的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从免费的基础策略到AI优化的高级分析，我们为不同需求的用户提供灵活的定价方案
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color)
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : colors.border
                } overflow-hidden`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      最受欢迎
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <div className="text-sm text-gray-500 mb-2">不包含:</div>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-start text-sm text-gray-500">
                            <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href={plan.ctaLink}
                    className={`w-full bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block`}
                    onClick={() => event({
                      action: 'click',
                      category: 'Pricing',
                      label: `${plan.name} - ${plan.cta}`
                    })}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            常见问题
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">免费版有什么限制？</h4>
              <p className="text-gray-600 text-sm">
                免费版可以使用1个基础策略，支持RSI和MA指标，单一时间周期，最多3个提醒。适合初学者体验我们的服务。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pro版和Premium版有什么区别？</h4>
              <p className="text-gray-600 text-sm">
                Pro版提供多周期共振和所有技术指标，Premium版额外提供AI优化、链上数据分析和社区策略库功能。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">可以随时取消订阅吗？</h4>
              <p className="text-gray-600 text-sm">
                是的，您可以随时取消订阅，没有长期合同限制。取消后仍可使用到当前计费周期结束。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">支持哪些交易所？</h4>
              <p className="text-gray-600 text-sm">
                我们支持币安、欧易、火币等主流交易所，并持续增加更多交易所支持。
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>7天免费试用，无需信用卡</span>
          </div>
        </div>
      </div>
    </section>
  )
}
