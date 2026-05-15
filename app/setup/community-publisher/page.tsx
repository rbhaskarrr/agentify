import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup Guide — Community Publisher Agent | Agentify',
  robots: { index: false },
}

const ENV_VARS = [
  { key: 'INSIDED_CLIENT_ID', where: 'Gainsight Community → Control Panel → Integrations → API', required: true },
  { key: 'INSIDED_CLIENT_SECRET', where: 'Same page (shown once on creation)', required: true },
  { key: 'INSIDED_REGION', where: 'e.g. https://api2-us-west-2.insided.com', required: true },
  { key: 'INSIDED_AUTHOR_ID', where: 'Numeric user ID — Control Panel → Users → check profile URL', required: true },
  { key: 'ANTHROPIC_API_KEY', where: 'console.anthropic.com → API Keys (AI generation only)', required: false },
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
            <h2 className="text-xl font-bold">Extract your download</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-300 text-sm mb-4">Unzip the file you downloaded from Gumroad. You will see these files:</p>
            <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm text-slate-300 space-y-1">
              <div>📄 server.js</div>
              <div>📄 app.html</div>
              <div>📄 package.json</div>
              <div>📄 render.yaml</div>
              <div>📄 .env.example</div>
              <div>📄 README.md</div>
            </div>
          </div>
        </div>

        {/* Step 2 — GitHub */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <h2 className="text-xl font-bold">Push to a private GitHub repo</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-3">
            <p className="text-slate-300 text-sm">Create a new <strong>private</strong> repo on GitHub and push all the extracted files into it. Render will pull from this repo.</p>
            <div className="bg-slate-800 rounded-xl p-4 space-y-2 font-mono text-xs text-slate-300">
              <div><span className="text-slate-500"># from inside the extracted folder</span></div>
              <div>git init</div>
              <div>git add .</div>
              <div>git commit -m &quot;initial&quot;</div>
              <div>git remote add origin https://github.com/YOUR_USER/YOUR_REPO</div>
              <div>git push -u origin main</div>
            </div>
          </div>
        </div>

        {/* Step 3 — Deploy */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <h2 className="text-xl font-bold">Deploy to Render (free)</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-sm font-semibold mb-2">Option A — Manual (2 minutes)</div>
              <ol className="text-slate-400 text-xs space-y-1.5 list-decimal list-inside">
                <li>Go to <strong className="text-slate-300">render.com</strong> → <strong className="text-slate-300">New → Web Service</strong></li>
                <li>Click <strong className="text-slate-300">Connect GitHub</strong> and select your repo</li>
                <li>Build command: <code className="bg-slate-700 px-1 rounded">npm install</code></li>
                <li>Start command: <code className="bg-slate-700 px-1 rounded">node server.js</code></li>
                <li>Plan: <strong className="text-slate-300">Free</strong> → click <strong className="text-slate-300">Create Web Service</strong></li>
              </ol>
            </div>
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-sm font-semibold mb-2">Option B — One-click button</div>
              <p className="text-slate-400 text-xs">The README.md in your package includes a Deploy to Render button. Open the README on GitHub and click it.</p>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 text-amber-300 text-xs">
              ⚠️ Render free tier spins down after 15 min of inactivity. First request may take ~30 seconds to wake. Upgrade to a paid plan ($7/mo) if your team needs it always-on.
            </div>
          </div>
        </div>

        {/* Step 4 — Environment Variables */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">4</div>
            <h2 className="text-xl font-bold">Add environment variables in Render</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
            <p className="text-slate-300 text-sm mb-5">In your Render service → <strong>Environment</strong> tab, add these variables and click <strong>Save Changes</strong>:</p>
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
            <div className="mt-4 bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 text-blue-300 text-xs">
              💡 After saving, Render will redeploy automatically. Wait ~1 minute for the new deploy to finish.
            </div>
          </div>
        </div>

        {/* Step 5 — Use it */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-purple-700 flex items-center justify-center font-bold flex-shrink-0">5</div>
            <h2 className="text-xl font-bold">Open your app and connect</h2>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <ol className="text-slate-300 text-sm space-y-3 list-decimal list-inside">
              <li>Go to <code className="bg-slate-800 px-1 rounded text-purple-300">https://YOUR-SERVICE.onrender.com</code></li>
              <li>Select your <strong>API Region</strong> (e.g. US West 2)</li>
              <li>Enter your <strong>Client ID</strong>, <strong>Client Secret</strong>, and <strong>Author ID</strong></li>
              <li>Click <strong>Connect & Authenticate</strong></li>
              <li>You are in! Write, translate, and publish articles directly from the app.</li>
            </ol>
            <div className="bg-slate-800 rounded-xl p-4 text-xs text-slate-400">
              <strong className="text-slate-300">Tip:</strong> Bookmark the Render URL for your team. Anyone who needs to publish articles can use it — just enter the credentials on the Connect screen.
            </div>
          </div>
        </div>

        {/* Done */}
        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/40 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h2 className="text-2xl font-bold mb-2">You&apos;re all set!</h2>
          <p className="text-slate-300 text-sm mb-6">Your team can now write, translate into 8 languages, and publish articles directly from the web app — no code needed.</p>
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
