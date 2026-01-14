'use client'

import { catalogItems } from '@/lib/catalog/skills-agents'
import { CatalogGrid } from '@/components/catalog-grid'
import { LogoCarouselSection } from '@/components/logo-carousel-section'
import Hero from '@/components/sections/hero'
import CustomRequestSection from '@/components/sections/custom-request-section'
import WaitlistSection from '@/components/sections/waitlist-section'
import { Footer } from '@/components/footer'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Prism UI with Particle Animation */}
      <Hero 
        onBrowseCatalog={() => scrollToSection('catalog')}
        onRequestCustom={() => scrollToSection('custom-request')}
      />

      {/* Logo Carousel Section - Hidden for now */}
      {/* <LogoCarouselSection /> */}

      {/* Catalog Section - White background */}
      <section id="catalog" className="py-16 bg-white">
        <main className="max-w-[1320px] mx-auto px-6">
          {/* Instructions - Subtle, part of the section */}
          <div className="mb-10">
            <p className="text-sm text-[#6B7280] mb-4">How it works</p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#523BE1] font-bold">1.</span>
                <span className="text-[#2D2D2D]">Browse skills</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#523BE1] font-bold">2.</span>
                <span className="text-[#2D2D2D]">Download & learn</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#523BE1] font-bold">3.</span>
                <span className="text-[#2D2D2D]">Start using</span>
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          <CatalogGrid items={catalogItems} />
        </main>
      </section>

      {/* Custom Request Section */}
      <CustomRequestSection />

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
