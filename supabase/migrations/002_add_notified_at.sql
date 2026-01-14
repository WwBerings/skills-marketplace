-- Add notified_at column to track when requests have been processed by n8n
-- This prevents duplicate notifications

ALTER TABLE requests ADD COLUMN notified_at TIMESTAMP WITH TIME ZONE;

-- Create index for efficient querying of unnotified requests
CREATE INDEX idx_requests_notified_at ON requests(notified_at);

-- Add comment for documentation
COMMENT ON COLUMN requests.notified_at IS 'Timestamp when admin was notified about this request via n8n workflow';


