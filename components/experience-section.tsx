"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"

export function ExperienceSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], [100, -100])

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Statement */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
              <motion.span 
                className="text-foreground inline-block"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
              >
                {siteConfig.experienceYears} years
              </motion.span>
              <br />
              <motion.span 
                className="text-muted-foreground inline-block"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1}
              >
                making brands
              </motion.span>
              <br />
              {/* Click pill button like reference */}
              <motion.span
                className="inline-flex items-center"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
              >
                <motion.button
                  className="relative px-6 py-2 rounded-full bg-primary/90 text-background font-medium text-2xl md:text-3xl lg:text-4xl mr-3 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    className="relative z-10"
                    animate={isHovered ? { y: [-2, 2, -2] } : {}}
                    transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
                  >
                    stand out
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                    animate={isHovered ? { x: ["0%", "100%", "0%"] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
                <span className="text-muted-foreground">and</span>
              </motion.span>
              <br />
              <motion.span 
                className="text-primary font-serif italic inline-block"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3}
              >
                connect deeply
              </motion.span>
            </h2>
            
            <motion.div 
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="#about" 
                className="group flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span>Who is curious?</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </motion.a>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">scroll</span>
            </motion.div>
          </div>

          {/* Right side - 3D floating orbs like reference */}
          <div className="relative h-80 lg:h-[500px]">
            {/* Main large orb */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ x }}
            >
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/5 to-transparent backdrop-blur-sm border border-primary/10"
                animate={{ 
                  y: [-15, 15, -15],
                  rotateZ: [0, 5, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  boxShadow: "inset -30px -30px 60px rgba(0,0,0,0.1), inset 30px 30px 60px rgba(255,255,255,0.05)"
                }}
              >
                {/* Inner shine */}
                <motion.div 
                  className="absolute top-4 left-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Medium orb */}
            <motion.div 
              className="absolute top-10 right-10 w-24 h-24 md:w-32 md:h-32"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent border border-primary/20"
                animate={{ 
                  y: [10, -15, 10],
                  x: [-5, 10, -5],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.1), inset 15px 15px 30px rgba(255,255,255,0.05)"
                }}
              />
            </motion.div>

            {/* Small orb */}
            <motion.div 
              className="absolute bottom-16 left-16 w-16 h-16 md:w-20 md:h-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30"
                animate={{ 
                  y: [-8, 12, -8],
                  x: [5, -8, 5]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Triangle shape like reference */}
            <motion.div 
              className="absolute bottom-24 right-24"
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -45 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20"
                animate={{ 
                  y: [5, -10, 5],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="50,10 90,90 10,90" 
                    fill="none" 
                    stroke="color-mix(in oklch, var(--primary) 40%, transparent)" 
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
