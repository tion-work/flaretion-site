import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解 Flaretion 的使命、愿景和团队，我们致力于为企业提供智能化 SaaS 解决方案，助力数字化转型。',
  keywords: ['关于我们', '公司介绍', '团队', '使命', '愿景', 'Flaretion'],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            关于 <span className="text-primary-600">Flaretion</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            我们致力于为企业提供智能化 SaaS 解决方案，通过技术创新助力企业数字化转型
          </p>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                我们的故事
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Flaretion 成立于 2020 年，由一群充满激情的科技专家创立。我们深知企业在数字化转型过程中面临的挑战，
                因此致力于开发简单易用、功能强大的 SaaS 解决方案。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                从最初的小团队到现在的专业团队，我们始终坚持"以客户为中心"的理念，不断优化产品功能，
                提升用户体验，帮助更多企业实现数字化转型。
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl text-primary-600 mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">企业级服务</h3>
                <p className="text-gray-600">为数千家企业提供可靠的服务</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们的使命与愿景
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过技术创新，让每个企业都能轻松实现数字化转型
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">使命</h3>
                <p className="text-gray-600 leading-relaxed">
                  通过提供简单易用、功能强大的 SaaS 解决方案，帮助企业降低数字化转型门槛，
                  提升运营效率，实现可持续发展。
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">愿景</h3>
                <p className="text-gray-600 leading-relaxed">
                  成为全球领先的企业级 SaaS 服务提供商，让技术创新惠及每一个企业，
                  共同构建数字化未来。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这些价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">创新驱动</h3>
              <p className="text-gray-600 text-sm">
                持续创新，追求卓越，为客户创造更大价值
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">客户至上</h3>
              <p className="text-gray-600 text-sm">
                以客户需求为中心，提供优质的产品和服务
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">安全可靠</h3>
              <p className="text-gray-600 text-sm">
                确保数据安全，提供稳定可靠的服务
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">持续成长</h3>
              <p className="text-gray-600 text-sm">
                团队和个人持续学习，共同成长进步
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们的团队
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              由经验丰富的专业人士组成，致力于为客户提供最佳解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">技术团队</h3>
              <p className="text-gray-600 text-sm mb-3">
                拥有丰富的 SaaS 开发经验，专注于产品创新和技术优化
              </p>
              <div className="text-xs text-gray-500">15+ 专业工程师</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">产品团队</h3>
              <p className="text-gray-600 text-sm mb-3">
                深入理解客户需求，设计用户友好的产品体验
              </p>
              <div className="text-xs text-gray-500">8+ 产品专家</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">服务团队</h3>
              <p className="text-gray-600 text-sm mb-3">
                提供专业的技术支持和客户服务，确保客户成功
              </p>
              <div className="text-xs text-gray-500">12+ 服务专员</div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            想了解更多？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            我们期待与您交流，了解您的需求，为您提供最适合的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              联系我们
            </a>
            <a 
              href="/" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              返回首页
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
