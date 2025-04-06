import { getAllPosts } from "@/app/lib/data"
import Link from "next/link"

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

