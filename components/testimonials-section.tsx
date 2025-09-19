import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Anshika Saini",
      role: "Core Team Member",
      content:
        "Being part of the GSSoC core team has been an epic adventure. The experience of mentoring and guiding contributors while building an inclusive community is unmatched.",
      rating: 5,
    },
    {
      name: "Anchal Chaturvedi",
      role: "Contributor & Ambassador",
      content:
        "Throughout this journey, all the mentors were very supportive and helpful at every step. The learning experience exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Vuppala Sai Srija",
      role: "Contributor",
      content:
        "My journey through GSSoC'24 has been an exciting blend of learning and achievement. Although I started late due to exams, I was able to make meaningful contributions.",
      rating: 5,
    },
    {
      name: "Jeevana Maradana",
      role: "Core Team Member",
      content:
        "As a Core team member of GSSoC'24 has been an incredibly enriching experience. Working with diverse teams and projects broadened my perspective.",
      rating: 5,
    },
    {
      name: "Payal Kumari",
      role: "Mentor",
      content:
        "Participating in GSSoC 2024 as a mentor has been an incredibly rewarding experience. Seeing contributors grow and succeed is truly fulfilling.",
      rating: 5,
    },
    {
      name: "Rishi Mondal",
      role: "Project Admin",
      content:
        "Serving as a Project Admin for GSSoC was an incredibly fulfilling experience. Managing projects and coordinating with teams taught me valuable leadership skills.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            What People Say About <span className="text-primary">Previous Editions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our amazing community of contributors, mentors, and team members
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
