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
      className={`relative rounded-lg border p-6 transition-all duration-200 hover:shadow-sm ${
        isSelected
          ? 'border-foreground bg-secondary'
          : 'border-border bg-card hover:border-foreground/20'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <Icon className="h-5 w-5 text-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
              </div>
              <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground mt-1">
                {item.category}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
        </div>
      </div>

      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(item, e.target.checked)}
          className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
        />
        <span className="text-sm font-medium text-foreground group-hover:text-foreground/80">
          {isSelected ? 'Selected' : 'Select this ' + item.type}
        </span>
      </label>
    </div>
  )
}

