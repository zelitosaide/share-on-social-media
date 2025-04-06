"use client"

import type React from "react"

import { Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

type SocialPlatform = "twitter" | "facebook" | "linkedin" | "whatsapp"

interface SocialShareProps {
  url: string
  title?: string
  summary?: string
  platforms?: SocialPlatform[]
  className?: string
}

export function SocialShareButtons({
  url,
  title = "",
  summary = "",
  platforms = ["twitter", "facebook", "linkedin", "whatsapp"],
  className = "",
}: SocialShareProps) {
  // Make sure we have the full URL
  const fullUrl = url.startsWith("http") ? url : `https://www.doxample.com${url}`

  const shareOnPlatform = (platform: SocialPlatform) => {
    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`
        break
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${fullUrl}`)}`
        break
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {platforms.includes("twitter") && (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => shareOnPlatform("twitter")}
        >
          <Twitter className="w-4 h-4" />
          <span className="sr-only md:not-sr-only md:inline-block">Twitter</span>
        </Button>
      )}

      {platforms.includes("facebook") && (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => shareOnPlatform("facebook")}
        >
          <Facebook className="w-4 h-4" />
          <span className="sr-only md:not-sr-only md:inline-block">Facebook</span>
        </Button>
      )}

      {platforms.includes("linkedin") && (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => shareOnPlatform("linkedin")}
        >
          <Linkedin className="w-4 h-4" />
          <span className="sr-only md:not-sr-only md:inline-block">LinkedIn</span>
        </Button>
      )}

      {platforms.includes("whatsapp") && (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700"
          onClick={() => shareOnPlatform("whatsapp")}
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="sr-only md:not-sr-only md:inline-block">WhatsApp</span>
        </Button>
      )}
    </div>
  )
}

// Custom WhatsApp icon component
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

