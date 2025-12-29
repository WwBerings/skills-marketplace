import { notFound } from 'next/navigation'
import Link from 'next/link'
import { catalogItems } from '@/lib/catalog/skills-agents'
import { ClaudeInstructions } from '@/components/claude-instructions'
import { DownloadForm } from '@/components/download-form'
import { ArrowLeft, BookOpen, Bot, Sparkles } from 'lucide-react'

interface SkillPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return catalogItems.map((item) => ({
    id: item.id,
  }))
}

export async function generateMetadata({ params }: SkillPageProps) {
  const { id } = await params
  const skill = catalogItems.find((item) => item.id === id)
  
  if (!skill) {
    return { title: 'Skill Not Found' }
  }

  return {
    title: `${skill.name} | Pro4all Skills Marketplace`,
    description: skill.description,
  }
}

export default async function SkillPage({ params }: SkillPageProps) {
  const { id } = await params
  const skill = catalogItems.find((item) => item.id === id)

  if (!skill) {
    notFound()
  }

  const Icon = skill.type === 'skill' ? BookOpen : Bot

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/#catalog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to catalog
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
          {/* Left Column - Skill Info */}
          <div className="space-y-6">
            {/* Skill Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {skill.type === 'skill' ? 'Claude Skill' : 'Agent'}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-3">
                {skill.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Use Cases */}
            {skill.contextItems && skill.contextItems.length > 0 && (
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  {skill.type === 'skill' ? 'When to use this skill' : 'What this agent handles'}
                </h2>
                <ul className="space-y-3">
                  {skill.contextItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Implementation Instructions - only for skills */}
            {skill.type === 'skill' && (
              <ClaudeInstructions skillName={skill.name} />
            )}
          </div>

          {/* Right Column - Download Form or Agent Teaser */}
          <div className="lg:sticky lg:top-8 lg:self-start space-y-4">
            {skill.type === 'skill' ? (
              <>
                <DownloadForm skillId={skill.id} skillName={skill.name} />
                
                {/* ChatGPT Coming Soon Teaser */}
                <div className="bg-card/50 rounded-lg border border-dashed border-border p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Coming soon</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ChatGPT Custom GPT version will be available soon.
                  </p>
                </div>
              </>
            ) : (
              /* Agent Coming Soon Teaser */
              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <span className="text-lg font-semibold text-foreground">Coming Soon</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  This agent is currently in development and will be available soon as:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    ChatGPT Custom GPT
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Claude Project instructions
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  Want early access? Join our waitlist.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

