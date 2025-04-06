import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">Dynamic OG Image Generator</h1>
      <p className="text-xl mb-8 max-w-2xl">
        This example demonstrates how to generate dynamic Open Graph images for your Next.js blog posts.
      </p>
      <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
        View Blog Posts
      </Link>
    </div>
  )
}

