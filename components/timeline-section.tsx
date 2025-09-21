import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Code, Trophy, Target, Flag } from "lucide-react"

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "2nd October 2025",
      time: "2:00 - 3:00 PM",
      title: "Keynote Address",
      description: "An accomplished CEO shares insights from their entrepreneurial journey, covering strategies for building, scaling, and sustaining ventures.",
      icon: Users,
      status: "upcoming",
    },
    {
      date: "2nd october 2025",
      time:"3:00 - 5:00 PM",
      title: "Mentorship Session",
      description: " The CEO mentors 10 teams (50 students in total), offering guidance on product validation, pitch decks, and startup strategies. ",
      icon: Target,
      status: "upcoming",
    },
    {
      date: "2nd october 2025",
      time:"5:00 - 6:00 PM",
      title: "Networking & Closing",
      description:
        " Informal interactions, acknowledgements, and opportunities for meaningful conversations between participants, mentors, and attendees.",
      icon: Trophy,
      status: "upcoming",
    },
  ]

  return (
    <section id="timeline" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            <span className="text-primary">Timeline</span> & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What's happening and when will things happen throughout the program
            Place and time of different sessions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                        event.status === "completed"
                          ? "bg-primary border-primary text-primary-foreground"
                          : event.status === "active"
                            ? "bg-accent border-accent text-accent-foreground"
                            : "bg-background border-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Event card */}
                    <Card
                      className={`flex-1 ${
                        event.status === "active"
                          ? "border-accent shadow-lg"
                          : event.status === "completed"
                            ? "border-primary/20"
                            : "border-border"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span
                                className={`text-sm font-medium ${
                                  event.status === "active" ? "text-accent" : "text-muted-foreground"
                                }`}
                              >
                                {event.date}
                                <p className="text-sm text-accent font-medium mb-2">{event.time}</p> 
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                          </div>
                          {event.status === "active" && (
                            <div className="flex-shrink-0">
                              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                Active Now
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

