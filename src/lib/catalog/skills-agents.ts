import { CatalogItem } from './types'

// Define the catalog items directly based on the existing structure
export const catalogItems: CatalogItem[] = [
  // Claude Skills from content/skills/claude/
  {
    id: 'brand-voice',
    type: 'skill',
    name: 'Brand Voice',
    description: 'Capture and apply your unique writing voice to all marketing content. Define your brand\'s sound (tone, rhythm, vocabulary, beliefs) and ensure any piece of copy sounds like YOU instead of generic AI.',
    category: 'Content Creation',
    folderPath: 'content/skills/claude/brand-voice',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Capturing voice from scratch',
      'Applying voice to existing content',
      'Auditing content for voice consistency'
    ]
  },
  {
    id: 'content-repurposer',
    type: 'skill',
    name: 'Content Repurposer',
    description: 'Transform existing content across multiple platforms while maintaining voice consistency. Extract key insights and adapt them for different channels and audiences.',
    category: 'Content Creation',
    folderPath: 'content/skills/claude/content-repurposer',
    skillFilename: 'SKILL.md',
    contextItems: [
      'After publishing new content',
      'Running a content audit',
      'Expanding to new platforms',
      'Batch content creation'
    ]
  },
  {
    id: 'direct-response-copy',
    type: 'skill',
    name: 'Direct Response Copy',
    description: 'Create high-converting sales pages, landing pages, and promotional content using proven persuasion principles and psychological frameworks.',
    category: 'Sales & Conversion',
    folderPath: 'content/skills/claude/direct-response-copy',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Writing sales pages',
      'Creating landing pages',
      'Launch campaigns',
      'Promotional emails'
    ]
  },
  {
    id: 'email-sequences',
    type: 'skill',
    name: 'Email Sequences',
    description: 'Build strategic email sequences for nurture campaigns, onboarding flows, and promotional series that drive engagement and conversions.',
    category: 'Email Marketing',
    folderPath: 'content/skills/claude/email-sequences',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Welcome sequences',
      'Nurture campaigns',
      'Sales sequences',
      'Launch campaigns'
    ]
  },
  {
    id: 'keyword-research',
    type: 'skill',
    name: 'Keyword Research',
    description: 'Discover high-value keywords for your content strategy using search intent analysis, competitive research, and trend identification.',
    category: 'SEO',
    folderPath: 'content/skills/claude/keyword-research',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Starting a content strategy',
      'Competitive analysis',
      'Finding content gaps'
    ]
  },
  {
    id: 'lead-magnet',
    type: 'skill',
    name: 'Lead Magnet',
    description: 'Design and create compelling lead magnets (guides, checklists, templates) that attract your ideal audience and grow your email list.',
    category: 'Lead Generation',
    folderPath: 'content/skills/claude/lead-magnet',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Growing your email list',
      'Attracting ideal audience',
      'Creating opt-in incentives'
    ]
  },
  {
    id: 'marketing-orchestrator',
    type: 'skill',
    name: 'Marketing Orchestrator',
    description: 'Coordinate multi-channel marketing campaigns with strategic planning, content calendars, and cross-platform consistency.',
    category: 'Strategy',
    folderPath: 'content/skills/claude/marketing-orchestrator',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Multi-channel campaigns',
      'Content calendar planning',
      'Cross-platform consistency'
    ]
  },
  {
    id: 'newsletter',
    type: 'skill',
    name: 'Newsletter',
    description: 'Create engaging email newsletters that build relationships with subscribers, share valuable insights, and drive consistent engagement.',
    category: 'Email Marketing',
    folderPath: 'content/skills/claude/newsletter',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Building subscriber relationships',
      'Sharing insights regularly',
      'Driving consistent engagement'
    ]
  },
  {
    id: 'positioning-angle',
    type: 'skill',
    name: 'Positioning Angle',
    description: 'Develop unique market positioning and messaging angles that differentiate your brand and resonate with your target audience.',
    category: 'Strategy',
    folderPath: 'content/skills/claude/positioning-angle',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Differentiating from competitors',
      'Finding unique messaging',
      'Defining market position'
    ]
  },
  {
    id: 'seo-content',
    type: 'skill',
    name: 'SEO Content',
    description: 'Write search-optimized content that ranks well in Google while providing genuine value to readers. Balance keywords with quality.',
    category: 'SEO',
    folderPath: 'content/skills/claude/seo-content',
    skillFilename: 'SKILL.md',
    contextItems: [
      'Writing for search rankings',
      'Balancing SEO with readability',
      'Optimizing existing content'
    ]
  },
  // Agents from Agent_Team_ProcessFocus
  {
    id: 'orchestrator-agent',
    type: 'agent',
    name: 'Orchestrator Agent',
    description: 'Your intake point for all work requests. Clarifies requirements, routes to specialist agents, and manages project tracking in Notion.',
    category: 'Project Management',
    folderPath: '../Agent_Team_ProcessFocus',
    skillFilename: 'orchestrator_agent.md',
    contextItems: [
      'Intake & clarify work requests',
      'Route to specialist agents',
      'Track projects in Notion'
    ]
  },
  {
    id: 'coding-agent',
    type: 'agent',
    name: 'Coding Agent',
    description: 'Builds and modifies code with discipline. Specs before code, iterates in chunks, always reviews before shipping. Your junior dev who delivers clean, working code.',
    category: 'Development',
    folderPath: '../Agent_Team_ProcessFocus',
    skillFilename: 'coding_agent.md',
    contextItems: [
      'Build and modify code',
      'Spec-first development',
      'Bug fixes and features'
    ]
  },
  {
    id: 'n8n-workflow-engineer',
    type: 'agent',
    name: 'n8n Workflow Engineer',
    description: 'Builds functional n8n workflows that work immediately when imported. Translates business requirements into working automation with proper configurations.',
    category: 'Automation',
    folderPath: '../Agent_Team_ProcessFocus',
    skillFilename: 'n8nworkflow_agent.md',
    contextItems: [
      'Build n8n automation workflows',
      'Translate requirements to working JSON',
      'Debug and modify existing workflows'
    ]
  }
]

// Helper function to get items by type
export function getItemsByType(type: 'skill' | 'agent'): CatalogItem[] {
  return catalogItems.filter(item => item.type === type)
}

// Helper function to get items by category
export function getItemsByCategory(category: string): CatalogItem[] {
  return catalogItems.filter(item => item.category === category)
}

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  const categories = catalogItems.map(item => item.category)
  return Array.from(new Set(categories)).sort()
}

// Helper function to search items
export function searchItems(query: string): CatalogItem[] {
  const lowerQuery = query.toLowerCase()
  return catalogItems.filter(
    item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
  )
}

