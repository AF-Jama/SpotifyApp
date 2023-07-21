import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthContextProvider from '@/Contexts/authContext/authContextProvider';

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
      <body className={`${inter.className} min-h-screen bg-[#060125] antialiased pt-20`}>
          {children} {/* children page props */}
      </body>
    </html>
  )
}