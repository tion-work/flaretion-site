export default function Pricing() {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "/月",
      description: "适合个人用户和小团队",
      features: [
        "基础功能使用",
        "最多 3 个用户",
        "1GB 存储空间",
        "基础客服支持",
        "社区论坛支持"
      ],
      popular: false,
      cta: "免费开始"
    },
    {
      name: "专业版",
      price: "¥99",
      period: "/月",
      description: "适合中小型企业和团队",
      features: [
        "所有免费版功能",
        "最多 20 个用户",
        "10GB 存储空间",
        "优先客服支持",
        "电话技术支持",
        "高级分析报告",
        "自定义品牌"
      ],
      popular: true,
      cta: "开始试用"
    },
    {
      name: "企业版",
      price: "¥299",
      period: "/月",
      description: "适合大型企业和组织",
      features: [
        "所有专业版功能",
        "无限用户",
        "无限存储空间",
        "24/7 专属客服",
        "专属客户经理",
        "高级安全功能",
        "API 访问",
        "定制化开发"
      ],
      popular: false,
      cta: "联系销售"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            选择适合您的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            灵活的定价方案，满足不同规模企业的需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'btn-primary' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">需要定制化方案？</p>
          <button className="btn-secondary">联系我们的销售团队</button>
        </div>
      </div>
    </section>
  )
}
