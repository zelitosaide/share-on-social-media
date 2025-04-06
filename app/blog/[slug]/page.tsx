import { getPost } from "@/app/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SocialShareButtons } from "@/app/components/social-share-buttons"

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  // Define canonical URL
  const canonicalUrl = `https://www.doxample.com/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: canonicalUrl,
      siteName: "Dynamic OG Blog",
      locale: "en_US",
      authors: ["Your Name"],
      images: [
        {
          url: `${canonicalUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@yourtwitterhandle",
      images: [`${canonicalUrl}/twitter-image`],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  // Format date for display
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Your Name",
    },
    publisher: {
      "@type": "Organization",
      name: "Dynamic OG Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://www.doxample.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.doxample.com/blog/${post.slug}`,
    },
  }

  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      {/* Add JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-4xl font-bold mb-4">zas:{post.title}</h1>
      <p className="text-gray-500 mb-8">{formattedDate}</p>
      <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
      <div className="prose max-w-none">{post.content}</div>

      {/* Social sharing buttons */}
      <div className="mt-12 pt-6 border-t">
        <h2 className="text-xl font-semibold mb-4">Share this post</h2>
        <SocialShareButtons
          url={`/blog/${post.slug}`}
          title={post.title}
          summary={post.excerpt}
          platforms={["twitter", "facebook", "linkedin", "whatsapp"]}
        />
      </div>
    </article>
  )
}

