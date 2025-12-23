import { CatalogItem } from './types'
import fs from 'fs'
import path from 'path'

// Define the catalog items directly based on the existing structure
export const catalogItems: CatalogItem[] = [
  // Skills from skills_domain_focus
  {
    id: 'brand-voice',
    type: 'skill',
    name: 'Brand Voice',
    description: 'Capture and apply your unique writing voice to all marketing content. Define your brand\'s sound (tone, rhythm, vocabulary, beliefs) and ensure any piece of copy sounds like YOU instead of generic AI.',
    category: 'Content Creation',
    filePath: '../skills_domain_focus/brand-voice/brand_voice_SKILL.md'
  },
  {
    id: 'content-repurposer',
    type: 'skill',
    name: 'Content Repurposer',
    description: 'Transform existing content across multiple platforms while maintaining voice consistency. Extract key insights and adapt them for different channels and audiences.',
    category: 'Content Creation',
    filePath: '../skills_domain_focus/content-repurposer/SKILL.md'
  },
  {
    id: 'direct-response-copy',
    type: 'skill',
    name: 'Direct Response Copy',
    description: 'Create high-converting sales pages, landing pages, and promotional content using proven persuasion principles and psychological frameworks.',
    category: 'Sales & Conversion',
    filePath: '../skills_domain_focus/direct-response-copy/SKILL.md'
  },
  {
    id: 'email-sequences',
    type: 'skill',
    name: 'Email Sequences',
    description: 'Build strategic email sequences for nurture campaigns, onboarding flows, and promotional series that drive engagement and conversions.',
    category: 'Email Marketing',
    filePath: '../skills_domain_focus/email-sequences/SKILL.md'
  },
  {
    id: 'keyword-research',
    type: 'skill',
    name: 'Keyword Research',
    description: 'Discover high-value keywords for your content strategy using search intent analysis, competitive research, and trend identification.',
    category: 'SEO',
    filePath: '../skills_domain_focus/keyword-research/SKILL.md'
  },
  {
    id: 'lead-magnet',
    type: 'skill',
    name: 'Lead Magnet',
    description: 'Design and create compelling lead magnets (guides, checklists, templates) that attract your ideal audience and grow your email list.',
    category: 'Lead Generation',
    filePath: '../skills_domain_focus/lead-magnet/SKILL.md'
  },
  {
    id: 'marketing-orchestrator',
    type: 'skill',
    name: 'Marketing Orchestrator',
    description: 'Coordinate multi-channel marketing campaigns with strategic planning, content calendars, and cross-platform consistency.',
    category: 'Strategy',
    filePath: '../skills_domain_focus/marketing-orchestrator/SKILL.md'
  },
  {
    id: 'newsletter',
    type: 'skill',
    name: 'Newsletter',
    description: 'Create engaging email newsletters that build relationships with subscribers, share valuable insights, and drive consistent engagement.',
    category: 'Email Marketing',
    filePath: '../skills_domain_focus/newsletter/SKILL.md'
  },
  {
    id: 'positioning-angle',
    type: 'skill',
    name: 'Positioning Angle',
    description: 'Develop unique market positioning and messaging angles that differentiate your brand and resonate with your target audience.',
    category: 'Strategy',
    filePath: '../skills_domain_focus/positioning-angle/SKILL.md'
  },
  {
    id: 'seo-content',
    type: 'skill',
    name: 'SEO Content',
    description: 'Write search-optimized content that ranks well in Google while providing genuine value to readers. Balance keywords with quality.',
    category: 'SEO',
    filePath: '../skills_domain_focus/seo-content/SKILL.md'
  },
  // Agents from Agent_Team_ProcessFocus
  {
    id: 'orchestrator-agent',
    type: 'agent',
    name: 'Orchestrator Agent',
    description: 'Your intake point for all work requests. Clarifies requirements, routes to specialist agents, and manages project tracking in Notion.',
    category: 'Project Management',
    filePath: '../Agent_Team_ProcessFocus/orchestrator_agent.md'
  },
  {
    id: 'coding-agent',
    type: 'agent',
    name: 'Coding Agent',
    description: 'Builds and modifies code with discipline. Specs before code, iterates in chunks, always reviews before shipping. Your junior dev who delivers clean, working code.',
    category: 'Development',
    filePath: '../Agent_Team_ProcessFocus/coding_agent.md'
  },
  {
    id: 'n8n-workflow-engineer',
    type: 'agent',
    name: 'n8n Workflow Engineer',
    description: 'Builds functional n8n workflows that work immediately when imported. Translates business requirements into working automation with proper configurations.',
    category: 'Automation',
    filePath: '../Agent_Team_ProcessFocus/n8nworkflow_agent.md'
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

