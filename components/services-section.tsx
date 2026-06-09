"use client"

import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

type ServiceProject = {
  name: string
  image?: string
  video?: string
  hideLabel?: boolean
}

const services: {
  title: string
  subtitle: string
  description: string
  projects: ServiceProject[]
}[] = [
  {
    title: "Brand Identity",
    subtitle: "Visual Branding",
    description:
      "Crafting distinctive visual identities that capture your brand's essence and make lasting impressions.",
    projects: [
      {
        name: "Ancient History Buff",
        image: "/services/brand-identity/ancient-history-buff.png",
      },
      {
        name: "Cafe Day",
        image: "/services/brand-identity/cafe-day.png",
      },
      {
        name: "SmartLayers",
        image: "/services/brand-identity/smartlayers.png",
      },
      {
        name: "Yardvis",
        image: "/services/brand-identity/yardvis.png",
      },
    ],
  },
  {
    title: "Visual Design",
    subtitle: "Graphic Design",
    description:
      "Creating stunning visuals for print and digital media that communicate your message effectively.",
    projects: [
      {
        name: "Visual 1",
        video: "/visual-media/17512950-uhd_3840_2160_25fps.mp4",
        hideLabel: true,
      },
      {
        name: "Visual 2",
        video: "/visual-media/visual-project-1.mp4",
        hideLabel: true,
      },
      {
        name: "Visual 3",
        video: "/visual-media/visual-project-3.mp4",
        hideLabel: true,
      },
      {
        name: "Social scroll",
        image: "/visual-media/394.jpg",
        hideLabel: true,
      },
    ],
  },
  {
    title: "Packaging Design",
    subtitle: "Product Design",
    description:
      "Designing packaging that stands out on shelves and creates memorable unboxing experiences.",
    projects: [
      {
        name: "Solera Hair Masque",
        image: "/services/product-design/solera-hair-masque.png",
      },
      {
        name: "aya. Body Butter",
        image: "/services/product-design/aya-body-butter.png",
      },
      {
        name: "Lumora Perfume",
        image: "/services/product-design/lumora-perfume.png",
      },
      {
        name: "Livora Vitamins",
        image: "/services/product-design/livora-vitamins.png",
      },
    ],
  },
]

function ProjectPreview({
  project,
  pIndex,
}: {
  project: ServiceProject
  pIndex: number
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {})
  }, [project.video])

  if (project.video) {
    return (
      <video
        ref={videoRef}
        src={project.video}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
    )
  }

  if (project.image) {
    if (project.image.startsWith("/api/")) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )
    }

    return (
      <Image
        src={project.image}
        alt={project.hideLabel ? "" : project.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 192px, 224px"
      />
    )
  }

  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${135 + pIndex * 30}deg, 
            color-mix(in oklch, var(--primary) ${30 + pIndex * 10}%, transparent), 
            color-mix(in oklch, var(--accent) ${10 + pIndex * 5}%, transparent))`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl md:text-6xl font-serif text-background/20 group-hover/card:text-background/30 transition-colors">
          {project.name.charAt(0)}
        </span>
      </div>
    </>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      id="work"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-xs tracking-[0.3em] text-primary uppercase font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Design Expert
          </motion.span>
          <motion.h2
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I help companies to
            <br />
            succeed on projects like:
          </motion.h2>
        </motion.div>

        <motion.div
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants} className="group">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className="space-y-4">
                  <motion.h3
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground group-hover:text-primary transition-colors duration-500"
                    whileHover={{ x: 10 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

                <motion.div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-4"
                    style={{ x: index % 2 === 0 ? x1 : x2 }}
                  >
                    {service.projects.map((project, pIndex) => (
                      <motion.div
                        key={`${service.title}-${pIndex}`}
                        className="flex-shrink-0 w-48 h-32 md:w-56 md:h-40 rounded-xl overflow-hidden relative group/card cursor-pointer bg-card"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectPreview project={project} pIndex={pIndex} />

                        <motion.div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none z-[2]" />

                        {project.image && !project.hideLabel && (
                          <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                        )}

                        {!project.hideLabel && (
                          <div className="absolute bottom-3 left-3 right-3 z-[4] pointer-events-none">
                            <span className="text-xs text-white/90 font-medium tracking-wide drop-shadow-sm">
                              {project.name}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-[5]" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-[5]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
