import Link from 'next/link'
import { CatalogItem } from '@/lib/catalog/types'
import { BookOpen, Bot, ArrowRight } from 'lucide-react'

interface CatalogCardProps {
  item: CatalogItem
}

export function CatalogCard({ item }: CatalogCardProps) {
  const Icon = item.type === 'skill' ? BookOpen : Bot

  return (
    <Link
      href={`/skill/${item.id}`}
      className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:shadow-sm hover:border-foreground/20 block"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <Icon className="h-5 w-5 text-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {item.name}
                </h3>
              </div>
              <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground mt-1">
                {item.category}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
        <span>View details</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
