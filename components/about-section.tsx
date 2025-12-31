"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { Building2, Award, Heart } from "lucide-react"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "journey" | "beyond">("mission")

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent font-serif">
          The Dossier
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
          Credentials, context, and character.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Credentials Card (1/3 width) */}
          <Card className="glassmorphism-strong p-8 space-y-8 lg:col-span-1">
            {/* Professional Photo */}
            <div className="flex justify-center">
              <div className="relative h-32 w-32 rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-lg">
                <Image src="/akib.png" alt="Akib Ahmed - Data Analyst" fill className="object-cover" />
              </div>
            </div>

            {/* Education Block */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Building2 className="h-5 w-5" />
                <h3 className="font-semibold text-white">Education</h3>
              </div>
              <div>
                <p className="font-bold text-white text-lg">B.Sc. in Computer Science and Engineering</p>
                <p className="text-sm text-muted-foreground mt-1">Independent University, Bangladesh</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <h3 className="font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-300">Data Fundamentals by IBM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-300">Cisco Networking</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Right Column: Interactive Tabbed Interface (2/3 width) */}
          <Card className="glassmorphism-strong overflow-hidden lg:col-span-2">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-700/50 bg-gray-900/30">
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex-1 px-6 py-4 font-semibold transition-all cursor-pointer ${
                  activeTab === "mission"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                My Mission
              </button>
              <button
                onClick={() => setActiveTab("journey")}
                className={`flex-1 px-6 py-4 font-semibold transition-all cursor-pointer ${
                  activeTab === "journey"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                The Journey
              </button>
              <button
                onClick={() => setActiveTab("beyond")}
                className={`flex-1 px-6 py-4 font-semibold transition-all cursor-pointer ${
                  activeTab === "beyond"
                    ? "text-primary border-b-2 border-primary bg-primary/5"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                Beyond Work
              </button>
            </div>

            {/* Tab Content with fade-in animation */}
            <div className="p-8">
              {activeTab === "mission" && (
                <div className="animate-in fade-in duration-500 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">
                    Bridging the Gap between Data & Decisions
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Data is useless without context. My value lies in translating complex backend logic (SQL/Python)
                    into clear, actionable strategies that stakeholders can trust.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    I don't just generate reports—I engineer insights that drive business outcomes. Whether it's
                    optimizing sales funnels, forecasting revenue trends, or identifying customer behavior patterns, my
                    work turns raw numbers into competitive advantages.
                  </p>
                </div>
              )}

              {activeTab === "journey" && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-serif mb-8">The Journey</h3>
                  {/* Vertical Timeline */}
                  <div className="space-y-6 relative border-l-2 border-primary/30 pl-8 ml-2">
                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-background"></div>
                      <div className="space-y-1">
                        <p className="text-sm font-mono text-primary">2021</p>
                        <p className="font-semibold text-white">Started CSE</p>
                        <p className="text-sm text-gray-400">Foundation in logic, algorithms, and problem-solving</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-yellow-500 border-4 border-background"></div>
                      <div className="space-y-1">
                        <p className="text-sm font-mono text-primary">2023</p>
                        <p className="font-semibold text-white">Discovered Data Science</p>
                        <p className="text-sm text-gray-400">
                          The pivot moment—realized data analysis combines coding with business impact
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-green-500 border-4 border-background"></div>
                      <div className="space-y-1">
                        <p className="text-sm font-mono text-primary">2025</p>
                        <p className="font-semibold text-white">Building Enterprise-Grade Dashboards</p>
                        <p className="text-sm text-gray-400">
                          Creating data solutions that scale and drive strategic decisions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "beyond" && (
                <div className="animate-in fade-in duration-500 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-6 w-6 text-red-400" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">Beyond Work</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Away from the keyboard, I am passionate about playing football, experimenting with cooking, and
                    traveling to new places. These activities keep me grounded and recharge my creativity.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
