import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

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
      <body className={lato.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
