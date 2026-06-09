"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { WorkMedia as WorkMediaType } from "@/lib/works"

type WorkMediaProps = {
  media: WorkMediaType
  title: string
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function WorkMedia({
  media,
  title,
  className,
  imageClassName,
  priority = false,
}: WorkMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {})
  }, [media])

  const mediaToDisplay = Array.isArray(media) ? media[0] : media

  if (mediaToDisplay.type === "video") {
    return (
      <video
        ref={videoRef}
        src={mediaToDisplay.src}
        className={cn("h-full w-full object-cover", className)}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={title}
      />
    )
  }

  if (!mediaToDisplay.src) {
    return <div className={cn("h-full w-full bg-muted", className)} />
  }

  if (mediaToDisplay.src.startsWith("/api/")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={mediaToDisplay.src}
        alt={title}
        className={cn("h-full w-full object-cover", className, imageClassName)}
      />
    )
  }

  return (
    <Image
      src={mediaToDisplay.src}
      alt={title}
      fill
      className={cn("object-cover", imageClassName)}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
    />
  )
}
