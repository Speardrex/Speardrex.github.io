"use client"

import { Download } from "lucide-react"

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90%] md:max-w-none">
      <div className="glass-card px-4 md:px-6 py-3 rounded-full border border-white/20 shadow-xl shadow-primary/10 flex items-center gap-3 md:gap-6">
        <a
          href="#"
          className="text-sm md:text-base font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
        >
          Akib<span className="text-primary">.Data</span>
        </a>

        <div className="hidden md:block h-6 w-px bg-white/20" />

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:block h-6 w-px bg-white/20" />

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-black shadow-lg hover:shadow-xl transition-all rounded-full h-8 px-3 md:px-4 font-semibold cursor-pointer text-sm"
        >
          <Download className="h-3.5 w-3.5 md:mr-2" />
          <span className="hidden md:inline">Resume</span>
          <span className="md:hidden">Resume</span>
        </a>
      </div>
    </nav>
  )
}
