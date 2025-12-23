'use client'

import { useActionState, useState } from 'react'
import { submitRequest, FormState } from '@/app/actions/submit-request'
import { CatalogItem } from '@/lib/catalog/types'
import { X, CheckCircle2, Loader2 } from 'lucide-react'

interface RequestFormProps {
  selectedItems: Map<string, CatalogItem>
  onClose: () => void
}

const initialState: FormState = {
  message: '',
}

export function RequestForm({ selectedItems, onClose }: RequestFormProps) {
  const [state, formAction, pending] = useActionState(submitRequest, initialState)
  const [showSuccess, setShowSuccess] = useState(false)

  // Show success message
  if (state.success && !showSuccess) {
    setShowSuccess(true)
  }

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-card rounded-lg shadow-xl border border-border max-w-md w-full p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-foreground" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">{state.message}</p>
          <button
            onClick={() => {
              setShowSuccess(false)
              onClose()
            }}
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-card rounded-lg shadow-xl border border-border max-w-2xl w-full my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-semibold text-foreground">Request Access</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
            disabled={pending}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form action={formAction} className="p-6 space-y-6">
          {/* Selected Items Summary */}
          <div className="bg-secondary rounded-lg p-4 border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              Selected Items ({selectedItems.size})
            </h3>
            <div className="space-y-1">
              {Array.from(selectedItems.values()).map((item) => (
                <div key={item.id} className="text-sm text-foreground">
                  • {item.name}{' '}
                  <span className="text-muted-foreground">({item.type})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hidden field for selected items */}
          <input
            type="hidden"
            name="selected_items"
            value={JSON.stringify(
              Array.from(selectedItems.values()).map((item) => ({
                id: item.id,
                name: item.name,
                type: item.type,
              }))
            )}
          />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={pending}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground"
              placeholder="John Doe"
            />
            {state.errors?.name && (
              <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={pending}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground"
              placeholder="john.doe@company.com"
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
            )}
          </div>

          {/* Company/Team */}
          <div>
            <label
              htmlFor="company_team"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Company/Team *
            </label>
            <input
              type="text"
              id="company_team"
              name="company_team"
              required
              disabled={pending}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground"
              placeholder="Marketing Team"
            />
            {state.errors?.company_team && (
              <p className="mt-1 text-sm text-destructive">{state.errors.company_team[0]}</p>
            )}
          </div>

          {/* Use Case */}
          <div>
            <label htmlFor="use_case" className="block text-sm font-medium text-foreground mb-2">
              Use Case / Why do you need these? *
            </label>
            <textarea
              id="use_case"
              name="use_case"
              required
              disabled={pending}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed resize-none bg-background text-foreground"
              placeholder="Describe how you plan to use these skills/agents... (minimum 20 characters)"
            />
            {state.errors?.use_case && (
              <p className="mt-1 text-sm text-destructive">{state.errors.use_case[0]}</p>
            )}
          </div>

          {/* Error Message */}
          {state.message && !state.success && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
              {state.message}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              disabled={pending}
              className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={pending}
              className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

