import { Mail, Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Mail className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold font-inter">Devyansh Singh</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Software Engineer passionate about creating efficient solutions and contributing to innovative projects.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/DevD2905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/devyansh-singh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:devyansh.singh2905@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Devyansh Singh
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Devyansh Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}