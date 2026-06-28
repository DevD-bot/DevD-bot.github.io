import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Videonetics",
    location: "Bengaluru, India",
    period: "2023 – 2026 May",
    type: "Hybrid",
    achievements: [
      "Designed and developed CI/CD infrastructure for VMS and TMS platforms from scratch",
      "Architected scalable CI/CD pipelines for VSaaS cloud platform",
      "Built multithreaded Java Swing automation tools for patch management",
      "Integrated SonarQube and ESLint for automated static analysis",
      "Automated release packaging reducing manual effort by 90%",
      "Developed analytics validation scripts improving data reliability"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "SLB (Schlumberger)",
    location: "Pune, India",
    period: "2022 – 2023",
    achievements: [
      "Developed React + Redux modules for enterprise applications",
      "Built high-performance C++ data-processing components",
      "Integrated REST APIs increasing throughput by 30%",
      "Migrated legacy systems to Docker and Jenkins pipelines",
      "Developed low-code applications using Microsoft Power Platform"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Osmosys Software Solutions",
    location: "Hyderabad, India",
    period: "2021 – 2022",
    achievements: [
      "Developed JavaScript web scrapers for large-scale e-commerce platforms",
      "Improved reliability using dynamic DOM handling and automation workflows"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Xylem Inc.",
    location: "Bengaluru, India",
    period: "2021",
    achievements: [
      "Integrated OpenCV webcam feeds into C++ DLL systems",
      "Applied regression models improving sensor detection accuracy by 20%"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Career
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Professional Experience</h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-8 w-2 h-2 rounded-full bg-primary -translate-x-[3px] hidden md:block ring-4 ring-background"></div>
                  
                  <Card className="group hover-lift glass-strong border-0 animate-slide-up overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary rounded-l"></div>
                    <CardHeader className="pb-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div>
                          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="flex items-center text-base font-medium mt-1">
                            <Building className="h-4 w-4 mr-2 text-primary/60" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1.5 flex-shrink-0">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1.5" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 mr-1.5" />
                            {exp.location}
                          </div>
                          {exp.type && <Badge variant="secondary" className="w-fit text-xs">{exp.type}</Badge>}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}