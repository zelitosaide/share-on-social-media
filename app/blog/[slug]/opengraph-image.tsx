import { ImageResponse } from "next/og"
import { getPost } from "@/app/lib/data"

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
// export default async function Image({ params }: { params: { slug: string } }) {
//   const post = await getPost(params.slug)

//   if (!post) {
//     return new ImageResponse(
//       <div
//         style={{
//           fontSize: 64,
//           background: "white",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         Post not found
//       </div>,
//       {
//         ...size
//       },
//     )
//   }

//   // Format date
//   const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   })

//   // Calculate reading time (rough estimate)
//   const wordsPerMinute = 200
//   const wordCount = post.content.split(/\s+/).length
//   const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute))

//   return new ImageResponse(
//     <div
//       style={{
//         fontSize: 64,
//         background: "linear-gradient(to bottom, #f0f9ff, #e6f7ff)",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "40px",
//         position: "relative",
//       }}
//     >
//       {/* Background pattern */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//           backgroundImage: "radial-gradient(circle at 25px 25px, #eee 2%, transparent 0%)",
//           backgroundSize: "50px 50px",
//           opacity: 0.3,
//         }}
//       />

//       {/* Logo/Brand */}
//       <div
//         style={{
//           display: "flex",
//           fontSize: 24,
//           fontWeight: "bold",
//           color: "#0070f3",
//           marginBottom: "20px",
//         }}
//       >
//         Dynamic OG Blog
//       </div>

//       {/* Title */}
//       <div
//         style={{
//           fontSize: 64,
//           fontWeight: "bold",
//           textAlign: "center",
//           marginBottom: "20px",
//           color: "#111",
//         }}
//       >
//         {post.title}
//       </div>

//       {/* Excerpt */}
//       <div
//         style={{
//           fontSize: 28,
//           color: "#444",
//           textAlign: "center",
//           marginBottom: "40px",
//           maxWidth: "80%",
//         }}
//       >
//         {post.excerpt}
//       </div>

//       {/* Footer with metadata */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           width: "90%",
//           borderTop: "1px solid #ddd",
//           paddingTop: "20px",
//           fontSize: 20,
//           color: "#666",
//         }}
//       >
//         <div>{formattedDate}</div>
//         <div>{readingTime} min read</div>
//       </div>
//     </div>,
//     {
//       ...size,
//     },
//   )
// }




// Image generation
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
        == My Blog ==
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





