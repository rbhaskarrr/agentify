'use client'
import { useState } from 'react'

const GUMROAD_URL = 'https://rohitbhaskar.gumroad.com/l/mikgcm'

const AGENTS = [
  {
    icon: '✦',
    name: 'Community Publisher',
    status: 'live',
    price: '$5',
    tagline: 'Write, translate & publish articles in 8 languages — directly inside your community.',
    features: ['AI article generation from topic or URL', '8-language translation (free, no API key)', 'Draft or publish with one click'],
    color: 'border-purple-500',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '📋',
    name: 'Release Notes Publisher',
    status: 'soon',
    price: '$5',
    tagline: 'Auto-converts your product changelogs into polished community announcements.',
    features: ['Connects to GitHub, Jira, or Notion', 'Formats for community tone automatically', 'Schedules posts on release day'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
  },
  {
    icon: '🎫',
    name: 'Support Ticket Summariser',
    status: 'soon',
    price: '$5',
    tagline: 'Turns your resolved support tickets into helpful knowledge base articles.',
    features: ['Reads closed Zendesk / Salesforce tickets', 'Extracts solution + context automatically', 'Posts to the right community section'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
  },
  {
    icon: '📊',
    name: 'Analytics Reporter',
    status: 'soon',
    price: '$5',
    tagline: 'Weekly AI-generated digest of your community health metrics, posted automatically.',
    features: ['Pulls views, replies, likes & search trends', 'Generates readable narrative summary', 'Auto-publishes every Monday morning'],
    color: 'border-slate-200',
    iconBg: 'bg-slate-100 text-slate-600',
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
    q: 'Is this really a one-time payment?',
    a: 'Yes. $5 per agent, once. No monthly subscription. No usage fees. Buy it once and use it forever — future updates are included.',
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
          <a
            href={GUMROAD_URL}
            data-gumroad-overlay-checkout="true"
            className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Buy $5 →
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
            Publish in 8 languages.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              $5. No subscription.
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Community Publisher installs inside Gainsight in under 5 minutes. Type a topic, generate a full article, translate to 8 languages, and publish — without leaving your platform. No code. No contract. No surprise bill.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8 justify-center">
            <a
              href={GUMROAD_URL}
              data-gumroad-overlay-checkout="true"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all inline-flex items-center gap-2 justify-center"
            >
              Get Community Publisher — $5 →
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm mb-12">
            <span>✓ One-time payment</span>
            <span>✓ Instant download</span>
            <span>✓ Works inside Gainsight</span>
            <span>✓ 30-day guarantee</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: '$5', label: 'per agent' },
              { value: '8', label: 'languages' },
              { value: '< 5 min', label: 'setup time' },
            ].map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent Marketplace ── */}
      <section id="agents" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🛒 Agent Marketplace
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Every agent is $5</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Each agent installs as a widget inside your Gainsight Community. One-time purchase, unlimited use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {AGENTS.map(agent => (
              <div key={agent.name} className={`border-2 ${agent.color} rounded-2xl p-7 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${agent.iconBg} flex items-center justify-center text-2xl font-bold`}>
                    {agent.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-slate-900">{agent.price}</span>
                    {agent.status === 'live' ? (
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">● Live</span>
                    ) : (
                      <span className="bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Coming Soon</span>
                    )}
                  </div>
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
                  <a
                    href={GUMROAD_URL}
                    data-gumroad-overlay-checkout="true"
                    className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Buy Now — $5 →
                  </a>
                ) : (
                  <a href="#waitlist" className="inline-flex items-center gap-2 border border-slate-300 hover:border-purple-400 hover:text-purple-700 text-slate-600 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                    Notify me when live →
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">$5 per agent. That&apos;s it.</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              No subscription. No seat fees. No surprise bill. Buy one agent, use it forever with unlimited publishes.
            </p>
          </div>

          {/* Big price card */}
          <div className="bg-slate-900 rounded-2xl p-10 text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              ● Live Now
            </div>
            <div className="text-7xl font-extrabold text-white mb-2">$5</div>
            <div className="text-purple-400 text-lg font-semibold mb-6">Community Publisher · one-time payment</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-2xl mx-auto">
              {[
                'Unlimited publishes',
                '8-language translation',
                'Lifetime access',
                'Free updates',
              ].map(f => (
                <div key={f} className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-slate-300">
                  <span className="text-green-400 mr-1">✓</span>{f}
                </div>
              ))}
            </div>
            <a
              href={GUMROAD_URL}
              data-gumroad-overlay-checkout="true"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-opacity"
            >
              Buy Now — $5 →
            </a>
            <p className="text-slate-500 text-sm mt-4">Secure checkout via Gumroad · Instant download · 30-day money-back guarantee</p>
          </div>

          {/* Comparison table */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="font-bold text-center mb-6 text-lg">$5 vs. the alternatives</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 font-semibold text-slate-600">Option</th>
                    <th className="text-center py-3 font-semibold text-slate-600">Cost</th>
                    <th className="text-center py-3 font-semibold text-slate-600">Time to publish</th>
                    <th className="text-center py-3 font-semibold text-slate-600">Languages</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { option: '✦ Agentify Agent', cost: '$5 one-time', time: '< 5 minutes', langs: '8', highlight: true },
                    { option: '🌐 Manual + Google Translate', cost: 'Free', time: '60–90 min / article', langs: '1 at a time', highlight: false },
                    { option: '✍️ Freelance translator', cost: '$50–200 / article', time: '2–5 days', langs: '1 at a time', highlight: false },
                  ].map(r => (
                    <tr key={r.option} className={`border-b border-slate-100 ${r.highlight ? 'bg-purple-50' : ''}`}>
                      <td className={`py-4 font-medium ${r.highlight ? 'text-purple-700' : 'text-slate-700'}`}>{r.option}</td>
                      <td className={`py-4 text-center ${r.highlight ? 'text-purple-600 font-bold' : 'text-slate-500'}`}>{r.cost}</td>
                      <td className={`py-4 text-center ${r.highlight ? 'text-purple-600 font-bold' : 'text-slate-500'}`}>{r.time}</td>
                      <td className={`py-4 text-center ${r.highlight ? 'text-purple-600 font-bold' : 'text-slate-500'}`}>{r.langs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            Ready to publish faster?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">One-time $5. No subscription. Instant download.</p>
          <a
            href={GUMROAD_URL}
            data-gumroad-overlay-checkout="true"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity mb-4"
          >
            Get Community Publisher — $5 →
          </a>
          <p className="text-slate-500 text-sm mb-12">Secure checkout via Gumroad · Instant download · 30-day guarantee</p>

          {/* New agent notifications */}
          <div className="border-t border-slate-700 pt-10">
            <p className="text-slate-400 text-sm mb-4">Want to know when new agents launch?</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              {submitted ? (
                <div className="w-full bg-green-900/40 border border-green-500/40 text-green-300 rounded-lg px-5 py-3 text-sm font-medium">
                  ✓ We&apos;ll notify you when new agents launch!
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
                  <button type="submit" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-lg text-sm whitespace-nowrap transition">
                    Notify me →
                  </button>
                </>
              )}
            </form>
          </div>
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
