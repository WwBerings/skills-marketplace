export type ToolType = 'claude' | 'chatgpt' | 'n8n'

export interface CatalogItem {
  id: string
  type: 'skill' | 'agent'
  name: string
  description: string
  category: string
  folderPath: string      // Path to the skill folder (contains SKILL.md and optional references/)
  skillFilename: string   // Name of the main skill file (e.g., 'SKILL.md' or 'brand_voice_SKILL.md')
  contextItems: string[]  // "Use when:" for skills, "Handles:" for agents
  toolType?: ToolType     // Default: 'claude' - for future ChatGPT/n8n support
}

export interface Request {
  id: string
  created_at: string
  name: string
  email: string
  company_team: string
  use_case: string
  status: 'pending' | 'approved' | 'delivered'
}

export interface RequestItem {
  id: string
  request_id: string
  item_type: 'skill' | 'agent'
  item_name: string
  created_at: string
}

