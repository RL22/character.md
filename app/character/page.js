import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import Link from 'next/link'

export default async function CharacterPage() {
  const characterPath = path.join(process.cwd(), 'character.md')
  const characterContent = fs.readFileSync(characterPath, 'utf-8')
  const htmlContent = await marked(characterContent)

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
