import { Button } from "@/components/ui/button"
import { Mail, MapPin, Award, ArrowDown, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-[0.04]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(234 89% 64% / 0.12) 0%, transparent 70%)' }}
      ></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 glass border border-primary/20">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Software Engineer</span>
              <span className="mx-2 text-border">•</span>
              <span className="text-muted-foreground">Quantitative Trading Enthusiast</span>
              <span className="mx-2 text-border">•</span>
              <span className="text-muted-foreground">5★ CodeChef</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-inter mb-6 tracking-tight">
              <span className="text-gradient">Devyansh</span>{" "}
              <span className="text-foreground">Singh</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Building scalable CI/CD infrastructure and exploring quantitative trading strategies.
              Passionate about automation, performance, and data-driven systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary/70" />
                Bengaluru, India
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary/70" />
                devyansh.singh2905@gmail.com
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all px-8 h-12 text-base shadow-lg shadow-primary/20" asChild>
                <a href="#contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 h-12 text-base hover:bg-secondary" asChild>
                <a href="#projects">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
      </div>
    </section>
  )
}