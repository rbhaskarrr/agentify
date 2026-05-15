/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // static HTML — works on Cloudflare Pages, GitHub Pages, Netlify, S3
  images: { unoptimized: true },
  trailingSlash: true,      // Cloudflare Pages needs trailing slashes for sub-pages
};

export default nextConfig;
