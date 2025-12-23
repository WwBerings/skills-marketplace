'use client'

import { useState } from 'react'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { CatalogGrid } from '@/components/catalog-grid'
import { RequestForm } from '@/components/request-form'
import { CatalogItem } from '@/lib/catalog/types'
import { Sparkles, ArrowRight } from 'lucide-react'

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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Marketing Skills & Agents Library
              </h1>
            </div>
            <p className="mt-6 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Access powerful marketing skills and AI agents to supercharge your work.
              Select what you need and request access instantly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-300 rounded-full"></span>
                10 Marketing Skills
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-purple-300 rounded-full"></span>
                3 AI Agents
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-300 rounded-full"></span>
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Instructions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Browse & Select</h3>
                <p className="text-sm text-gray-600">
                  Explore our library and select the skills or agents you need
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Request Access</h3>
                <p className="text-sm text-gray-600">
                  Fill out a quick form with your details and use case
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Get Access</h3>
                <p className="text-sm text-gray-600">
                  Receive instructions and files within 24-48 hours
                </p>
              </div>
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
              className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-3 font-semibold"
            >
              Request {selectedItems.size} {selectedItems.size === 1 ? 'Item' : 'Items'}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Request Form Modal */}
      {showRequestForm && (
        <RequestForm
          selectedItems={selectedItems}
          onClose={() => setShowRequestForm(false)}
        />
      )}
    </main>
  )
}
