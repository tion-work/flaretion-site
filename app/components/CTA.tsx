export default function CTA() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备开始您的数字化转型之旅？
          </h2>
          
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            加入数千家企业，体验 Flaretion 带来的效率提升和成本节约
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              立即开始免费试用
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              预约演示
            </button>
          </div>
          
          <div className="mt-8 text-primary-100 text-sm">
            <p>无需信用卡 • 14 天免费试用 • 随时取消</p>
          </div>
        </div>
      </div>
    </section>
  )
}
