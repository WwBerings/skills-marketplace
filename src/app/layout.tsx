import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skills & Agents Marketplace | Marketing Tools Library',
  description: 'Access powerful marketing skills and AI agents to supercharge your work. Browse our library of 10 marketing skills and 3 AI agents.',
  keywords: 'marketing skills, AI agents, marketing automation, content creation, SEO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
