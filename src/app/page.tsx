import Hero from '@/components/Hero'
import Features from '@/components/Features'
import StrategyLibrary from '@/components/StrategyLibrary'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <StrategyLibrary />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}