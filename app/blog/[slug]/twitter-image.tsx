// Import the same functionality from opengraph-image.tsx
// Twitter cards often have different dimensions
import { ImageResponse } from "next/og"
import { getPost } from "@/app/lib/data"

// Twitter image is typically square or 2:1 ratio
export const size = {
  width: 1200,
  height: 600, // Twitter prefers 2:1 ratio
}

export const contentType = "image/png"

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Post not found
      </div>,
      {
        ...size,
      },
    )
  }

  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to bottom right, #0070f3, #00a2ff)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 56,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        {post.title}
      </div>
      <div
        style={{
          fontSize: 24,
          textAlign: "center",
          opacity: 0.9,
        }}
      >
        Dynamic OG Blog
      </div>
    </div>,
    {
      ...size
    },
  )
}

