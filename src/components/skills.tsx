import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Trophy, Globe, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C++", "Python", "JavaScript", "Java", "C#"]
  },
  {
    title: "Frontend & Web",
    icon: Globe,
    skills: ["React", "Redux", "Angular", "HTML/CSS", "JavaScript"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "GCP"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MongoDB", "Redis", "DynamoDB"]
  },
  {
    title: "Tools & Testing",
    icon: Award,
    skills: ["Selenium", "PyTest", "JUnit", "SonarQube"]
  }
]

const achievements = [
  {
    title: "Competitive Coding",
    items: [
      "CodeChef June Long Two 2022 Div 4 – Global Rank 1 / 15,000",
      "CodeChef Starters 42 2022 Div 4 – Global Rank 18 / 12,000"
    ]
  },
  {
    title: "Certifications & Achievements",
    items: [
      "Google HashCode – Issued by Google (May 2020) for placing 5th overall",
      "SCL (Intermediate) Certificate, HackerRank",
      "Problem Solving (Intermediate), HackerRank",
      "JavaScript (Basic), HackerRank",
      "Google Professional Cloud Security Engineer, Udemy",
      "Multiple Coursera certificates in AI, Data Science, and Python"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-inter">Skills & Expertise</h2>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-gmail-lg transition-all duration-300 animate-slide-up">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <category.icon className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-gmail-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Trophy className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{item}</span>
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