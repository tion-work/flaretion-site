import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AdBanner from './components/AdBanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AdBanner />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
