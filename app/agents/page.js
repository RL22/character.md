import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import Link from 'next/link'

export default async function AgentsPage() {
  const agentsPath = path.join(process.cwd(), 'AGENTS.md')
  const agentsContent = fs.readFileSync(agentsPath, 'utf-8')
  const htmlContent = await marked(agentsContent)

  return (
    <>
      <nav>
        <div className="container">
          <Link href="/">
            <strong>Character.md</strong>
          </Link>
          <div>
            <Link href="/">README</Link>
            <Link href="/agents">AGENTS</Link>
            <Link href="/character">Character.md</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  )
}
