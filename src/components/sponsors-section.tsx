"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaEye, FaUsers, FaHeart, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { SiWhatsapp, SiLinkedin, SiInstagram } from "react-icons/si"

export function SponsorsSection() {
  const benefits = [
    {
      icon: FaEye,
      title: "Maximize Visibility",
      description: "Feature your brand across app, website, social media (500K+ reach), newsletters, and event swag.",
      color: "text-primary",
    },
    {
      icon: FaUsers,
      title: "Engage & Activate",
      description: "Host workshops, showcase tech, and integrate product tasks to reach 50,000+ developers directly.",
      color: "text-accent",
    },
    {
      icon: FaHeart,
      title: "Community Impact",
      description: "Champion gender equity in tech through measurable support—mentorship hours, project outcomes, and participant placements.",
      color: "text-primary",
    },
  ]

  const contacts = [
    {
      name: "Ayush S Kulkarni",
      role: "PR Lead",
      whatsapp: "+918660697430",
      email: "ayushskulkarnibtech24@rvu.edu.in",
    },
    {
      name: "Vanshaj Garg",
      role: "President",
      whatsapp: "+919649353930",
      email: "vanshaj.btech23@rvu.edu.in",
    },
  ]

  const socialLinks = [
    { 
      name: "Whatsapp", 
      url: "https://chat.whatsapp.com/J0MfKUwIZ6J8WfemIBbdlJ", 
      icon: <SiWhatsapp className="w-6 h-6 text-[#25D366]" /> 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/company/entrepreneurship-cell-rv-university/", 
      icon: <SiLinkedin className="w-6 h-6 text-[#0077B5]" /> 
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/ecell_rvu?igsh=ZTh1NHlwcnRzcGlu", 
      icon: <SiInstagram className="w-6 h-6 text-[#E4405F]" /> 
    },
  ]

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Sponsor</span> Us Or Become Our <span className="text-accent">Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in empowering the next generation of developers and making a lasting impact in the tech community
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center border-2 hover:border-primary/30 hover:shadow-lg transition">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      benefit.color === "text-primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Cards */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-10">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contacts.map((person, idx) => (
              <Card key={idx} className="border-2 hover:border-primary/30 transition">
                <CardContent className="p-6 text-left">
                  <h4 className="text-xl font-semibold">{person.name}</h4>
                  <p className="text-muted-foreground mb-4">{person.role}</p>

                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${person.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
                      {person.name === "Ayush S Kulkarni" && (
                        <span className="ml-2">| Phone: <span className="underline">+91 86606 97430</span></span>
                      )}
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:${person.email}?subject=ECell%20Partnership%20Inquiry&body=Hello%20${person.name},`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <FaEnvelope className="w-5 h-5" /> {person.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-accent/30 rounded-xl hover:bg-accent/10 transition"
              >
                {link.icon} {/* ✅ directly rendering brand-colored icon */}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Join Us Form */}
      <div className="relative text-center mb-20 px-4">
  {/* Background Gradient Animation */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x opacity-20 rounded-3xl blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
      Join ECell RVU 
    </h3>

    <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 animate-fadeIn">
      <b>Fill the form below to become part of our journey</b>
    </p>

    <div className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out">
      <iframe
        src="https://forms.gle/f2obrzAVvB9rk6Db8"
        width="100%"
        height="600"
        className="rounded-xl border border-gray-300 dark:border-gray-700"
      >
        Loading…
      </iframe>
    </div>
  </div>
</div>


        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to create meaningful impact in the startup ecosystem.
              </p>
              <Button size="lg" asChild className="group">
                <a href="mailto:ecell@rvu.edu.in?subject=Partnership%20Inquiry">
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  Contact Us for Partnership
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
