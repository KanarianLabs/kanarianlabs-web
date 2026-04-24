'use client'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Automations from '@/components/Automations'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppBubble from '@/components/WhatsAppBubble'

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <Services />
        <Automations />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  )
}
