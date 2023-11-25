import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DarkModeToggle from '@/components/DarkModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-800`}>{children}</body>
    </html>
  )
}
