'use client'

import { useActionState } from 'react'
import { Bell, CheckCircle2, Loader2 } from 'lucide-react'
import { joinWaitlist, WaitlistFormState } from '@/app/actions/join-waitlist'

const initialState: WaitlistFormState = {
  message: '',
}

export default function WaitlistSection() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState)

  return (
    <section className="py-16">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          {state.success ? (
            // Success state
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {state.message}
              </h2>
              <p className="text-muted-foreground">
                We&apos;ll email you when new skills or agents are available.
              </p>
            </div>
          ) : (
            // Form state
            <>
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Stay in the loop
              </h2>
              <p className="text-muted-foreground mb-6">
                Get notified when we publish new skills or agents
              </p>

              <form action={formAction} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  disabled={isPending}
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>

              {state.error && (
                <p className="mt-3 text-sm text-destructive">{state.error}</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

