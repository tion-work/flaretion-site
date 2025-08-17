import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系 Flaretion 团队，获取技术支持、产品咨询或商务合作信息。我们期待与您交流！',
  keywords: ['联系我们', '客服', '技术支持', '商务合作', 'Flaretion'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            联系 <span className="text-primary-600">我们</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            我们期待与您交流，了解您的需求，为您提供最适合的解决方案
          </p>
        </div>
      </section>

      {/* 联系方式和表单 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                联系信息
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">公司地址</h3>
                    <p className="text-gray-600 leading-relaxed">
                      北京市朝阳区建国门外大街1号<br />
                      国贸大厦A座15层<br />
                      100020
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">联系电话</h3>
                    <p className="text-gray-600 leading-relaxed">
                      客服热线：400-123-4567<br />
                      工作时间：周一至周五 9:00-18:00<br />
                      技术支持：support@flaretion.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">邮箱地址</h3>
                    <p className="text-gray-600 leading-relaxed">
                      商务合作：business@flaretion.com<br />
                      产品咨询：product@flaretion.com<br />
                      媒体联系：media@flaretion.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">社交媒体</h3>
                    <p className="text-gray-600 leading-relaxed">
                      微信公众号：Flaretion官方<br />
                      微博：@Flaretion官方<br />
                      知乎：Flaretion官方
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 联系表单 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓氏
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="请输入您的姓氏"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱地址 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的邮箱地址"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的联系电话"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="请输入您的公司名称"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    主题 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">请选择咨询主题</option>
                    <option value="product">产品咨询</option>
                    <option value="technical">技术支持</option>
                    <option value="business">商务合作</option>
                    <option value="pricing">价格咨询</option>
                    <option value="other">其他问题</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    消息内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="请详细描述您的需求或问题..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              快速找到您需要的答案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🤔 如何开始免费试用？
              </h3>
              <p className="text-gray-600">
                您可以直接在首页点击"免费试用"按钮，填写基本信息即可开始14天免费试用，无需信用卡。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 价格方案如何选择？
              </h3>
              <p className="text-gray-600">
                我们提供免费版、专业版和企业版三种方案，您可以根据团队规模和需求选择合适的方案。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🔒 数据安全如何保障？
              </h3>
              <p className="text-gray-600">
                我们采用银行级安全标准，所有数据都经过加密存储，定期备份，确保您的数据安全。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🚀 技术支持响应时间？
              </h3>
              <p className="text-gray-600">
                专业版和企业版用户享受优先技术支持，响应时间通常在2小时内，免费版用户24小时内响应。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 返回首页 CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            还有其他问题？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            我们的客服团队随时为您提供帮助，或者您可以查看我们的帮助文档
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              返回首页
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              了解更多
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
