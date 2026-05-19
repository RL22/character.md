import './globals.css'

export const metadata = {
  title: 'Character.md',
  description: 'A cross-agent skill kit for creating consistent photorealistic AI characters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
