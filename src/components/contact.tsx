import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "devyansh.singh2905@gmail.com",
    href: "mailto:devyansh.singh2905@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99713 79059",
    href: "tel:+919971379059"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India"
  }
]

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
    value: "www.linkedin.com/in/devyansh-singh-devd/",
    href: "https://www.linkedin.com/in/devyansh-singh-devd/"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-inter">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-4">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center group">
                    <contact.icon className="h-5 w-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-4">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <social.icon className="h-5 w-5 mr-4 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{social.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-primary hover:bg-primary-hover transition-all"
                    size="lg"
                    asChild
                  >
                    <a href="mailto:devyansh.singh2905@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}