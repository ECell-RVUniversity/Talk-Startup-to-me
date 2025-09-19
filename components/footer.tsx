import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-primary">GirlScript</span> Summer Of Code <span className="text-accent">2025</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Get In Touch With Us Via Email Or Social Media</p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="group">
              <Mail className="w-4 h-4 mr-2" />
              gssoc@girlscript.tech
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="hover:border-primary/40 bg-transparent">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:border-primary/40 bg-transparent">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:border-primary/40 bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:border-primary/40 bg-transparent">
              <Instagram className="w-4 h-4" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © 2025 GirlScript Foundation. All rights reserved. Made with ❤️ for the open source community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
