import { Github, Linkedin, Mail, Code2 } from "lucide-react"
import { useState } from "react"

const footerLinks = [
  { icon: Github, href: "https://github.com/DevD-bot", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/devyansh-singh-devd/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/DevD2905/", label: "LeetCode" },
  { icon: Mail, href: "mailto:devyansh.singh2905@gmail.com", label: "Email" },
]

export function Footer() {
  const [showResume, setShowResume] = useState(false)

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-sm overflow-hidden">
                <img src="/DS logo.png" alt="DS Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold font-inter text-sm">Devyansh Singh</h3>
                <p className="text-xs text-muted-foreground">Software Engineer & Quant Enthusiast</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-xs text-muted-foreground inline-flex items-center justify-center gap-1">
              © 2026 Devyansh Singh · Made by{" "}
              <span
                className="relative inline-block"
                onMouseEnter={() => setShowResume(true)}
                onMouseLeave={() => setShowResume(false)}
              >
                <span className="font-semibold text-foreground cursor-pointer transition-all duration-300 hover:text-primary hover:text-sm hover:scale-125 inline-block">
                  Dev
                </span>

                {/* Resume preview popup */}
                {showResume && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 animate-fade-in">
                    <div className="glass-strong rounded-xl shadow-xl overflow-hidden border border-border/50 p-1">
                      <a
                        href="/quant_dev.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <div className="w-[220px] h-[310px] bg-white rounded-lg overflow-hidden relative group">
                          <iframe
                            src="/quant_dev.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="w-[440px] h-[620px] origin-top-left scale-50 pointer-events-none"
                            title="Resume Preview"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                              View Resume
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* Arrow */}
                    <div className="w-3 h-3 bg-card border-b border-r border-border/50 rotate-45 mx-auto -mt-1.5"></div>
                  </div>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}