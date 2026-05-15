import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agentify — AI Agents for Community Teams',
  description: 'AI agents that write, translate into 8 languages, and publish content for your Gainsight Community. No code required. Free to start.',
  openGraph: {
    title: 'Agentify — AI Agents for Community Teams',
    description: 'Put your community on autopilot with AI agents built for Gainsight Community.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://gumroad.com/js/gumroad-embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
