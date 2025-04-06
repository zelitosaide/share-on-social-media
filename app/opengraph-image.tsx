import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
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
          fontSize: 72,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: "#0070f3",
        }}
      >
        Dynamic OG Blog by zas
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#444",
          textAlign: "center",
        }}
      >
        Creating dynamic social media images with Next.js
      </div>
    </div>,
    {
      ...size,
    },
  )
}

