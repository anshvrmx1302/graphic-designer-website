"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FolderButton } from "@/components/folder-button"

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const values = [
    "I bring a premium and unique visual direction that makes your brand stand out.",
    "I care about the craft, from concept to final delivery.",
    "I create scalable design systems that keep your brand consistent.",
    "I align your goals with my experience to make the right design decisions.",
  ]

  return (
    <section
      id="work-folder"
      className="relative py-32 px-6 md:px-12 overflow-x-hidden"
      ref={ref}
    >
      {/* Large background text - animated */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-[25vw] font-bold text-primary/5 whitespace-nowrap tracking-tight">
          Work
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            <motion.span 
              className="text-muted-foreground inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Great design
            </motion.span>
            <br />
            <motion.span 
              className="text-primary italic font-[var(--font-display)] inline-block"
              initial={{ opacity: 0, y: 30, rotateX: -45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -45 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              takes time
            </motion.span>
          </h2>
          <motion.p 
            className="mt-6 text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            and working with me ensures every detail is crafted with intention
          </motion.p>
        </motion.div>

        {/* Value propositions */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border/30 hover:border-primary/20 transition-colors group cursor-pointer"
              whileHover={{ 
                x: 8, 
                backgroundColor: "color-mix(in oklch, var(--card) 50%, transparent)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                whileHover={{ scale: 1.2, backgroundColor: "color-mix(in oklch, var(--primary) 40%, transparent)" }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.span>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-20 mt-14 flex justify-center pb-8">
          <FolderButton href="/works" />
        </div>
      </div>
    </section>
  )
}
