import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Videonetics",
    location: "Bengaluru, Karnataka, India",
    period: "Dec 2023 – Present",
    type: "Hybrid",
    achievements: [
      "Built a multithreaded Java Swing tool for support teams to automate patch updates",
      "Architected and implemented CI/CD infrastructure for VSaaS product from scratch",
      "Integrated static code analysis (SonarQube, ESLint) into automated pipelines",
      "Automated release-packaging workflows, reducing manual effort by 90%",
      "Developed data-validation scripts for analytics, ensuring end-to-end reliability"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "SmartInspect, SLB",
    location: "Pune, Maharashtra, India", 
    period: "Aug 2022 – Sep 2023",
    achievements: [
      "Developed React.js and Redux front-end modules for interactive enterprise dashboards",
      "Collaborated with cross-functional teams to integrate RESTful APIs",
      "Improved application throughput by 30%",
      "Wrote performance and unit tests in C++ modules for data processing pipelines",
      "Assisted in migrating legacy builds to Jenkins pipelines with Docker containers"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Osmosys Software Solutions",
    location: "Hyderabad, Telangana, India",
    period: "Nov 2021 – Aug 2022",
    achievements: [
      "Built and maintained JavaScript-based web scrapers for Amazon, Walmart, and Target",
      "Enhanced scraper stability by handling dynamic DOM changes and rate limiting",
      "Developed an automated email notification system for scraper monitoring"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Xylem Inc",
    location: "Bengaluru, Karnataka, India",
    period: "Feb 2021 – Oct 2021",
    achievements: [
      "Integrated OpenCV live webcam feeds into a C++ DLL for an augmented-reality automotive prototype",
      "Employed Python regression models to analyze sensor datasets, improving detection accuracy"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-inter">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-gmail-lg transition-all duration-300 animate-slide-up border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center text-base font-medium mt-1">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                      {exp.type && <Badge variant="secondary" className="w-fit">{exp.type}</Badge>}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{achievement}</span>
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