"use client"

import { Linkedin, Github, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "akibahaamed998@gmail.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <footer id="contact" className="py-24 px-4 border-t border-border/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to transform your data?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I am currently open to Intern and Junior Data Analyst roles. Let's chat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Email Display with Copy Button */}
          <div className="group flex items-center gap-3 px-8 py-5 bg-white text-black rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] w-full sm:w-auto justify-center">
            <Mail className="h-7 w-7 flex-shrink-0" />
            <a
              href="mailto:akibahaamed998@gmail.com"
              className="hover:underline"
            >
              {email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="ml-2 p-2 hover:bg-black/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Copy email to clipboard"
              title="Copy email to clipboard"
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* LinkedIn Button - Glassmorphism */}
          <a
            href="https://www.linkedin.com/in/akibinsights"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex items-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl font-semibold text-lg hover:scale-105 hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Linkedin className="h-7 w-7" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub Button - Glassmorphism */}
          <a
            href="https://github.com/Speardrex"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex items-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl font-semibold text-lg hover:scale-105 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Github className="h-7 w-7" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="space-y-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="text-center text-gray-500 text-sm">
            © 2025 Akib.Data. Built with Python logic & Business focus.
          </p>
        </div>
      </div>
    </footer>
  )
}
