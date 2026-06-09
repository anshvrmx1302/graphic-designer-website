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
        className="relative mx-auto h-[220px] w-[280px] sm:h-[240px] sm:w-[300px]"
        style={{ perspective: 1400 }}
        initial="rest"
        whileHover={animated ? "hover" : undefined}
        animate="rest"
      >
        {/* Plate so black PNG edges read on the dark page */}
        <div
          className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-[#1c2840] via-[#121a2a] to-[#0c1018] shadow-[0_24px_60px_-16px_rgba(36,86,232,0.45)] ring-1 ring-[#3b7dff]/20"
          aria-hidden
        />

        <div className="relative flex h-full w-full items-end justify-center px-3 pb-2 pt-4">
          {/* Folder body (back) — screen removes black matte */}
          <Image
            src="/folder/folder-icon-back.png"
            alt=""
            width={782}
            height={520}
            className="relative z-[10] h-[88%] w-full max-w-[260px] select-none object-contain object-bottom mix-blend-screen"
            priority
          />

          {/* Front flap — CSS matches the blue folder (replaces wrong front PNG) */}
          <motion.div
            className="pointer-events-none absolute inset-x-[10%] bottom-[6%] z-[20] h-[62%] origin-bottom [transform-style:preserve-3d]"
            variants={animated ? frontFlapMotion : undefined}
          >
            <div
              className="flex h-full w-full flex-col items-center justify-center rounded-[1.15rem] border border-[#5b8fff]/40 bg-gradient-to-b from-[#5b8fff] via-[#3b7dff] to-[#2456e8] pb-2 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),0_12px_28px_-8px_rgba(0,0,0,0.5)]"
              aria-hidden
            >
              <span
                className="font-[var(--font-display)] text-[2.6rem] font-bold italic leading-none text-[#0f2d8a] sm:text-[3rem]"
                style={{
                  textShadow:
                    "0 2px 0 rgba(255,255,255,0.2), 0 -1px 0 rgba(0,0,0,0.15)",
                }}
              >
                Work
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
