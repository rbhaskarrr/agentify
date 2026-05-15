import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup Guide — Community Publisher Agent | Agentify',
  robots: { index: false }, // keep this page out of search engines
}

const ENV_VARS = [
  { key: 'INSIDED_CLIENT_ID', where: 'Gainsight Community → Control Panel → Integrations → API', required: true },
  { key: 'INSIDED_CLIENT_SECRET', where: 'Same page as above', required: true },
  { key: 'INSIDED_REGION', where: 'e.g. https://api2-us-west-2.insided.com', required: true },
  { key: 'INSIDED_AUTHOR_ID', where: 'Your community user ID (numeric, find in your profile URL)', required: true },
  { key: 'ANTHROPIC_API_KEY', where: 'console.anthropic.com → API Keys (needed for AI generation only)', required: false },
]

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-purple-400 font-bold text-lg">✦ Agentify</a>
          <span className="bg-green-900/50 text-green-400 border border-green-700/40 text-xs font-bold px-3 py-1 rounded-full">
            ✓ Purchase confirmed
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Welcome */}
        <div className="mb-12">
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold mb-3">Welcome to Community Publisher Agent</h1>
          <p className="text-slate-400 text-lg">Follow these steps to go from download to live in about 10 minutes.</p>
        </div>

        {/* Step 1 — Download */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <h2 className="text-xl font-bold">Download your package</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-300 text-sm mb-5">Check your email from Gumroad for the download link, or log in at gumroad.com to access your purchase at any time.</p>
            <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm text-slate-300 mb-4">
              📦 community-publisher-agent.zip
            </div>
            <p className="text-slate-500 text-xs">Extract the ZIP — you will see two folders: <code className="bg-slate-800 px-1 rounded">server/</code> and <code className="bg-slate-800 px-1 rounded">widget/</code></p>
          </div>
        </div>

        {/* Step 2 — Deploy server */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <h2 className="text-xl font-bold">Deploy the server to Render</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <p className="text-slate-300 text-sm">The server folder contains a <code className="bg-slate-800 px-1 rounded">render.yaml</code> for one-click deploy. You have two options:</p>
            <div className="space-y-3">
              <div className="bg-slate-800 rounded-xl p-4">
                <div className="text-sm font-semibold mb-1">Option A — One-click Render deploy (easiest)</div>
                <p className="text-slate-400 text-xs mb-3">Push the server folder to a new GitHub repo, then click the button below from your repo&apos;s README.</p>
                <div className="bg-slate-700 rounded-lg px-4 py-2 font-mono text-xs text-purple-300">
                  [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)]
                </div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <div className="text-sm font-semibold mb-1">Option B — Manual deploy</div>
                <ol className="text-slate-400 text-xs space-y-1 list-decimal list-inside">
                  <li>Go to render.com → New → Web Service</li>
                  <li>Connect your GitHub repo (server folder)</li>
                  <li>Build command: <code className="bg-slate-700 px-1 rounded">npm install</code></li>
                  <li>Start command: <code className="bg-slate-700 px-1 rounded">node server.js</code></li>
                  <li>Plan: Free</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 — Environment Variables */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <h2 className="text-xl font-bold">Add environment variables in Render</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-300 text-sm mb-5">In your Render service → <strong>Environment</strong> tab, add these variables:</p>
            <div className="space-y-3">
              {ENV_VARS.map(v => (
                <div key={v.key} className="bg-slate-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-purple-300 text-sm font-bold">{v.key}</code>
                    {v.required
                      ? <span className="bg-red-900/50 text-red-400 text-xs px-2 py-0.5 rounded-full">Required</span>
                      : <span className="bg-slate-700 text-slate-400 text-xs px-2 py-0.5 rounded-full">Optional</span>}
                  </div>
                  <p className="text-slate-400 text-xs">{v.where}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 4 — Gainsight Connector */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">4</div>
            <h2 className="text-xl font-bold">Create the Gainsight connector</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <ol className="text-slate-300 text-sm space-y-3 list-decimal list-inside">
              <li>Go to <strong>Gainsight Community → Control Panel → Integrations → Connectors</strong></li>
              <li>Click <strong>New Connector</strong></li>
              <li>Name: <code className="bg-slate-800 px-1 rounded text-purple-300">community-publisher</code></li>
              <li>Endpoint URL: <code className="bg-slate-800 px-1 rounded text-purple-300">https://YOUR-APP.onrender.com/widget</code></li>
              <li>Method: <strong>POST</strong></li>
              <li>Save</li>
            </ol>
            <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 text-amber-300 text-xs">
              ⚠️ Replace <code>YOUR-APP</code> with your actual Render service name (visible in the Render dashboard URL).
            </div>
          </div>
        </div>

        {/* Step 5 — Install widget */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">5</div>
            <h2 className="text-xl font-bold">Install the widget in your community</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <ol className="text-slate-300 text-sm space-y-3 list-decimal list-inside">
              <li>In your Gainsight Community admin, go to <strong>Control Panel → Pages</strong></li>
              <li>Create a new <strong>Custom Page</strong> (e.g. &quot;Community Publisher&quot;) — set visibility to <strong>Moderators only</strong></li>
              <li>Click <strong>Edit Layout</strong></li>
              <li>In the widget library, find <strong>Custom Widgets → Community Publisher</strong></li>
              <li>Drag it onto the page and save</li>
              <li>Visit the page — the widget will load and prompt for configuration on first launch</li>
            </ol>
            <div className="bg-slate-800 rounded-xl p-4 text-xs text-slate-400">
              <strong className="text-slate-300">Widget source files</strong> are in the <code>widget/</code> folder of your download. Upload them to your Gainsight Extensions Source (GitHub repo or zip upload) as per the Gainsight Custom Widget docs.
            </div>
          </div>
        </div>

        {/* Done */}
        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/40 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h2 className="text-2xl font-bold mb-2">You&apos;re all set!</h2>
          <p className="text-slate-300 text-sm mb-6">Your team can now write, translate into 8 languages, and publish articles directly from inside the community.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/agents/community-publisher" className="bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              ← Back to agent page
            </a>
            <a href="mailto:support@agentify.dev" className="border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-purple-300 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Contact support
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
