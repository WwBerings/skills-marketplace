-- Track skill downloads for analytics
CREATE TABLE skill_downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id TEXT NOT NULL,
  skill_name TEXT NOT NULL,
  email TEXT NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for querying by skill
CREATE INDEX idx_skill_downloads_skill_id ON skill_downloads(skill_id);

-- Index for querying by email
CREATE INDEX idx_skill_downloads_email ON skill_downloads(email);

-- RLS policy to allow anonymous inserts
ALTER TABLE skill_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON skill_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access for admin queries
CREATE POLICY "Service role has full access" ON skill_downloads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);


