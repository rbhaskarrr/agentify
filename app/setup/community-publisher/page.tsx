import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Setup Guide — Community Publisher Agent | Agentify',
  robots: { index: false },
}

function Step({ n, title, children }: { n: number, title: string, children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center font-bold text-lg flex-shrink-0">{n}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function SubStep({ n, title, children }: { n: string, title: string, children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{n}</div>
        <h3 className="text-sm font-bold text-slate-200">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function UICallout({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 mb-4">
      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">📍 {label}</div>
      {children}
    </div>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-4 text-blue-300 text-sm mb-4">
      💡 <strong>Tip:</strong> {children}
    </div>
  )
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 text-amber-300 text-sm mb-4">
      ⚠️ <strong>Note:</strong> {children}
    </div>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 font-mono text-sm text-green-400 mb-4 overflow-x-auto whitespace-pre">
      {children}
    </div>
  )
}

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
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold mb-3">Community Publisher Agent — Setup Guide</h1>
          <p className="text-slate-400 text-lg mb-6">Follow this guide step by step. Total time: about 10–15 minutes. No coding required.</p>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <div className="text-sm font-bold text-slate-300 mb-3">What you&apos;ll need before starting:</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">→</span> A <strong className="text-slate-300">GitHub account</strong> (free) — github.com</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">→</span> A <strong className="text-slate-300">Render account</strong> (free) — render.com</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">→</span> Access to your <strong className="text-slate-300">Gainsight Community Control Panel</strong> (admin access)</li>
              <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">→</span> The <strong className="text-slate-300">ZIP file</strong> from your Gumroad purchase</li>
            </ul>
          </div>
        </div>

        {/* STEP 1 */}
        <Step n={1} title="Extract your download">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <SubStep n="a" title="Locate the ZIP file">
              <p className="text-slate-400 text-sm mb-3">Go to your Gumroad purchase receipt (check your email) and click <strong className="text-slate-300">View content</strong> to download the file. You will get a file named:</p>
              <div className="bg-slate-800 rounded-xl px-4 py-3 font-mono text-sm text-purple-300">
                community-publisher-agent-v1.zip
              </div>
            </SubStep>

            <SubStep n="b" title="Extract the ZIP">
              <p className="text-slate-400 text-sm mb-3">
                <strong className="text-slate-300">Mac:</strong> Double-click the ZIP file — it extracts automatically.<br />
                <strong className="text-slate-300">Windows:</strong> Right-click → Extract All → choose a folder.
              </p>
              <p className="text-slate-400 text-sm mb-3">After extracting you will see a folder with these files:</p>
              <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm text-slate-300 space-y-1.5">
                <div><span className="text-yellow-400">📄</span> server.js <span className="text-slate-500 text-xs ml-2">— the backend server</span></div>
                <div><span className="text-yellow-400">📄</span> app.html <span className="text-slate-500 text-xs ml-2">— the web app interface</span></div>
                <div><span className="text-yellow-400">📄</span> package.json <span className="text-slate-500 text-xs ml-2">— Node.js dependencies</span></div>
                <div><span className="text-yellow-400">📄</span> render.yaml <span className="text-slate-500 text-xs ml-2">— Render deployment config</span></div>
                <div><span className="text-yellow-400">📄</span> .env.example <span className="text-slate-500 text-xs ml-2">— template for credentials</span></div>
                <div><span className="text-yellow-400">📄</span> README.md <span className="text-slate-500 text-xs ml-2">— quick start reference</span></div>
              </div>
            </SubStep>
          </div>
        </Step>

        {/* STEP 2 */}
        <Step n={2} title="Create a private GitHub repository">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <Warning>Keep this repo <strong>private</strong> — it will contain your server code. Never make it public.</Warning>

            <SubStep n="a" title="Go to github.com and sign in">
              <p className="text-slate-400 text-sm">If you don&apos;t have a GitHub account, create one free at github.com. It takes 2 minutes.</p>
            </SubStep>

            <SubStep n="b" title="Create a new repository">
              <UICallout label="What to click on GitHub">
                <ol className="text-slate-300 text-sm space-y-1.5 list-decimal list-inside">
                  <li>Click the <strong>+</strong> icon in the top-right corner</li>
                  <li>Select <strong>&quot;New repository&quot;</strong></li>
                  <li>Repository name: <code className="bg-slate-700 px-1 rounded text-purple-300">community-publisher</code></li>
                  <li>Set visibility to <strong>Private</strong> (select the Private radio button)</li>
                  <li>Leave all other options unchecked</li>
                  <li>Click <strong>&quot;Create repository&quot;</strong></li>
                </ol>
              </UICallout>
            </SubStep>

            <SubStep n="c" title="Push your files to the repo">
              <p className="text-slate-400 text-sm mb-3">Open Terminal (Mac) or Command Prompt (Windows), navigate to your extracted folder, and run these commands one by one:</p>
              <Code>{`cd path/to/extracted-folder

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/community-publisher.git
git push -u origin main`}</Code>
              <Tip>Replace <code className="bg-slate-800 px-1 rounded">YOUR_USERNAME</code> with your actual GitHub username. GitHub shows the exact commands after you create the repo — you can copy from there.</Tip>
            </SubStep>
          </div>
        </Step>

        {/* STEP 3 */}
        <Step n={3} title="Deploy to Render (free hosting)">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <p className="text-slate-400 text-sm">Render is a free cloud hosting platform. Your server will run here and be accessible from anywhere.</p>

            <SubStep n="a" title="Create a Render account">
              <p className="text-slate-400 text-sm">Go to <strong className="text-slate-300">render.com</strong> and sign up for free. You can sign up with your GitHub account for faster setup.</p>
            </SubStep>

            <SubStep n="b" title="Create a new Web Service">
              <UICallout label="What to click on Render">
                <ol className="text-slate-300 text-sm space-y-1.5 list-decimal list-inside">
                  <li>Click <strong>&quot;New +&quot;</strong> button in the top navigation</li>
                  <li>Select <strong>&quot;Web Service&quot;</strong> from the dropdown</li>
                  <li>Click <strong>&quot;Build and deploy from a Git repository&quot;</strong></li>
                  <li>Click <strong>&quot;Connect GitHub&quot;</strong></li>
                  <li>Authorize Render to access your GitHub</li>
                  <li>Find and select your <strong>community-publisher</strong> repo</li>
                  <li>Click <strong>&quot;Connect&quot;</strong></li>
                </ol>
              </UICallout>
            </SubStep>

            <SubStep n="c" title="Configure the service settings">
              <UICallout label="Fill in these settings exactly">
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Name</span>
                    <code className="text-purple-300">community-publisher</code>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Region</span>
                    <span className="text-slate-300">Oregon (US West) — or closest to you</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Branch</span>
                    <code className="text-purple-300">main</code>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Runtime</span>
                    <span className="text-slate-300">Node</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Build Command</span>
                    <code className="text-purple-300">npm install</code>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Start Command</span>
                    <code className="text-purple-300">node server.js</code>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 w-36 flex-shrink-0">Plan</span>
                    <span className="text-green-400 font-bold">Free</span>
                  </div>
                </div>
              </UICallout>
              <p className="text-slate-400 text-sm">Scroll down and click <strong className="text-slate-300">&quot;Create Web Service&quot;</strong>. Render will start building — this takes about 2 minutes.</p>
            </SubStep>

            <SubStep n="d" title="Wait for the first deploy to finish">
              <p className="text-slate-400 text-sm mb-3">You&apos;ll see a log stream. Wait until you see:</p>
              <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 font-mono text-xs text-green-400">
                ✅ Proxy running — open this in your browser:<br />
                &nbsp;&nbsp;&nbsp;http://localhost:3001
              </div>
              <p className="text-slate-500 text-xs mt-2">The &quot;localhost:3001&quot; message is normal — on Render it runs on their servers, not your computer.</p>
            </SubStep>

            <Warning>The free tier sleeps after 15 minutes of no traffic. The first request after sleep takes ~30 seconds to wake up. This is normal and free. Upgrade to the $7/month plan if your team needs instant response at all times.</Warning>
          </div>
        </Step>

        {/* STEP 4 */}
        <Step n={4} title="Get your Gainsight API credentials">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <p className="text-slate-400 text-sm">You need 4 values from your Gainsight Community. Here&apos;s exactly where to find each one.</p>

            <SubStep n="a" title="Find your Client ID and Client Secret">
              <UICallout label="In Gainsight Community Control Panel">
                <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                  <li>Log in to your Gainsight Community as an admin</li>
                  <li>Click <strong>Control Panel</strong> in the top navigation (or go to <code className="bg-slate-700 px-1 rounded text-xs">yourcommunity.com/control</code>)</li>
                  <li>In the left sidebar, click <strong>Integrations</strong></li>
                  <li>Click <strong>API</strong></li>
                  <li>You will see a section called <strong>&quot;OAuth credentials&quot;</strong> or <strong>&quot;API Keys&quot;</strong></li>
                  <li>Click <strong>&quot;Create new credentials&quot;</strong> or <strong>&quot;Add application&quot;</strong></li>
                  <li>Give it a name: <code className="bg-slate-700 px-1 rounded text-xs text-purple-300">Community Publisher Agent</code></li>
                  <li>Copy the <strong>Client ID</strong> — save it somewhere</li>
                  <li>Copy the <strong>Client Secret</strong> — <span className="text-amber-300">⚠️ it is only shown once</span></li>
                </ol>
              </UICallout>
              <Warning>The Client Secret is only shown once when created. Copy it immediately and save it in a safe place (e.g. your password manager).</Warning>
            </SubStep>

            <SubStep n="b" title="Find your API Region">
              <p className="text-slate-400 text-sm mb-3">Your region depends on where your community is hosted. Use the matching URL:</p>
              <div className="space-y-2">
                {[
                  { region: 'US West (most common)', url: 'https://api2-us-west-2.insided.com' },
                  { region: 'EU West', url: 'https://api2-eu-west-1.insided.com' },
                ].map(r => (
                  <div key={r.region} className="bg-slate-800 rounded-lg p-3 flex items-center gap-3 text-sm">
                    <span className="text-slate-400 w-44 flex-shrink-0">{r.region}</span>
                    <code className="text-purple-300 text-xs">{r.url}</code>
                  </div>
                ))}
              </div>
              <Tip>If unsure, check your community URL. If it&apos;s something like <code className="bg-slate-800 px-1 rounded">community.yourcompany.com</code>, use US West. You can always change it later.</Tip>
            </SubStep>

            <SubStep n="c" title="Find your Author ID (numeric user ID)">
              <UICallout label="In Gainsight Community Control Panel">
                <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                  <li>In Control Panel, click <strong>Users</strong> in the left sidebar</li>
                  <li>Search for your own name or email</li>
                  <li>Click on your user profile</li>
                  <li>Look at the <strong>URL in your browser</strong> — it will look like:<br />
                    <code className="bg-slate-700 px-2 py-0.5 rounded text-xs text-purple-300 mt-1 inline-block">
                      .../control/users/<strong>12345</strong>/edit
                    </code>
                  </li>
                  <li>That number (<strong>12345</strong>) is your Author ID — copy it</li>
                </ol>
              </UICallout>
              <Tip>This ID tells the API which user to post articles as. Use a dedicated community manager account, not a personal one.</Tip>
            </SubStep>
          </div>
        </Step>

        {/* STEP 5 */}
        <Step n={5} title="Add environment variables in Render">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">
            <p className="text-slate-400 text-sm">Environment variables store your credentials securely on Render — they never appear in your code.</p>

            <SubStep n="a" title="Open your service environment settings">
              <UICallout label="What to click on Render">
                <ol className="text-slate-300 text-sm space-y-1.5 list-decimal list-inside">
                  <li>Go to <strong>render.com</strong> → click on your <strong>community-publisher</strong> service</li>
                  <li>Click the <strong>&quot;Environment&quot;</strong> tab in the top navigation</li>
                  <li>You will see a section called <strong>&quot;Environment Variables&quot;</strong></li>
                  <li>Click <strong>&quot;Add Environment Variable&quot;</strong> for each variable below</li>
                </ol>
              </UICallout>
            </SubStep>

            <SubStep n="b" title="Add these 4 required variables">
              <div className="space-y-3">
                {[
                  {
                    key: 'INSIDED_CLIENT_ID',
                    value: 'Paste your Client ID from Step 4a',
                    required: true,
                    note: 'The long alphanumeric string from Gainsight API credentials'
                  },
                  {
                    key: 'INSIDED_CLIENT_SECRET',
                    value: 'Paste your Client Secret from Step 4a',
                    required: true,
                    note: 'Keep this secret — treat it like a password'
                  },
                  {
                    key: 'INSIDED_REGION',
                    value: 'https://api2-us-west-2.insided.com',
                    required: true,
                    note: 'Use the region URL from Step 4b that matches your community'
                  },
                  {
                    key: 'INSIDED_AUTHOR_ID',
                    value: 'Your numeric user ID from Step 4c',
                    required: true,
                    note: 'Numbers only, e.g. 12345'
                  },
                  {
                    key: 'ANTHROPIC_API_KEY',
                    value: 'sk-ant-... (from console.anthropic.com)',
                    required: false,
                    note: 'Only needed for AI article generation. Translation works without it.'
                  },
                ].map(v => (
                  <div key={v.key} className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-purple-300 font-bold text-sm">{v.key}</code>
                      {v.required
                        ? <span className="bg-red-900/50 text-red-400 text-xs px-2 py-0.5 rounded-full">Required</span>
                        : <span className="bg-slate-700 text-slate-400 text-xs px-2 py-0.5 rounded-full">Optional</span>}
                    </div>
                    <div className="text-slate-400 text-xs mb-1">Value: <span className="text-slate-300">{v.value}</span></div>
                    <div className="text-slate-500 text-xs">{v.note}</div>
                  </div>
                ))}
              </div>
            </SubStep>

            <SubStep n="c" title="Save and redeploy">
              <UICallout label="Final step on Render">
                <ol className="text-slate-300 text-sm space-y-1.5 list-decimal list-inside">
                  <li>After adding all variables, click <strong>&quot;Save Changes&quot;</strong></li>
                  <li>Render will automatically trigger a new deploy</li>
                  <li>Wait ~1–2 minutes for the deploy to complete</li>
                  <li>You will see <strong>&quot;Live&quot;</strong> with a green dot when ready</li>
                </ol>
              </UICallout>
            </SubStep>
          </div>
        </Step>

        {/* STEP 6 */}
        <Step n={6} title="Open your app and start publishing">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 space-y-4">

            <SubStep n="a" title="Open your app URL">
              <p className="text-slate-400 text-sm mb-3">In your Render dashboard, you will see your service URL at the top of the page:</p>
              <div className="bg-slate-800 rounded-xl p-3 font-mono text-sm text-purple-300">
                https://community-publisher.onrender.com
              </div>
              <p className="text-slate-500 text-xs mt-2">The exact URL depends on your service name. Click it or copy it into your browser.</p>
            </SubStep>

            <SubStep n="b" title="Connect to your community">
              <UICallout label="On the Connect screen (Step 1 of the app)">
                <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                  <li>Select your <strong>API Region</strong> from the dropdown — choose the region matching your community</li>
                  <li>Enter your <strong>Client ID</strong> in the first field</li>
                  <li>Enter your <strong>Client Secret</strong> in the second field</li>
                  <li>Enter your <strong>Author ID</strong> (the numeric ID from Step 4c)</li>
                  <li>Click <strong>&quot;Connect &amp; Authenticate&quot;</strong></li>
                  <li>The header badge will change to <strong className="text-green-400">&quot;✓ Connected&quot;</strong> — you&apos;re in!</li>
                </ol>
              </UICallout>
              <Tip>Bookmark this URL for your whole team. Each person enters the credentials on the Connect screen — credentials are not stored permanently, so each session starts fresh.</Tip>
            </SubStep>

            <SubStep n="c" title="Write and publish your first article">
              <UICallout label="Using the app — Step by step">
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-purple-300 font-bold mb-1">✦ AI Generation (optional)</div>
                    <p className="text-slate-400 text-xs">Type a topic in the purple &quot;Write with AI&quot; box and click Generate. The AI will write a full article for you. Requires <code className="bg-slate-700 px-1 rounded">ANTHROPIC_API_KEY</code>.</p>
                  </div>
                  <div>
                    <div className="text-purple-300 font-bold mb-1">⬇ Import from URL</div>
                    <p className="text-slate-400 text-xs">Paste any community article URL into the import field and click Import. The article content will be pulled in automatically, preserving all formatting, tables, and images.</p>
                  </div>
                  <div>
                    <div className="text-purple-300 font-bold mb-1">✏️ Write manually</div>
                    <p className="text-slate-400 text-xs">Use the rich text editor to write your article. Supports headings, bold, lists, links, images, and tables.</p>
                  </div>
                  <div>
                    <div className="text-purple-300 font-bold mb-1">🌍 Select languages</div>
                    <p className="text-slate-400 text-xs">On the Publish screen, select all languages you want. The app auto-translates using Google Translate (free, no API key needed). All 8 languages can be published in one click.</p>
                  </div>
                  <div>
                    <div className="text-purple-300 font-bold mb-1">🚀 Publish or save as draft</div>
                    <p className="text-slate-400 text-xs">Select a community section from the dropdown. Toggle &quot;Save as draft&quot; if you want to review before publishing. Click the publish button — each language is posted separately and you get direct links to each article.</p>
                  </div>
                </div>
              </UICallout>
            </SubStep>
          </div>
        </Step>

        {/* Troubleshooting */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6">🔧 Troubleshooting</h2>
          <div className="space-y-4">
            {[
              {
                problem: 'App takes 30+ seconds to load',
                solution: 'Normal on the free plan — Render sleeps inactive services. The first visit after a period of inactivity wakes it up. Subsequent requests are instant.'
              },
              {
                problem: '"Auth failed" or "Invalid credentials" error',
                solution: 'Double-check your Client ID and Client Secret in the Connect screen. Make sure there are no extra spaces. If the secret was only shown once and you lost it, create a new API credential in Gainsight Control Panel.'
              },
              {
                problem: 'Categories dropdown is empty',
                solution: 'Click "Refresh from API" next to the Community Section dropdown. If still empty, enter your Category ID manually — find it in Gainsight Control Panel → Content → Categories → click a category and check the URL.'
              },
              {
                problem: 'Translation shows garbled text',
                solution: 'This can happen with very long articles. Try splitting the article into smaller sections and translating each separately.'
              },
              {
                problem: 'Import from URL shows "Could not locate article body"',
                solution: 'The page may require login or use a custom layout. Instead, view the article, select all text (Ctrl+A), copy, and paste it into the editor manually.'
              },
              {
                problem: 'Environment variables not working after adding them',
                solution: 'Make sure you clicked "Save Changes" in Render and waited for the redeploy to finish (look for the green "Live" status before testing).'
              },
            ].map(item => (
              <div key={item.problem} className="bg-slate-900 border border-slate-700 rounded-xl p-5">
                <div className="text-red-400 text-sm font-bold mb-2">❌ {item.problem}</div>
                <div className="text-slate-300 text-sm">✅ {item.solution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Done */}
        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/40 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">🚀</div>
          <h2 className="text-2xl font-bold mb-2">You&apos;re all set!</h2>
          <p className="text-slate-300 text-sm mb-6">Your team can now write, translate into 8 languages, and publish articles directly from the web app.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/agents/community-publisher" className="bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              ← Back to agent page
            </a>
            <a href="mailto:support@agentify.dev" className="border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-purple-300 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Contact support
            </a>
          </div>
          <p className="text-slate-600 text-xs mt-4">Need help? Email support@agentify.dev — we respond within 24 hours.</p>
        </div>

      </div>
    </div>
  )
}
