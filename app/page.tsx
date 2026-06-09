import { Header } from "@/components/header"
import { FloatingElements } from "@/components/floating-elements"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CursorFollower } from "@/components/cursor-follower"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden">
      <FloatingElements />
      <div className="relative z-0">
        <CursorFollower />
        <Header />
        <HeroSection />
        <ExperienceSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
