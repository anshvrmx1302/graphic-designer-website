"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function Header() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/" 
            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            Ansh Verma
          </Link>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8">
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </motion.li>
          
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              onClick={copyEmail}
              className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {copied && (
                <motion.span 
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-primary whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Copied!
                </motion.span>
              )}
            </motion.button>
          </motion.li>
          
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
          </motion.li>
        </ul>

        <ul className="flex items-center gap-4">
          {[
            { label: "Email", href: `mailto:${siteConfig.email}` },
            { label: "IG", href: siteConfig.social.instagram },
            { label: "in", href: siteConfig.social.linkedin },
          ].map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <motion.a 
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
