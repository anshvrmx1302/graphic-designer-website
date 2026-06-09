"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { siteConfig } from "@/lib/site-config"

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: String(siteConfig.experienceYears), label: "Years Experience" },
  { number: "15+", label: "Awards Won" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const skills = ["Adobe Creative Suite", "Figma", "Brand Strategy", "Typography", "Illustration", "Motion Graphics"]

  return (
    <section id="about" className="relative py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About text */}
          <div>
            <motion.span 
              className="text-xs tracking-widest text-primary uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.span>
            <motion.h2 
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Crafting visual stories that{" "}
              <motion.span 
                className="text-primary italic font-[var(--font-display)]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                resonate
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I&apos;m Ansh Verma, a passionate graphic designer with {siteConfig.experienceYears} years of experience 
                creating compelling visual identities and design systems for brands worldwide.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My approach combines strategic thinking with artistic execution, ensuring every 
                design not only looks stunning but also serves its intended purpose effectively.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                From brand identity to packaging design, I specialize in translating complex 
                ideas into clear, beautiful visual communications that connect with audiences.
              </motion.p>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  variants={itemVariants}
                  className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "color-mix(in oklch, var(--primary) 20%, transparent)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card/30 border border-border/30 text-center hover:border-primary/20 transition-colors group cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                custom={index}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary font-[var(--font-display)]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
