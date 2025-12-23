export interface CatalogItem {
  id: string
  type: 'skill' | 'agent'
  name: string
  description: string
  category: string
  filePath: string
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

