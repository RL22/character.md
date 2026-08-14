// Assembles the published GitHub Pages site from the two sources in this repo:
//
//   site/            <- project-page/index.html   (marketing landing page + download form)
//   site/assets/     <- skills/character-md/assets (images the landing page renders)
//   site/docs/       <- out/                      (Next.js markdown viewer, built with BASE_PATH)
//   site/.nojekyll                                (stop Pages from stripping _next/)
//
// Run after `next build`. See .github/workflows/pages.yml.

import { cp, mkdir, rm, writeFile, readdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const site = path.join(root, 'site')

const landingPage = path.join(root, 'project-page', 'index.html')
const assetsDir = path.join(root, 'skills', 'character-md', 'assets')
const nextExport = path.join(root, 'out')

for (const required of [landingPage, assetsDir, nextExport]) {
  if (!existsSync(required)) {
    throw new Error(`assemble-site: missing ${path.relative(root, required)}`)
  }
}

await rm(site, { recursive: true, force: true })
await mkdir(site, { recursive: true })

await cp(landingPage, path.join(site, 'index.html'))
await cp(assetsDir, path.join(site, 'assets'), { recursive: true })
await cp(nextExport, path.join(site, 'docs'), { recursive: true })

// GitHub Pages runs Jekyll by default, which deletes every path beginning with
// an underscore -- including Next's _next/ directory. This file disables it.
await writeFile(path.join(site, '.nojekyll'), '')

// Git LFS pointers are ~130 byte text files. If checkout ran without lfs:true
// they would deploy in place of the real images, so fail loudly instead.
const pointers = []
for (const entry of await readdir(path.join(site, 'assets'))) {
  const file = path.join(site, 'assets', entry)
  const { size } = await stat(file)
  if (size < 1024) pointers.push(`${entry} (${size} bytes)`)
}
if (pointers.length) {
  throw new Error(
    `assemble-site: these assets look like unresolved Git LFS pointers, ` +
      `not images -- check out with lfs: true\n  ${pointers.join('\n  ')}`
  )
}

console.log(`assemble-site: built ${path.relative(root, site)}/`)
