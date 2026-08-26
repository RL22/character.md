/** @type {import('next').NextConfig} */

// The markdown docs app is published under <site root>/docs on GitHub Pages,
// e.g. https://rl22.github.io/character.md/docs. Set BASE_PATH in CI to that
// prefix. Left empty for `next dev`, so local development still serves at /.
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
}

module.exports = nextConfig
