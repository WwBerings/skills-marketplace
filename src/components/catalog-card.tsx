import { CatalogItem } from '@/lib/catalog/types'
import { BookOpen, Bot } from 'lucide-react'

interface CatalogCardProps {
  item: CatalogItem
  isSelected: boolean
  onSelect: (item: CatalogItem, selected: boolean) => void
}

export function CatalogCard({ item, isSelected, onSelect }: CatalogCardProps) {
  const Icon = item.type === 'skill' ? BookOpen : Bot

  return (
    <div
      className={`relative rounded-lg border-2 p-6 transition-all duration-200 hover:shadow-lg ${
        isSelected
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-blue-300'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                item.type === 'skill' ? 'bg-blue-100' : 'bg-purple-100'
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  item.type === 'skill' ? 'text-blue-600' : 'text-purple-600'
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <span
                className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                  item.type === 'skill'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {item.category}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        </div>
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(item, e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm font-medium text-gray-700">
          {isSelected ? 'Selected' : 'Select this ' + item.type}
        </span>
      </label>
    </div>
  )
}

