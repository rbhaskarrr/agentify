'use client'

const GUMROAD_URL = 'https://rohitbhaskar.gumroad.com/l/mikgcm'
const PRICE = '$5'

const FEATURES = [
  { icon: '✦', title: 'AI Article Generation', desc: 'Generate full articles from a topic or any public URL using Claude AI.' },
  { icon: '🌍', title: '8-Language Translation', desc: 'Auto-translate to Spanish, French, German, Portuguese, Japanese, Korean and Chinese. Free, no API key needed.' },
  { icon: '📸', title: 'Community-Hosted Images', desc: 'Upload images directly to your inSided media library. All language versions share the same hosted images.' },
  { icon: '⬇', title: 'Import Existing Articles', desc: 'Fetch any community article by URL and import its full HTML including tables and images.' },
  { icon: '📝', title: 'Draft or Publish', desc: 'Save as draft for review, or publish live in one click. Full control over each language.' },
  { icon: '🤖', title: 'AI Translation Disclaimer', desc: 'Automatically appends a branded disclaimer to translated articles with your support email.' },
]

const INCLUDES = [
  'Full source code (server + widget)',
  'One-click Render deploy button',
  'Gainsight widget files (index.html + app.js)',
  'Step-by-step setup guide',
  'render.yaml pre-configured',
  '.env template with all variables listed',
]

const STEPS = [
  { n: '1', title: 'Buy & download', desc: 'Pay once, download the ZIP package immediately. No subscription.' },
  { n: '2', title: 'Deploy to Render', desc: 'Click the Render deploy button included in the package. Takes 2 minutes.' },
  { n: '3', title: 'Add your credentials', desc: 'Paste your inSided API keys into Render environment variables.' },
  { n: '4', title: 'Install in Gainsight', desc: 'Add the widget to any community page via the page builder. No code needed.' },
]

export default function CommunityPublisherPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Nav */}
      <nav className="border-b border-slate-100 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-purple-700 flex items-center gap-2">✦ Agentify</a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">← Back to home</a>
            <a href={GUMROAD_URL} data-gumroad-overlay-checkout="true"
              className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Buy {PRICE}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">● Live</span>
            <span className="text-slate-400 text-sm">Gainsight Community Agent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Community Publisher Agent
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Write, translate into 8 languages, and publish articles directly inside your Gainsight Community — all from one widget, without leaving your platform.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={GUMROAD_URL} data-gumroad-overlay-checkout="true"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-purple-900/40">
              Buy Now — {PRICE} one-time
            </a>
            <span className="text-slate-400 text-sm">✓ Instant download &nbsp;·&nbsp; ✓ No subscription &nbsp;·&nbsp; ✓ Full source code</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-3">Everything included</h2>
          <p className="text-slate-500 text-center mb-12">One agent. Every tool your community team needs to publish faster.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="border border-slate-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">From purchase to live in 10 minutes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map(s => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-slate-200 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center flex-shrink-0 text-lg">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the package */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">What&apos;s in the download</h2>
          <div className="bg-slate-900 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📦</span>
              <span className="text-white font-bold text-lg">community-publisher-agent.zip</span>
            </div>
            <ul className="space-y-3">
              {INCLUDES.map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-300 font-medium">Community Publisher Agent</span>
                <span className="text-white font-bold text-xl">{PRICE}</span>
              </div>
              <div className="text-slate-500 text-xs mb-6">One-time payment. Lifetime access. Free updates included.</div>
              <a href={GUMROAD_URL} data-gumroad-overlay-checkout="true"
                className="block w-full text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-bold py-4 rounded-xl text-lg transition-opacity">
                Buy Now — {PRICE}
              </a>
              <p className="text-slate-500 text-xs text-center mt-3">Secure checkout via Gumroad · Instant download · 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-8 text-center">Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need coding skills?', a: 'No. The server deploys with one click on Render, and the widget installs via Gainsight\'s drag-and-drop page builder.' },
              { q: 'What platform does it work with?', a: 'Gainsight Community (inSided). You need an active community instance and an inSided API key.' },
              { q: 'Is the AI generation free?', a: 'Translation is 100% free (Google Translate). Article generation uses Anthropic Claude — you\'ll need your own API key (~$1–5/month for typical usage).' },
              { q: 'What if I get stuck?', a: 'Email support@agentify.dev — we respond within 24 hours.' },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to ship faster?</h2>
        <p className="text-slate-400 mb-8">One-time {PRICE}. No subscription. Instant download.</p>
        <a href={GUMROAD_URL} data-gumroad-overlay-checkout="true"
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity">
          Buy Community Publisher — {PRICE}
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-6 text-center">
        <a href="/" className="text-purple-400 font-bold">✦ Agentify</a>
        <p className="text-slate-600 text-sm mt-1">© 2026 Agentify. Built for Gainsight Community.</p>
      </footer>

    </div>
  )
}
