import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    institution: "KIIT University",
    fullName: "Kalinga Institute of Industrial Technology",
    degree: "B.Tech in Computer Science Engineering",
    period: "2018 – 2022",
    gpa: "8.4 / 10.0",
    type: "Bachelor's Degree"
  },
  {
    institution: "DPS Noida",
    fullName: "Delhi Public School, Noida",
    degree: "PCMS with Computer Science",
    period: "2004 – 2018",
    gpa: "88 / 100",
    type: "High School"
  }
]

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Background
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Education</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="group hover-lift glass-strong border-0 animate-slide-up overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary rounded-l"></div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mb-3">{edu.fullName}</p>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-4 w-4 mr-2 text-primary/60" />
                        <span className="font-medium text-sm">{edu.degree}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">{edu.type}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center px-3 py-2 bg-primary/5 rounded-lg">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium text-sm">GPA: {edu.gpa}</span>
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