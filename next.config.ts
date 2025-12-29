import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Include content/skills files in serverless function bundles
  outputFileTracingIncludes: {
    '/api/download/[id]': ['./content/skills/**/*'],
  },
}

export default nextConfig
