// Mock blog post data
type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
}

const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js😅",
    content:
      "Next.js is a React framework that enables functionality such as server-side rendering and static site generation...",
    date: "2023-05-12",
  },
  {
    slug: "dynamic-og-images",
    title: "Creating Dynamic OG Images",
    excerpt: "Learn how to generate dynamic Open Graph images for your Next.js app",
    content: "Open Graph images are important for social media sharing and SEO...",
    date: "2023-06-24",
  },
  {
    slug: "server-components",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they work in Next.js",
    content: "Server Components allow you to render components on the server...",
    date: "2023-07-15",
  },
]

export async function getPost(slug: string): Promise<Post | undefined> {
  // In a real app, this would fetch from a database or API
  return posts.find((post) => post.slug === slug)
}

export async function getAllPosts(): Promise<Post[]> {
  return posts
}

