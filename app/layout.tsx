import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '../lib/auth/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialMesh - Professional Networking',
  description: 'Automated professional networking platform powered by LinkedIn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 