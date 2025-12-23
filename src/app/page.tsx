'use client'

import { useState } from 'react'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { CatalogGrid } from '@/components/catalog-grid'
import { RequestForm } from '@/components/request-form'
import { CatalogItem } from '@/lib/catalog/types'
import { ArrowRight } from 'lucide-react'
import { LogoCarouselSection } from '@/components/logo-carousel-section'
import Hero from '@/components/sections/hero'
import CustomRequestSection from '@/components/sections/custom-request-section'

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<Map<string, CatalogItem>>(new Map())
  const [showRequestForm, setShowRequestForm] = useState(false)

  const handleSelectionChange = (itemId: string, selected: boolean, item: CatalogItem) => {
    setSelectedItems((prev) => {
      const newMap = new Map(prev)
      if (selected) {
        newMap.set(itemId, item)
      } else {
        newMap.delete(itemId)
      }
      return newMap
    })
  }

  const handleRequestAccess = () => {
    if (selectedItems.size > 0) {
      setShowRequestForm(true)
    }
  }

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
                  <h3 className="font-medium text-foreground">Browse & Select</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Explore our library and select the skills or agents you need
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    2
                  </div>
                  <h3 className="font-medium text-foreground">Request Access</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Fill out a quick form with your details and use case
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                    3
                  </div>
                  <h3 className="font-medium text-foreground">Get Access</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-11">
                  Receive instructions and files within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          <CatalogGrid
            items={catalogItems}
            selectedItems={new Set(selectedItems.keys())}
            onSelectionChange={handleSelectionChange}
          />

          {/* Floating Action Button */}
          {selectedItems.size > 0 && (
            <div className="fixed bottom-8 right-8 z-40">
              <button
                onClick={handleRequestAccess}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-3 font-medium ring-1 ring-foreground/10"
              >
                Request {selectedItems.size} {selectedItems.size === 1 ? 'Item' : 'Items'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </main>
      </section>

      {/* Custom Request Section */}
      <CustomRequestSection />

      {/* Request Form Modal (for catalog items) */}
      {showRequestForm && (
        <RequestForm
          selectedItems={selectedItems}
          onClose={() => setShowRequestForm(false)}
        />
      )}
    </div>
  )
}
