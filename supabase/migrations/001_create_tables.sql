-- Create status enum
CREATE TYPE request_status AS ENUM ('pending', 'approved', 'delivered');

-- Create item_type enum
CREATE TYPE item_type AS ENUM ('skill', 'agent');

-- Create requests table
CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_team TEXT NOT NULL,
  use_case TEXT NOT NULL,
  status request_status DEFAULT 'pending'
);

-- Create request_items table
CREATE TABLE request_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES requests(id) ON DELETE CASCADE,
  item_type item_type NOT NULL,
  item_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_requests_email ON requests(email);
CREATE INDEX idx_requests_status ON requests(status);
CREATE INDEX idx_requests_created_at ON requests(created_at DESC);
CREATE INDEX idx_request_items_request_id ON request_items(request_id);

-- Enable Row Level Security (RLS)
ALTER TABLE requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE request_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert access (for form submissions)
CREATE POLICY "Allow public insert on requests"
  ON requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on request_items"
  ON request_items
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for authenticated users to view all (for admin dashboard)
CREATE POLICY "Allow authenticated read on requests"
  ON requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on request_items"
  ON request_items
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for authenticated users to update (for admin dashboard)
CREATE POLICY "Allow authenticated update on requests"
  ON requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


