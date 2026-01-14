import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Pro4all Skills Marketplace | AI Agents & Marketing Tools',
  description: 'Access powerful marketing skills and AI agents to supercharge your work. Browse our library of 10 marketing skills and 3 AI agents.',
  keywords: 'Pro4all, marketing skills, AI agents, marketing automation, content creation, SEO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
