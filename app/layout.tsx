import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DIY-Website',
  description: 'A fully customise-able website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
