"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1])

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12" ref={containerRef}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Folder-style CTA card */}
        <motion.a
          href={`mailto:${siteConfig.email}`}
          className="group block relative"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          style={{ y, scale }}
        >
          {/* Main card */}
          <motion.div 
            className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 md:p-16 lg:p-20 overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              borderColor: "color-mix(in oklch, var(--primary) 40%, transparent)"
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Background gradient animation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Arrow icon */}
            <motion.div 
              className="absolute top-8 left-8 w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center border border-primary/20"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-left">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground/80 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {"Let's build"}
                <br />
                <span className="text-foreground/60">something people</span>
                <br />
                <span className="text-foreground/50">remember</span>
              </motion.h2>
              
              <motion.p 
                className="text-muted-foreground text-lg max-w-md"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                from startups to established brands.
              </motion.p>
            </div>

            {/* Let's talk hover reveal */}
            <motion.div 
              className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-end">
                <motion.span 
                  className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-primary/80 group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {"Let's talk"}
                </motion.span>
                <motion.span 
                  className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-right"
                >
                  {siteConfig.email}
                  <br />
                  {siteConfig.phone}
                </motion.span>
              </div>
            </motion.div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary/10 rounded-tr-[2.5rem]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-primary/10 rounded-bl-[2.5rem]" />
          </motion.div>

          {/* Shadow layer for depth */}
          <motion.div 
            className="absolute -bottom-2 -right-2 -left-2 h-full rounded-[2.5rem] bg-primary/5 -z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.a>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full border border-primary/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          rotate: [0, 360]
        } : { opacity: 0, scale: 0 }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.6 },
          scale: { duration: 0.5, delay: 0.6 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-14 h-14 rounded-full bg-primary/10"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: [1, 1.3, 1]
        } : { opacity: 0, scale: 0 }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.7 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </section>
  )
}
