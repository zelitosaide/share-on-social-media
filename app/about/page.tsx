export const metadata = {
  title: "About",
  description: "Learn about our dynamic OG image generation blog",
}

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About This Project</h1>
      <div className="prose max-w-none">
        <p>
          This project demonstrates how to generate dynamic Open Graph images for your Next.js blog posts. When your
          content is shared on social media platforms like Twitter, Facebook, or LinkedIn, these platforms will display
          a preview image that is automatically generated based on your content.
        </p>

        <h2>How It Works</h2>
        <p>
          Using Next.js's <code>ImageResponse</code> constructor from the <code>next/og</code> package, we can generate
          images on-the-fly using JSX and CSS. This allows us to create unique, branded images for each blog post that
          include the post title, excerpt, and other metadata.
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>Next.js 13+ with App Router</li>
          <li>React Server Components</li>
          <li>ImageResponse for OG image generation</li>
          <li>Custom fonts with @vercel/og</li>
        </ul>

        <h2>Learn More</h2>
        <p>
          To learn more about dynamic OG image generation in Next.js, check out the
          <a
            href="https://nextjs.org/docs/app/api-reference/functions/image-response"
            className="text-blue-600 hover:underline"
          >
            {" "}
            official documentation
          </a>
          .
        </p>
      </div>
    </div>
  )
}

