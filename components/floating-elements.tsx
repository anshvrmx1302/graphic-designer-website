"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function FloatingElements() {
  const { scrollYProgress } = useScroll()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -90])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Large glowing orb - top right */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating emerald sphere 1 - parallax */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32"
        style={{ y: y1 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/20"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Floating emerald sphere 2 - parallax */}
      <motion.div 
        className="absolute top-1/2 left-[15%] w-24 h-24"
        style={{ y: y2 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent backdrop-blur-sm border border-primary/10 shadow-xl shadow-primary/10"
          animate={{ 
            y: [20, -20, 20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Floating emerald sphere 3 - parallax */}
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-20 h-20"
        style={{ y: y3 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/20"
          animate={{ 
            y: [-15, 15, -15],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Triangle shape - rotating on scroll */}
      <motion.div 
        className="absolute top-1/3 right-[20%] w-16 h-16"
        style={{ rotate: rotate1, y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.polygon 
            points="50,10 90,90 10,90" 
            fill="none" 
            stroke="color-mix(in oklch, var(--primary) 40%, transparent)" 
            strokeWidth="2"
            className="drop-shadow-lg"
            animate={{ 
              strokeOpacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Square shape - rotating opposite */}
      <motion.div 
        className="absolute top-2/3 left-[10%] w-12 h-12"
        style={{ rotate: rotate2, y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <motion.div 
          className="w-full h-full border-2 border-primary/30 rounded-md"
          animate={{ 
            borderColor: [
              "color-mix(in oklch, var(--primary) 30%, transparent)",
              "color-mix(in oklch, var(--primary) 60%, transparent)",
              "color-mix(in oklch, var(--primary) 30%, transparent)",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Small dots pattern - staggered animation */}
      <motion.div 
        className="absolute top-1/2 right-10 flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Bottom glow - pulsing */}
      <motion.div 
        className="absolute -bottom-40 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
