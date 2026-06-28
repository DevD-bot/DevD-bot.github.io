import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Trophy, Send } from "lucide-react"



const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DevD-bot",
    href: "https://github.com/DevD-bot"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/devyansh-singh-devd",
    href: "https://www.linkedin.com/in/devyansh-singh-devd/"
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/DevD2905",
    href: "https://leetcode.com/DevD2905/"
  },
  {
    icon: Trophy,
    label: "HackerRank",
    value: "hackerrank.com/devyansh_singh21",
    href: "https://www.hackerrank.com/devyansh_singh21"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Contact
            </Badge>
            <h2 className="text-4xl font-bold font-inter">Get In Touch</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Interested in collaboration or want to discuss quantitative trading? Let's connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-strong border-0 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! I'll get back to you soon."); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</label>
                      <Input id="name" placeholder="John Doe" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</label>
                    <Textarea id="message" placeholder="How can we collaborate?" rows={4} className="bg-background/50 border-border/50 focus-visible:ring-primary/50 resize-none" required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-all shadow-lg shadow-primary/20 mt-2">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-strong border-0 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group p-3 rounded-xl hover:bg-primary/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <social.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{social.label}</p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors truncate">{social.value}</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary/50 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}