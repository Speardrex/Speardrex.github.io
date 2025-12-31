import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Sales Dashboard",
    description: "Interactive sales analytics dashboard with real-time KPI tracking and trend analysis.",
    tools: ["Power BI", "SQL"],
    image: "/modern-sales-dashboard-analytics.jpg",
  },
  {
    title: "Customer Segmentation",
    description: "Machine learning model to segment customers based on purchasing behavior and demographics.",
    tools: ["Python", "Pandas"],
    image: "/customer-segmentation-data-visualization.jpg",
  },
  {
    title: "Financial Analysis Report",
    description: "Comprehensive financial analysis with automated reporting and forecasting capabilities.",
    tools: ["Excel", "Power BI"],
    image: "/financial-charts-graphs.png",
  },
  {
    title: "Market Trends Analysis",
    description: "Deep dive into market trends using statistical analysis and predictive modeling.",
    tools: ["Python", "SQL"],
    image: "/market-trends-data-analysis.jpg",
  },
  {
    title: "Inventory Optimization",
    description: "Data-driven inventory management system to reduce costs and improve efficiency.",
    tools: ["Excel", "SQL"],
    image: "/inventory-management-dashboard.png",
  },
  {
    title: "Social Media Analytics",
    description: "Sentiment analysis and engagement metrics for social media campaigns.",
    tools: ["Python", "Pandas"],
    image: "/social-media-analytics-metrics.jpg",
  },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-4 mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Selected Case Studies
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-primary/20 blur-3xl -z-10" />
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg">
            Explore my data analysis projects showcasing problem-solving and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden glassmorphism-strong border-border/50 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] cursor-pointer"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video w-full overflow-hidden bg-background/50">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-muted/80 backdrop-blur-sm border-b border-border/50 z-10 flex items-center px-3 gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="absolute inset-0 pt-8 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 font-mono text-xs hover:bg-primary/30 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/arrow cursor-pointer">
                  <span className="text-xs font-medium">View Analysis</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/arrow:bg-primary group-hover/arrow:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover/arrow:text-primary-foreground transition-colors" />
                  </div>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
