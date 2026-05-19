import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import Link from 'next/link'

export default async function Home() {
  const readmePath = path.join(process.cwd(), 'README.md')
  const readmeContent = fs.readFileSync(readmePath, 'utf-8')
  const htmlContent = await marked(readmeContent)

  const pages = [
    { name: 'README', href: '/' },
    { name: 'AGENTS', href: '/agents' },
    { name: 'Character.md', href: '/character' },
  ]

  return (
    <>
      <nav>
        <div className="container">
          <strong>Character.md</strong>
          <div>
            {pages.map(page => (
              <Link key={page.href} href={page.href}>
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="container">
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  )
}
