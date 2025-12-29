-- Waitlist subscribers for new skill notifications
CREATE TABLE waitlist_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Index for querying active subscribers
CREATE INDEX idx_waitlist_email ON waitlist_subscribers(email);
CREATE INDEX idx_waitlist_created ON waitlist_subscribers(created_at DESC);
CREATE INDEX idx_waitlist_active ON waitlist_subscribers(unsubscribed_at) WHERE unsubscribed_at IS NULL;

-- Enable RLS
ALTER TABLE waitlist_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON waitlist_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role has full access (for n8n queries)
CREATE POLICY "Service role full access" ON waitlist_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

