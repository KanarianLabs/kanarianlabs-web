'use client'
import dynamic from 'next/dynamic'
import PromoBanner from '@/components/PromoBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

const Automations = dynamic(() => import('@/components/Automations'), { ssr: true })
const Process = dynamic(() => import('@/components/Process'), { ssr: true })
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })
const CTA = dynamic(() => import('@/components/CTA'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const WhatsAppBubble = dynamic(() => import('@/components/WhatsAppBubble'), { ssr: false })

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
