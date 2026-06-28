import { Button } from "@/components/ui/button"
import { Moon, Sun, Download, Github, Linkedin, Menu, X } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-sm overflow-hidden">
              <img src="/DS logo.png" alt="DS Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg font-bold font-inter hidden sm:block group-hover:text-primary transition-colors">
              Devyansh Singh
            </h1>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-xl h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-xl h-9 w-9 hidden sm:flex"
            >
              <a href="https://github.com/DevD-bot" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-xl h-9 w-9 hidden sm:flex"
            >
              <a href="https://www.linkedin.com/in/devyansh-singh-devd/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="default" 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-all text-xs h-9 px-4 shadow-md shadow-primary/20" 
              asChild
            >
              <a 
                href="/quant_dev.pdf"
                download="Devyansh_Singh_Quant_Dev_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Resume
              </a>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl h-9 w-9 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-border mt-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}