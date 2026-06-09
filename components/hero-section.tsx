"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const firstName = "Ansh".split("")
  const lastName = "Verma".split("")

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Background large text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        style={{ y: y1, opacity }}
      >
        <h1 className="text-[25vw] md:text-[18vw] font-bold text-primary/[0.03] whitespace-nowrap font-serif tracking-tighter">
          ANSH VERMA
        </h1>
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ y: y2 }}
      >
        {/* Title tag */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">
            Brand & Visual Design Specialist
          </span>
        </motion.div>

        {/* Main name with image integration like reference */}
        <div className="mb-8">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-[0.85]"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-foreground font-serif italic inline-flex">
              {firstName.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block hover:text-primary transition-colors duration-300 cursor-default"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            
            {/* Profile image circle in between */}
            <motion.span 
              className="relative inline-block mx-2 md:mx-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-primary/30 align-middle"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.span>

            <span className="text-primary font-serif inline-flex">
              {lastName.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block hover:text-foreground transition-colors duration-300 cursor-default"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-sm text-muted-foreground max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Freelance Graphic Designer
          </motion.p>
        </div>

        {/* Copy email - styled like reference */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            onClick={copyEmail}
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.span>
            <span className="font-medium">
              {copied ? "Email Copied!" : "Copy my Email"}
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Role description - positioned right with special styling */}
      <motion.div 
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 max-w-xs text-right hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{ y: y2 }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium block mb-1">Graphic Designer</span>
          Creating visual stories that resonate
        </p>
        
        {/* Vertical decorative lines like reference */}
        <motion.div 
          className="mt-6 flex justify-end gap-1"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div 
            className="w-0.5 h-16 bg-primary/40"
            animate={{ scaleY: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-0.5 h-16 bg-primary/60"
            animate={{ scaleY: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div 
            className="w-0.5 h-16 bg-primary/80"
            animate={{ scaleY: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.span 
          className="text-xs text-muted-foreground tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          scroll
        </motion.span>
        <motion.div
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5"
        >
          <motion.div 
            className="w-1 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
