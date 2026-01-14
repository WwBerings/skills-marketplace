-- Migration: Add Custom Request Fields
-- Created: 2025-12-23
-- Description: Extends requests table to support custom agent/skill build requests

-- Add new columns to requests table for custom requests
ALTER TABLE requests 
  ADD COLUMN IF NOT EXISTS request_type TEXT DEFAULT 'catalog' CHECK (request_type IN ('catalog', 'custom')),
  ADD COLUMN IF NOT EXISTS business_category TEXT,
  ADD COLUMN IF NOT EXISTS current_process TEXT,
  ADD COLUMN IF NOT EXISTS pain_points TEXT,
  ADD COLUMN IF NOT EXISTS desired_outcome TEXT,
  ADD COLUMN IF NOT EXISTS tools_used TEXT,
  ADD COLUMN IF NOT EXISTS team_size TEXT,
  ADD COLUMN IF NOT EXISTS timeline TEXT;

-- Add index for request_type for efficient filtering
CREATE INDEX IF NOT EXISTS idx_requests_request_type ON requests(request_type);

-- Add comment for documentation
COMMENT ON COLUMN requests.request_type IS 'Type of request: catalog (selecting existing items) or custom (requesting custom build)';
COMMENT ON COLUMN requests.business_category IS 'Selected business category for custom requests (e.g., Content Creation, Sales Automation)';
COMMENT ON COLUMN requests.current_process IS 'Description of how user currently handles the task (custom requests only)';
COMMENT ON COLUMN requests.pain_points IS 'What is not working with current process (custom requests only)';
COMMENT ON COLUMN requests.desired_outcome IS 'What success would look like for the user (custom requests only)';
COMMENT ON COLUMN requests.tools_used IS 'Current tech stack/tools being used (custom requests only)';
COMMENT ON COLUMN requests.team_size IS 'Size of team that will use the solution (custom requests only)';
COMMENT ON COLUMN requests.timeline IS 'When the user needs the solution (custom requests only)';

-- No RLS policy changes needed - existing policies cover both request types
-- The anon insert policy allows both catalog and custom requests
-- The authenticated read/update policies work for both types


