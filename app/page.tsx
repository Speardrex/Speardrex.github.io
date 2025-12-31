import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProjectsGrid from "@/components/projects-grid"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Global animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        {/* Grid overlay that flows continuously */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <main className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProjectsGrid />
        <AboutSection />
        <Footer />
      </main>
    </div>
  )
}
