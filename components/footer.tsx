"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  const socialLinks = [
    { label: "Email", href: `mailto:${siteConfig.email}` },
    { label: "Phone", href: siteConfig.phoneHref },
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
  ]

  const techStack = ["Next.js", "Tailwind", "v0"]

  return (
    <motion.footer 
      className="py-12 px-6 md:px-12 border-t border-border/30"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left - Tech stack */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Website made using:</span>
            <div className="flex items-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="px-2 py-1 rounded bg-card/50 border border-border/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, borderColor: "color-mix(in oklch, var(--primary) 30%, transparent)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right - Copyright */}
          <motion.div 
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {new Date().getFullYear()} Ansh Verma. All rights reserved.
          </motion.div>
        </motion.div>

        {/* Bottom links */}
        <motion.div 
          className="mt-8 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-6 text-sm">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                variants={linkVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -3, color: "var(--primary)" }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Based in India
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
