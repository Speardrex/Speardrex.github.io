import { Database, Code, BarChart3, FileSpreadsheet, PanelTop } from "lucide-react"

const technologies = [
  { name: "SQL", icon: Database, description: "Database Queries" },
  { name: "Python", icon: Code, description: "Data Analysis" },
  { name: "Power BI", icon: BarChart3, description: "Visualization" },
  { name: "Excel", icon: FileSpreadsheet, description: "Data Processing" },
  { name: "Pandas", icon: PanelTop, description: "Data Manipulation" },
]

export function TechStack() {
  return (
    <section className="py-24 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tools and technologies I use to turn data into actionable insights
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden glassmorphism rounded-full px-6 py-3 hover:border-primary/50 transition-all duration-300 glow-blue-hover cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-mono font-semibold text-foreground text-sm">{tech.name}</h3>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
