import Navbar from '@/components/Navbar'
import '../styles/globals.css'
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
      <body className='bg-slate-100'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
