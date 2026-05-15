# Agentify — Marketing Website

This is the **storefront and marketing website** at agentify.pages.dev. Built with Next.js 14 static export, deployed on Cloudflare Pages.

## What this project is
- Landing page listing all available AI agents
- Individual product pages per agent (features, pricing, buy button)
- Post-purchase setup guides for each agent
- No backend — pure static HTML/CSS/JS

## GitHub repo
`rbhaskarrr/agentify` (account: rohitbhaskar1991@gmail.com)

## Deployed to
Cloudflare Pages — auto-deploys on every push to `main`

## Separate from
The Community Publisher Agent product code (`rbhaskar-ai/community-publisher-server`). This website only links to Gumroad and shows setup instructions. It contains no product code.

## Tech stack
- Next.js 14 (`output: 'export'` — static only, no server)
- Tailwind CSS
- Gumroad overlay checkout (`data-gumroad-overlay-checkout="true"`)

## Key files
- `app/page.tsx` — home page / agent store
- `app/agents/community-publisher/page.tsx` — product detail page
- `app/setup/community-publisher/page.tsx` — post-purchase setup guide
- `app/layout.tsx` — loads Gumroad embed script

## Running locally
```
npm install
npm run dev
# open http://localhost:3000
```

## Adding a new agent
1. Add card to `app/page.tsx`
2. Create `app/agents/{name}/page.tsx`
3. Create `app/setup/{name}/page.tsx`
4. Create Gumroad product and update `GUMROAD_URL` constant
