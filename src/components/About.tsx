import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Target, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "5+ years of experience building scalable applications with modern technologies"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Improved application performance by 30% and reduced manual effort by 90%"
  },
  {
    icon: Users,
    title: "Team Collaboration", 
    description: "Experienced in cross-functional teams and mentoring junior developers"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Global rank 1 in competitive programming and innovative automation solutions"
  }
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-inter">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-up">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  Software Engineer
                </Badge>
                <h3 className="text-2xl font-bold mb-4">
                  Passionate about building scalable solutions and automating complex workflows
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a software engineer with expertise in full-stack development, DevOps, and competitive programming. 
                  With experience at companies like SLB and Videonetics, I've contributed to enterprise-scale applications 
                  and automation systems that serve thousands of users.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My journey includes achieving global rank #1 in competitive programming contests, building CI/CD 
                  infrastructures from scratch, and developing innovative solutions that significantly improve 
                  operational efficiency.
                </p>
              </div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-gmail-lg transition-all duration-300 animate-bounce-in">
                  <CardContent className="p-6">
                    <highlight.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
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