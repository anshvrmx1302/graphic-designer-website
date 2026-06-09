"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingElements } from "@/components/floating-elements"
import { WorkMedia } from "@/components/work-media"
import { getNextWork, getWorkBySlug } from "@/lib/works"
import { siteConfig } from "@/lib/site-config"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getWorkBySlug(slug)
  const nextProject = project ? getNextWork(slug) : null

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl text-foreground">
            Project not found
          </h1>
          <Link href="/works" className="text-primary hover:underline">
            Back to all works
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <CursorFollower />
      <FloatingElements />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 px-6 py-4 backdrop-blur-md md:px-12 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/works"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">All works</span>
            </Link>
          </motion.div>

          <Link
            href="/"
            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
          >
            Ansh Verma
          </Link>

          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            whileHover={{ y: -2 }}
          >
            Get in touch
          </motion.a>
        </nav>
      </motion.header>

      <section className="relative flex min-h-[70vh] items-end px-6 pb-12 pt-32 md:px-12 lg:px-24">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`}
        />

        <div className="relative z-10 grid w-full gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap gap-3"
            >
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                {project.category}
              </span>
              <span className="rounded-full bg-border/50 px-4 py-2 text-sm text-muted-foreground">
                {project.year}
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 font-serif text-5xl text-foreground md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.subtitle}
            </motion.p>

            <motion.p
              className="mt-6 max-w-xl text-foreground/85"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.summary}
            </motion.p>
          </div>

          <motion.div
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${project.color}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <WorkMedia
              media={Array.isArray(project.media) ? project.media[0] : project.media}
              title={project.title}
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border/30 px-6 py-16 md:px-12 lg:px-24">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { label: "Client", value: project.client },
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="mb-2 text-sm text-muted-foreground">{item.label}</p>
              <p className="text-lg text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-sm uppercase tracking-wider text-primary">
              The challenge
            </h2>
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-4 text-sm uppercase tracking-wider text-primary">
              The approach
            </h2>
            <p className="text-xl leading-relaxed text-foreground md:text-2xl">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        {Array.isArray(project.media) && project.media.length > 1 ? (
          <motion.div
            className={`relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br ${project.color} aspect-video`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <WorkMedia media={project.media[1]} title={project.title} imageClassName="object-contain bg-card" />
          </motion.div>
        ) : (
          <>
            <motion.div
              className={`relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br ${project.color} aspect-auto min-h-[900px]`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <WorkMedia media={project.media} title={project.title} imageClassName="object-contain bg-card w-full h-full" />
            </motion.div>

            {project.id === "cafe-day" && (
              <motion.div
                className="relative mt-8 overflow-hidden rounded-3xl border border-border/50 bg-card/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[16/10]">
                  <WorkMedia
                    media={{
                      type: "image",
                      src: "/services/brand-identity/cafe-day.png",
                    }}
                    title="Cafe Day brand board"
                    imageClassName="object-contain bg-card"
                  />
                </div>
              </motion.div>
            )}

            {project.id === "smartlayers" && (
              <motion.div
                className="relative mt-8 overflow-hidden rounded-3xl border border-border/50 bg-card/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[16/10]">
                  <WorkMedia
                    media={{
                      type: "image",
                      src: "/services/brand-identity/smartlayers.png",
                    }}
                    title="SmartLayers brand board"
                    imageClassName="object-contain bg-card"
                  />
                </div>
              </motion.div>
            )}
          </>
        )}
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <motion.h2
          className="mb-8 text-sm uppercase tracking-wider text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Project highlights
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {project.highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              className="rounded-2xl border border-border/50 bg-card/50 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "color-mix(in oklch, var(--primary) 30%, transparent)",
              }}
            >
              <p className="text-lg text-foreground">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {nextProject && (
        <section className="border-t border-border/30 px-6 py-24 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm text-muted-foreground">Next project</p>
            <Link
              href={`/works/${nextProject.id}`}
              className="group inline-flex items-center gap-4"
            >
              <motion.h3
                className="font-serif text-4xl text-foreground transition-colors group-hover:text-primary md:text-6xl"
                whileHover={{ x: 10 }}
              >
                {nextProject.title}
              </motion.h3>
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20"
                whileHover={{ scale: 1.1, rotate: 45 }}
              >
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </motion.div>
            </Link>
          </motion.div>
        </section>
      )}

      <footer className="border-t border-border/30 px-6 py-8 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ansh Verma. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Email", href: `mailto:${siteConfig.email}` },
              { label: "Instagram", href: siteConfig.social.instagram },
              { label: "LinkedIn", href: siteConfig.social.linkedin },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                whileHover={{ y: -2 }}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
