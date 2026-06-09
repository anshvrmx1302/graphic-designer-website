"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export type FolderButtonProps = {
  href?: string
  className?: string
}

const FRONT_REST_DEG = -18
const FRONT_HOVER_DEG = -32
const FRONT_DURATION = 0.65
const elasticEase = [0.34, 1.45, 0.64, 1] as const

const frontFlapMotion = {
  rest: {
    rotateX: FRONT_REST_DEG,
    transition: { duration: FRONT_DURATION, ease: elasticEase },
  },
  hover: {
    rotateX: FRONT_HOVER_DEG,
    transition: { duration: FRONT_DURATION, ease: elasticEase },
  },
}

export function FolderButton({
  href = "/works",
  className,
}: FolderButtonProps) {
  const reduceMotion = useReducedMotion()
  const animated = !reduceMotion

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#3b7dff]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl",
        className
      )}
      aria-label="Work — view all projects"
    >
      <motion.div
        className="folder-container"
        style={{ perspective: 1400 }}
        initial="rest"
        whileHover={animated ? "hover" : undefined}
        animate="rest"
      >
        <div className="folder-plate" aria-hidden />

        <div className="folder-content">
          <Image
            src="/services/folder/folder-icon-back.png"
            alt=""
            width={782}
            height={520}
            className="folder-back"
            priority
          />

          <motion.div
            className="folder-flap"
            variants={animated ? frontFlapMotion : undefined}
          >
            <div className="folder-flap-inner" aria-hidden>
              <span className="folder-label">Work</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
