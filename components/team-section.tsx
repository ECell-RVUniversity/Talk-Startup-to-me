import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Mr. Arshdeep Singh",
      role: "Guest Speaker",
      company: "Founder & CEO, Edock | CEO, Decodes",
      description:
        "Product-driven entrepreneur and engineer with extensive experience in building and scaling technology solutions within the startup ecosystem.",
      image: "/tech-entrepreneur-headshot.png",
      linkedin: "#",
    },
    {
      name: "Samrudh Ganesh",
      role: "PR Head, ECell",
      company: "RV University",
      description:
        "Leading public relations and partnerships for ECell, connecting students with industry opportunities.",
      image: "/professional-student-leader-headshot.jpg",
      phone: "+91 83103 06815",
    },
    {
      name: "Ayush S Kulkarni",
      role: "PR Lead, ECell",
      company: "RV University",
      description:
        "Supporting PR initiatives and fostering community engagement within the entrepreneurship ecosystem.",
      image: "/professional-student-leader-headshot.jpg",
      phone: "+91 86606 97430",
    },
  ]

  return (
    <section id="team" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Talk Startup to Me 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="relative border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-accent font-medium mb-4">{member.company}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-pretty">{member.description}</p>

                <div className="flex justify-center gap-3">
                  {member.phone && (
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Phone className="w-4 h-4" />
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            For direct assistance or partnership inquiries, contact our PR team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              club_ecell@rvu.edu.in
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
