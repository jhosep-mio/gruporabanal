'use client'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { AuthProvider } from '@/public/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/assets/estructura/icono.png" sizes="any" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
