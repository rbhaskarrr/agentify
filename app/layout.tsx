import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agentify — AI Agents for Gainsight Community Teams',
  description: 'AI agents that write, translate into 8 languages, and publish content for your Gainsight Community. No code required. Deploy in 10 minutes.',
  keywords: 'Gainsight Community, inSided, community publishing, AI agent, article translation, community manager tools',
  openGraph: {
    title: 'Agentify — AI Agents for Gainsight Community Teams',
    description: 'Write, translate into 8 languages, and publish articles directly to your Gainsight Community. No code required.',
    type: 'website',
    url: 'https://agentify.pages.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentify — AI Agents for Gainsight Community Teams',
    description: 'Write, translate into 8 languages, and publish articles directly to your Gainsight Community.',
  },
  alternates: {
    canonical: 'https://agentify.pages.dev',
  },
  verification: {
    google: 'QjzM5dI_AnHQk8SEugz4nFO_m06T85weHhKaBSU6VO8',
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
