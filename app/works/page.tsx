"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingElements } from "@/components/floating-elements"
import { WorkMedia } from "@/components/work-media"
import { works, worksByCategory } from "@/lib/works"
import { useRef } from "react"
import { siteConfig } from "@/lib/site-config"

const categoryOrder = [
  "Brand Identity",
  "Visual Design",
  "Packaging Design",
] as const

export default function WorksPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <main
      className="relative min-h-screen overflow-x-hidden bg-background"
      ref={containerRef}
    >
      <CursorFollower />
      <FloatingElements />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 px-6 py-4 backdrop-blur-md md:px-12 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back</span>
            </Link>
          </motion.div>

          <Link
            href="/"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            <span className="font-serif italic">Ansh</span>
            <span className="mx-1 text-primary">.</span>
            <span>Verma</span>
          </Link>

          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
            whileHover={{ y: -2 }}
          >
            Get in touch
          </motion.a>
        </nav>
      </motion.header>

      <motion.nav
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <ul className="max-h-[70vh] space-y-2 overflow-y-auto pr-2">
          {works.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.04 }}
            >
              <Link
                href={`/works/${item.id}`}
                className="block py-0.5 text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <section className="relative flex min-h-[60vh] items-center justify-center px-6 pb-12 pt-32">
        <motion.div className="max-w-4xl text-center" style={{ y }}>
          <motion.span
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio — {works.length} projects
          </motion.span>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-[0.95] text-foreground md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-muted-foreground/70">Work that spans</span>
            <br />
            <span className="font-serif italic text-primary">brand</span>
            <span className="text-muted-foreground/70">, </span>
            <span className="font-serif italic text-foreground">motion</span>
            <span className="text-muted-foreground/70"> & </span>
            <span className="font-serif italic text-primary">packaging</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A selection of projects featured on the homepage — from identity systems
            and motion reels to product packaging designed to perform on shelf and
            screen.
          </motion.p>
        </motion.div>
      </section>

      {categoryOrder.map((category) => {
        const categoryWorks = worksByCategory[category]
        if (!categoryWorks.length) return null

        return (
          <section
            key={category}
            className="border-t border-border/20 px-6 py-16 md:px-12 lg:px-24"
          >
            <motion.div
              className="mx-auto mb-12 max-w-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                {category}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                {category === "Brand Identity" && "Logos & visual systems"}
                {category === "Visual Design" && "Motion & social creative"}
                {category === "Packaging Design" && "Product & retail design"}
              </h2>
            </motion.div>

            <div className="mx-auto max-w-6xl space-y-24">
              {categoryWorks.map((project, index) => (
                <motion.article
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-5 order-2 lg:order-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <motion.h3
                            className="text-3xl font-bold text-foreground md:text-4xl"
                            whileHover={{ x: 5 }}
                          >
                            {project.title}
                          </motion.h3>
                          <p className="mt-1 text-muted-foreground">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="shrink-0 text-sm text-muted-foreground">
                          {project.year}
                        </span>
                      </div>

                      <p className="leading-relaxed text-foreground/85">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/works/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        View case study
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <Link
                      href={`/works/${project.id}`}
                      className="order-1 block lg:order-2"
                    >
                      <motion.div
                        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br ${project.color}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <WorkMedia
                          media={project.media}
                          title={project.title}
                          priority={index < 2}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )
      })}

      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <motion.div
          className="mx-auto max-w-4xl border-t border-border/20 py-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-muted-foreground">
            Have a brand, campaign, or pack design in mind?
          </p>
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-3 font-serif text-3xl text-foreground transition-colors hover:text-primary md:text-4xl"
            whileHover={{ x: 10 }}
          >
            Let&apos;s talk
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="h-8 w-8" />
            </motion.span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}
