import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Code, Trophy, Target, Flag } from "lucide-react"

export function TimelineSection() {
  const timelineEvents = [
    {
      date: "20th June 2025",
      title: "Project Assignment to Mentors",
      description: "Mentors are assigned to projects and begin preparing to guide contributors throughout the program.",
      icon: Users,
      status: "completed",
    },
    {
      date: "23rd June 2025",
      title: "Community Bonding Period Starts",
      description: "Contributors and mentors interact, discuss project goals, and get familiar with the community.",
      icon: Target,
      status: "active",
    },
    {
      date: "To Be Announced",
      title: "Coding Period Starts",
      description:
        "Contributors officially start working on their assigned open source projects under mentor supervision.",
      icon: Code,
      status: "upcoming",
    },
    {
      date: "To Be Announced",
      title: "Leaderboard Opens",
      description: "The leaderboard is made public, allowing participants to track their progress and contributions.",
      icon: Trophy,
      status: "upcoming",
    },
    {
      date: "To Be Announced",
      title: "Coding Period Ends",
      description: "The official coding phase concludes; contributors submit their final work for evaluation.",
      icon: Flag,
      status: "upcoming",
    },
    {
      date: "To Be Announced",
      title: "Results Declared",
      description: "Final results are announced, recognizing top contributors and successful projects.",
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
