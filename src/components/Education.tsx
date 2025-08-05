import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    institution: "KIT – Kalinga Institute of Industrial Technology",
    degree: "B.Tech in Computer Science",
    period: "Jul 2018 – Jun 2022",
    gpa: "8.4 / 10.0",
    type: "Bachelor's Degree"
  },
  {
    institution: "DPS Noida",
    degree: "PCMS CS",
    period: "Jul 2004 – Jun 2018",
    gpa: "88 / 100",
    type: "High School"
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-inter">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-gmail-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                        {edu.institution}
                      </CardTitle>
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">{edu.degree}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <Badge variant="secondary">{edu.type}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">GPA: {edu.gpa}</span>
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