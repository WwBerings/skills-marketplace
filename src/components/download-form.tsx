'use client'

import { useState } from 'react'
import { Download, Loader2, CheckCircle2, Package } from 'lucide-react'

interface DownloadFormProps {
  skillId: string
  skillName: string
}

export function DownloadForm({ skillId, skillName }: DownloadFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const [error, setError] = useState('')

  const filename = `${skillName.toLowerCase().replace(/\s+/g, '-')}.zip`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    try {
      // Trigger download via API
      const response = await fetch(`/api/download/${skillId}?email=${encodeURIComponent(email)}`)
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Download failed')
      }

      // Get the blob and trigger download
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      setIsDownloaded(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Download failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isDownloaded) {
    return (
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Download complete!
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check your downloads folder for <span className="font-mono text-foreground">{filename}</span>
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Upload this ZIP file to Claude via Settings → Capabilities → Upload skill
          </p>
          <button
            onClick={() => {
              setIsDownloaded(false)
              setEmail('')
            }}
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Download again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center gap-2 mb-2">
        <Package className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold text-foreground">
          Get this skill
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Enter your email to download the skill package. We&apos;ll only use this to notify you of important updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed bg-background text-foreground placeholder:text-muted-foreground"
          />
          {error && (
            <p className="mt-2 text-sm text-destructive">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Preparing package...
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              Download Skill Package
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-muted-foreground mt-3 text-center">
        Downloads as a ZIP file ready for Claude
      </p>
    </div>
  )
}

