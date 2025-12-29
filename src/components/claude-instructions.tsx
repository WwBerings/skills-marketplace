'use client'

import { CheckCircle2, Sparkles, Settings } from 'lucide-react'

interface ClaudeInstructionsProps {
  skillName: string
}

export function ClaudeInstructions({ skillName }: ClaudeInstructionsProps) {
  const steps = [
    {
      number: 1,
      title: 'Download the skill package',
      description: `Use the download form to get the ${skillName} skill as a ZIP file.`,
    },
    {
      number: 2,
      title: 'Open Claude Settings',
      description: 'Go to claude.ai, click on your profile icon, and select "Settings" from the menu.',
    },
    {
      number: 3,
      title: 'Navigate to Capabilities',
      description: 'In Settings, find the "Capabilities" section. Make sure "Code execution and file creation" is enabled.',
    },
    {
      number: 4,
      title: 'Upload the skill',
      description: 'Click "Upload skill" and select the downloaded ZIP file. The skill will be installed globally.',
    },
  ]

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        How to install this skill in Claude
      </h2>
      
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground font-semibold text-sm">
                {step.number}
              </div>
            </div>
            <div className="flex-1 pt-0.5">
              <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Works globally</p>
            <p className="text-sm text-muted-foreground mt-1">
              Once installed, this skill works across all your chats and projects. Claude automatically detects when to apply it based on your requests.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 p-4 bg-secondary/50 rounded-lg border border-border">
        <div className="flex items-start gap-3">
          <Settings className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Manage your skills</p>
            <p className="text-sm text-muted-foreground mt-1">
              You can enable, disable, or remove skills anytime in Settings → Capabilities. Install multiple skills—Claude combines them intelligently.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

