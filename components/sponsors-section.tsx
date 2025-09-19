import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Users, Heart, Mail } from "lucide-react"

export function SponsorsSection() {
  const benefits = [
    {
      icon: Eye,
      title: "Maximize Visibility",
      description: "Feature your brand across app, website, social media (500K+ reach), newsletters, and event swag.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Engage & Activate",
      description: "Host workshops, showcase tech, and integrate product tasks to reach 50,000+ developers directly.",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "Champion gender equity in tech through measurable support—mentorship hours, project outcomes, and participant placements.",
      color: "text-primary",
    },
  ]

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
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
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
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

        {/* Past Sponsors */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Our Past Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-card border rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <img
                  src={`/generic-sponsor-logo.png?height=80&width=120&query=sponsor%20logo%20${index + 1}`}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to create meaningful impact in the open source community
              </p>
              <Button size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us for Partnership
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
