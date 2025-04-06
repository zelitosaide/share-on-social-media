import { ImageResponse } from "next/og"
import { getPost } from "@/app/lib/data"

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

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
    )
  }

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to bottom, #f0f9ff, #e6f7ff)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          fontWeight: "bold",
          color: "#0070f3",
          marginBottom: "20px",
        }}
      >
        == My Blog == 📀
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: "#111",
        }}
      >
        {post.title}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#444",
          textAlign: "center",
        }}
      >
        {post.excerpt}
      </div>
    </div>,
    {
      ...size,
    },
  )
}





