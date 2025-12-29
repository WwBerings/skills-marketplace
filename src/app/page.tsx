'use client'

import { catalogItems } from '@/lib/catalog/skills-agents'
import { CatalogGrid } from '@/components/catalog-grid'
import { LogoCarouselSection } from '@/components/logo-carousel-section'
import Hero from '@/components/sections/hero'
import CustomRequestSection from '@/components/sections/custom-request-section'

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

      {/* Logo Carousel Section */}
      <LogoCarouselSection />

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <main className="max-w-[1320px] mx-auto px-6">
          {/* Instructions */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-6">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    1
                  </div>
                  <h3 className="font-medium text-foreground">Browse Skills</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Explore our library of Claude skills and agents for marketing
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    2
                  </div>
                  <h3 className="font-medium text-foreground">Download & Learn</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Click any skill to see details and download the file with instructions
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    3
                  </div>
                  <h3 className="font-medium text-foreground">Use in Claude</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Upload the skill file to your Claude Project and start using it
                </p>
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          <CatalogGrid items={catalogItems} />
        </main>
      </section>

      {/* Custom Request Section */}
      <CustomRequestSection />
    </div>
  )
}
