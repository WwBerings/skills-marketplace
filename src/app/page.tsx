'use client'

import { useState } from 'react'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { CatalogGrid } from '@/components/catalog-grid'
import { RequestForm } from '@/components/request-form'
import { CatalogItem } from '@/lib/catalog/types'
import { ArrowRight } from 'lucide-react'

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative max-w-[1320px] mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Where marketing meets AI excellence
          </h1>
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Access powerful marketing skills and AI agents to supercharge your work.
            Select what you need and request access instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              10 Marketing Skills
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              3 AI Agents
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white/40 rounded-full"></span>
              Instant Access
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1320px] mx-auto px-6 pb-16">
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

      {/* Request Form Modal */}
      {showRequestForm && (
        <RequestForm
          selectedItems={selectedItems}
          onClose={() => setShowRequestForm(false)}
        />
      )}
    </div>
  )
}
