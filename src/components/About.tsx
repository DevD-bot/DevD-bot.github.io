import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Target, Users, Lightbulb, TrendingUp, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Engineer",
    description: "4+ years building enterprise applications with React, C++, Java, and Python"
  },
  {
    icon: TrendingUp,
    title: "Quant Enthusiast",
    description: "Building backtesting engines and exploring alpha generation with statistical models"
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Architected CI/CD from scratch, reducing manual effort by 90% across teams"
  },
  {
    icon: Target,
    title: "Competitive Coder",
    description: "Global Rank 1 on CodeChef, Google HashCode Top 5, 5★ rating"
  }
]

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Who I Am</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 leading-snug">
                Software Engineer with a passion for{" "}
                <span className="text-gradient">quantitative trading</span> and scalable infrastructure
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a software engineer with expertise in full-stack development, DevOps, and 
                quantitative finance. With experience at Videonetics and SLB, I've built enterprise-scale 
                CI/CD systems, automated complex workflows, and developed high-performance data pipelines.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond my professional work, I'm deeply passionate about quantitative trading — 
                building backtesting frameworks, researching alpha generation strategies, and analyzing 
                market microstructure using Python, C++, and statistical models.
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover-lift glass animate-bounce-in border-0">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">{highlight.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}