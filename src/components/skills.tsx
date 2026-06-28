import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Trophy, Globe, Award, LineChart, BookOpen, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["C++", "Python", "JavaScript", "Java", "SQL"]
  },
  {
    title: "Quantitative Finance",
    icon: LineChart,
    skills: ["Backtesting", "Alpha Research", "Market Making", "Statistical Arbitrage"]
  },
  {
    title: "Trading Concepts",
    icon: Layers,
    skills: ["Tick Data Analysis", "Sharpe Ratio", "Risk Management"]
  },
  {
    title: "Libraries",
    icon: BookOpen,
    skills: ["Pandas", "NumPy", "SciPy"]
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Angular"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Redis", "SQL Server", "DynamoDB"]
  }
]

const achievements = [
  {
    title: "Competitive Coding",
    items: [
      "CodeChef June Long Challenge 2022 – Global Rank 1 / 15,000+",
      "CodeChef Starters 42 – Global Rank 18 / 12,000+",
      "Google HashCode 2020 – Global Rank 5"
    ]
  },
  {
    title: "Quantitative Research",
    items: [
      "Built quantitative trading simulations and backtesting engines using Python and C++",
      "Researched alpha generation, market microstructure, and statistical signal models"
    ]
  },
  {
    title: "Certifications",
    items: [
      "HackerRank: SQL, Problem Solving",
      "Coursera: Data Science in Python",
      "Google Cloud Security Engineer"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Expertise
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Skills & Achievements</h2>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover-lift glass-strong border-0 animate-slide-up">
                <CardHeader className="pb-2 pt-5 px-5">
                  <CardTitle className="flex items-center text-sm font-semibold">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-2.5 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-4 w-4 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover-lift glass-strong border-0 animate-slide-up overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary"></div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-base">
                    <Trophy className="h-4 w-4 mr-2.5 text-primary" />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 mr-2.5 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}