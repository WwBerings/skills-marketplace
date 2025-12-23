'use client'

import { useState, useMemo } from 'react'
import { CatalogItem } from '@/lib/catalog/types'
import { CatalogCard } from './catalog-card'
import { Search, Filter } from 'lucide-react'

interface CatalogGridProps {
  items: CatalogItem[]
  selectedItems: Set<string>
  onSelectionChange: (itemId: string, selected: boolean, item: CatalogItem) => void
}

export function CatalogGrid({ items, selectedItems, onSelectionChange }: CatalogGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'skill' | 'agent'>('all')
  const [filterCategory, setFilterCategory] = useState<string>('all')

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((item) => item.category)))
    return ['all', ...cats.sort()]
  }, [items])

  // Filter items based on search, type, and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Type filter
      if (filterType !== 'all' && item.type !== filterType) {
        return false
      }

      // Category filter
      if (filterCategory !== 'all' && item.category !== filterCategory) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [items, searchQuery, filterType, filterCategory])

  const skillCount = filteredItems.filter((item) => item.type === 'skill').length
  const agentCount = filteredItems.filter((item) => item.type === 'agent').length

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search skills and agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Type Filter */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('skill')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterType === 'skill'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setFilterType('agent')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterType === 'agent'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Agents
          </button>
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full sm:w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          {filterType === 'all' && ` (${skillCount} skills, ${agentCount} agents)`}
        </div>
        {selectedItems.size > 0 && (
          <div className="font-medium text-blue-600">
            {selectedItems.size} selected
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <CatalogCard
              key={item.id}
              item={item}
              isSelected={selectedItems.has(item.id)}
              onSelect={(item, selected) => onSelectionChange(item.id, selected, item)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No items match your filters.</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setFilterType('all')
              setFilterCategory('all')
            }}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

