// Mock blog post data
type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
}

const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs-1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js😅",
    content:
      "Next.js is a React framework that enables functionality such as server-side rendering and static site generation...",
    date: "2023-05-12",
    image: "https://med.uem.mz/api/uploads/news/images/abc/1740776198556-25444266-Defesa%20de%20Mirna_2.jpg"
  },
  {
    slug: "dynamic-og-images-1",
    title: "Creating Dynamic OG Images",
    excerpt: "Learn how to generate dynamic Open Graph images for your Next.js app",
    content: "Open Graph images are important for social media sharing and SEO...",
    date: "2023-06-24",
    image: "https://med.uem.mz/api/uploads/news/images/abc/1741769989527-714537847-2025_Edital_Curso%20de%20Virologia_Abordagem%20OneHealth_Prorroga%C3%83%C2%83%C3%82%C2%A7%C3%83%C2%83%C3%82%C2%A3o.jpg"
  },
  {
    slug: "server-components-1",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they work in Next.js",
    content: "Server Components allow you to render components on the server...",
    date: "2023-07-15",
    image: "https://med.uem.mz/api/uploads/news/images/abc/1743538323041-896660473-Defesa%20de%20Castro2.jpg"
  },
]

export async function getPost(slug: string): Promise<Post | undefined> {
  // In a real app, this would fetch from a database or API
  return posts.find((post) => post.slug === slug)
}

export async function getAllPosts(): Promise<Post[]> {
  return posts
}

