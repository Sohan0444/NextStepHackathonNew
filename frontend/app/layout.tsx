import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🪞Mind-Mirror',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#B2F5EA] text-black">{children}</body>
    </html>
  )
}
