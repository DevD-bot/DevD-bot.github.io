import { Button } from "@/components/ui/button"
import { Mail, MapPin, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              5★ on CodeChef | Ex-SLB
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Devyansh Singh
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Software Engineer passionate about building scalable solutions and automating complex workflows
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Bengaluru, Karnataka, India
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                devyansh.singh2905@gmail.com
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover transition-all px-8">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}