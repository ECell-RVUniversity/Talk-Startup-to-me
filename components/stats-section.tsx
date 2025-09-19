import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { number: "50K+", label: "Registrations", color: "text-primary" },
    { number: "500+", label: "Institutes", color: "text-accent" },
    { number: "25K+", label: "PRs", color: "text-primary" },
    { number: "50+", label: "Countries", color: "text-accent" },
    { number: "100K+", label: "LinkedIn Followers", color: "text-primary" },
    { number: "200+", label: "Total Projects", color: "text-accent" },
  ]

  const additionalStats = [
    "Pull Requests",
    "Campus Ambassadors",
    "Project Admin Registrations",
    "Contributor Registrations",
    "Active Participants",
    "Mentor Registrations",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Our <span className="text-primary">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how GSSoC has grown to become India's largest open source program
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {additionalStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-lg border">
              <div className="text-lg font-semibold text-foreground mb-1">{stat}</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
