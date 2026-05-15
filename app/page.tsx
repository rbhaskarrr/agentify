'use client'
import { useState } from 'react'

const AGENTS = [
  {
    icon: '✦',
    name: 'Community Publisher',
    status: 'live',
    tagline: 'Write, translate & publish articles in 8 languages — directly inside your community.',
    features: ['AI article generation from topic or URL', '8-language translation (free, no API key)', 'Draft or publish with one click'],
    color: 'border-purple-500',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '📋',
    name: 'Release Notes Publisher',
    status: 'soon',
    tagline: 'Auto-converts your product changelogs into polished community announcements.',
    features: ['Connects to GitHub, Jira, or Notion', 'Formats for community tone automatically', 'Schedules posts on release day'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
  },
  {
    icon: '🎫',
    name: 'Support Ticket Summariser',
    status: 'soon',
    tagline: 'Turns your resolved support tickets into helpful knowledge base articles.',
    features: ['Reads closed Zendesk / Salesforce tickets', 'Extracts solution + context automatically', 'Posts to the right community section'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
  },
  {
    icon: '📊',
    name: 'Analytics Reporter',
    status: 'soon',
    tagline: 'Weekly AI-generated digest of your community health metrics, posted automatically.',
    features: ['Pulls views, replies, likes & search trends', 'Generates readable narrative summary', 'Auto-publishes every Monday morning'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
  },
]

const PRICING = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    desc: 'Perfect for trying out Agentify.',
    features: ['Community Publisher agent', '30 article publishes / month', 'English language only', 'Community support'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    desc: 'For teams publishing at scale.',
    features: ['All 4 agents (as released)', 'Unlimited publishes', '8 languages with AI translation', 'Priority email support', 'Early access to new agents'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organisations.',
    features: ['Custom AI agents on request', 'White-label option', 'Dedicated onboarding', 'SLA & dedicated support', 'Invoice billing'],
    cta: 'Contact Us',
    highlight: false,
  },
]

const FAQS = [
  {
    q: 'Which community platform does Agentify work with?',
    a: 'Agentify is built specifically for Gainsight Community (powered by inSided). If you are on another platform, reach out — we are evaluating Khoros and Higher Logic next.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'No. Each agent installs as a widget via the Gainsight Community page builder — drag, drop, configure with your API credentials, and you are done in under 5 minutes.',
  },
  {
    q: 'How does the translation work? Are there extra costs?',
    a: 'Translation uses the Google Translate API — it is completely free with no API key required and supports 8 languages: Spanish, French, German, Portuguese, Japanese, Korean and Chinese.',
  },
  {
    q: 'Can I publish to multiple communities?',
    a: 'Yes. Each connector points to one community, but you can install multiple connectors pointing to different community instances.',
  },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen font-sans text-slate-900">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-purple-700 tracking-tight flex items-center gap-2">
            ✦ Agentify
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#agents" className="hover:text-purple-700 transition-colors">Agents</a>
            <a href="#how-it-works" className="hover:text-purple-700 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-purple-700 transition-colors">Pricing</a>
          </div>
          <a href="#waitlist" className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-slate-900 pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-900/50 border border-purple-700/40 text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🤖 AI Agents for Gainsight Community
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Put Your Community<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              on Autopilot
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Agentify installs AI agents directly inside your Gainsight Community.
            Write, translate into 8 languages, and publish articles — all without leaving your platform.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            {submitted ? (
              <div className="w-full bg-green-900/40 border border-green-500/40 text-green-300 rounded-lg px-5 py-3 text-sm font-medium">
                ✓ You&apos;re on the waitlist! We&apos;ll be in touch soon.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  required
                />
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all whitespace-nowrap">
                  Get Early Access →
                </button>
              </>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm mb-12">
            <span>✓ No code required</span>
            <span>✓ Free to start</span>
            <span>✓ Works with Gainsight Community</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '8', label: 'Languages' },
              { value: '< 5 min', label: 'Setup time' },
              { value: '4', label: 'AI Agents' },
            ].map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agents ── */}
      <section id="agents" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">AI Agents built for community teams</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Each agent installs as a widget inside your community. Your team uses them without ever leaving the platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {AGENTS.map(agent => (
              <div key={agent.name} className={`border-2 ${agent.color} rounded-2xl p-7 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${agent.iconBg} flex items-center justify-center text-2xl font-bold`}>
                    {agent.icon}
                  </div>
                  {agent.status === 'live' ? (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">● Live</span>
                  ) : (
                    <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Coming Soon</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{agent.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {agent.features.map(f => (
                    <li key={f} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {agent.status === 'live' ? (
                  <a href="/agents/community-publisher" className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                    View & Install →
                  </a>
                ) : (
                  <a href="#waitlist" className="inline-flex items-center gap-2 border border-slate-300 hover:border-purple-400 hover:text-purple-700 text-slate-600 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                    Join Waitlist →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Up and running in under 5 minutes</h2>
            <p className="text-slate-500 text-lg">No developer needed. No complex setup.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Install the widget',
                desc: 'Add the Agentify agent to your Gainsight Community page via the drag-and-drop page builder. No code required.',
                icon: '🧩',
              },
              {
                step: '02',
                title: 'Connect your community',
                desc: 'Paste your inSided API credentials into the widget settings. One-time setup takes under a minute.',
                icon: '🔗',
              },
              {
                step: '03',
                title: 'Start publishing with AI',
                desc: 'Your team writes, translates, and publishes articles in 8 languages — all from inside the community.',
                icon: '🚀',
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-200 to-transparent z-0" />
                )}
                <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all relative z-10">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-2">Step {s.step}</div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-500 text-lg">Start free. Upgrade when you need more.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map(plan => (
              <div key={plan.name} className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? 'bg-purple-700 text-white shadow-xl shadow-purple-200 scale-105' : 'bg-white border border-slate-200'}`}>
                {plan.highlight && (
                  <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wide">
                    ★ Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : ''}`}>{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm mb-1 ${plan.highlight ? 'text-purple-200' : 'text-slate-400'}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-purple-200' : 'text-slate-500'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${plan.highlight ? 'text-purple-100' : 'text-slate-600'}`}>
                      <span className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-purple-500'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`text-center text-sm font-semibold py-3 rounded-xl transition-all ${
                    plan.highlight
                      ? 'bg-white text-purple-700 hover:bg-purple-50'
                      : 'bg-purple-700 text-white hover:bg-purple-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={`text-purple-600 text-lg transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section id="waitlist" className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to agentify your community?
          </h2>
          <p className="text-slate-400 mb-8">Join community managers already on the waitlist.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {submitted ? (
              <div className="w-full bg-green-900/40 border border-green-500/40 text-green-300 rounded-lg px-5 py-3 text-sm font-medium">
                ✓ You&apos;re on the waitlist! We&apos;ll be in touch soon.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-400"
                  required
                />
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-opacity">
                  Join Waitlist →
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-950 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-purple-400 font-bold text-lg mb-1">✦ Agentify</div>
            <div className="text-slate-500 text-sm">AI Agents for community teams</div>
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#agents" className="hover:text-purple-400 transition-colors">Agents</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#waitlist" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <div className="text-slate-600 text-sm">© 2026 Agentify. Built for Gainsight Community.</div>
        </div>
      </footer>

    </div>
  )
}
