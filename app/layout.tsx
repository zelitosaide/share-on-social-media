import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Dynamic OG Image Blog",
    template: "%s | Dynamic OG Image Blog",
  },
  description: "A blog demonstrating dynamic Open Graph image generation with Next.js",
  metadataBase: new URL("https://www.doxample.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.doxample.com",
    siteName: "Dynamic OG Blog AAABBB",
    images: [
      {
        url: "/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamic OG Image Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Dynamic OG Blog
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto">{children}</main>
        <footer className="border-t mt-12">
          <div className="max-w-6xl mx-auto p-4 text-center text-gray-500">
            © {new Date().getFullYear()} Dynamic OG Image Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'