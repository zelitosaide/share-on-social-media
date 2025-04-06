import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the blog post you're looking for doesn't exist or may have been moved.
      </p>
      <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to Blog
      </Link>
    </div>
  )
}

