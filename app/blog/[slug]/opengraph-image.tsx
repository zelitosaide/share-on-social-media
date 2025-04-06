import { ImageResponse } from 'next/og';
import { getPost } from '@/app/lib/data';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const post = await getPost(params.slug);
    
    if (!post) {
      return new ImageResponse(
        <div style={{ 
          fontSize: 64, 
          background: 'white', 
          width: '100%', 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          Post not found
        </div>,
        { ...size }
      );
    }
    
    // Format date
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    
    // Load the post image if it exists
    let postImage;
    if (post.image) {
      try {
        // If the image URL is absolute (starts with http)
        if (post.image.startsWith('http')) {
          postImage = await fetch(post.image).then(res => res.arrayBuffer());
        } 
        // If the image is a local path
        else {
          // Assuming the image is in the public directory
          postImage = await fetch(new URL(`../../../public${post.image}`, import.meta.url))
            .then(res => res.arrayBuffer());
        }
      } catch (error) {
        console.error('Error loading post image:', error);
        // Continue without the image if there's an error
      }
    }

    return new ImageResponse(
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to bottom, #f0f9ff, #e6f7ff)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: "radial-gradient(circle at 25px 25px, #eee 2%, transparent 0%)",
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />

        <div style={{ display: "flex", height: "100%" }}>
          {/* Content column */}
          <div style={{ 
            flex: postImage ? "60%" : "100%", 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
          }}>
            {/* Logo/Brand */}
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: "bold",
                color: "#0070f3",
                marginBottom: "20px",
              }}
            >
              Dynamic OG Blog
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 56,
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#111",
              }}
            >
              {post.title}
            </div>

            {/* Excerpt */}
            <div
              style={{
                fontSize: 24,
                color: "#444",
                marginBottom: "20px",
              }}
            >
              {post.excerpt}
            </div>

            {/* Footer with metadata */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid #ddd",
                paddingTop: "20px",
                fontSize: 20,
                color: "#666",
              }}
            >
              <div>{formattedDate}</div>
              <div>{readingTime} min read</div>
            </div>
          </div>

          {/* Image column - only shown if we have a post image */}
          {postImage && (
            <div style={{ 
              flex: "40%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              paddingLeft: "20px",
            }}>
              <img
                src={postImage as unknown as string || "/placeholder.svg"}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          )}
        </div>
      </div>,
      { ...size }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new ImageResponse(
      <div style={{ 
        fontSize: 64, 
        background: 'white', 
        width: '100%', 
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
      }}>
        Error generating image
      </div>,
      { ...size }
    );
  }
}