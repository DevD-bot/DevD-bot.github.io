import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, LineChart, Cpu } from "lucide-react"

const projects = [
  {
    title: "Quantitative Trading Research Engine",
    icon: TrendingUp,
    tags: ["Python", "C++", "Backtesting", "Statistical Analysis"],
    description: "End-to-end backtesting framework for quantitative trading strategies",
    achievements: [
      "Built Python/C++ backtesting framework for short holding period strategies",
      "Simulated alpha-seeking and market-making strategies on historical datasets",
      "Evaluated strategy performance using Sharpe ratio, drawdown, and PnL metrics"
    ]
  },
  {
    title: "Market Data Analytics",
    icon: BarChart3,
    tags: ["Python", "Pandas", "NumPy", "Predictive Models"],
    description: "Statistical analysis and predictive modeling on market data",
    achievements: [
      "Performed statistical analysis on market datasets using Pandas and NumPy",
      "Developed predictive models for intraday price movement analysis"
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Research
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Quant Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Personal research projects exploring quantitative trading strategies and market analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover-lift glass-strong border-0 animate-slide-up overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2.5 mb-5">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
