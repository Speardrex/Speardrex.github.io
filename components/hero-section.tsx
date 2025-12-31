import Link from "next/link"
import { ArrowRight, Database, FileSpreadsheet, FileCode, BarChart3, Terminal } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 py-20">
      {/* --- BACKGROUND ATMOSPHERE --- */}
      {/* 1. Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 2. Color Glows (The "Spotlights") */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">
                Hi, I&apos;m Akib Ahmed
              </p>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-8xl">
                Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Analyst.
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                I focus on data accuracy and business strategy. This portfolio documents my technical work in Excel, SQL, Python, and Power BI.
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                <FileSpreadsheet className="w-5 h-5 text-green-400" /> <span>Excel</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                <BarChart3 className="w-5 h-5 text-yellow-400" /> <span>Power BI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                <Database className="w-5 h-5 text-blue-400" /> <span>SQL</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
                <FileCode className="w-5 h-5 text-blue-300" /> <span>Python</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-black/50 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: CODE WINDOW */}
          {/* This is now strictly sized (max-w-lg) so it doesn't look like a banner */}
          <div className="mx-auto w-full max-w-lg lg:mr-0">
            <div className="relative rounded-xl border border-gray-800 bg-gray-950/80 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Fake Window Header */}
              <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900/50 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-xs font-medium text-gray-500 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> current_focus.sql
                </div>
              </div>

              {/* The Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500">01 <span className="text-blue-400">SELECT</span></span>
                  <span className="text-gray-300 pl-4">02   product_name,</span>
                  <span className="text-gray-300 pl-4">03   category,</span>
                  <span className="text-gray-300 pl-4">04   <span className="text-purple-400">SUM</span>(revenue) <span className="text-blue-400">AS</span> total_rev,</span>
                  <span className="text-gray-300 pl-4">05   <span className="text-purple-400">COUNT</span>(order_id) <span className="text-blue-400">AS</span> total_orders</span>
                  <span className="text-gray-500">06 <span className="text-blue-400">FROM</span> sales</span>
                  <span className="text-gray-500">07 <span className="text-blue-400">WHERE</span> sale_date <span className="text-blue-400">BETWEEN</span></span>
                  <span className="text-green-400 pl-4">08   &apos;2024-01-01&apos; <span className="text-blue-400">AND</span> &apos;2024-12-31&apos;</span>
                  <span className="text-gray-500">09 <span className="text-blue-400">GROUP BY</span> product_name</span>
                  <span className="text-gray-500">10 <span className="text-blue-400">ORDER BY</span> total_rev <span className="text-blue-400">DESC</span>;</span>
                </div>

                {/* Status Bar */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-800 pt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">5+</div>
                    <div className="text-[10px] uppercase text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">3+</div>
                    <div className="text-[10px] uppercase text-gray-500">Tools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400 flex items-center justify-center gap-1">
                       <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Open
                    </div>
                    <div className="text-[10px] uppercase text-gray-500">To Work</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}