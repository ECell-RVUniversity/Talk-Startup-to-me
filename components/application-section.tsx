import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export function ApplicationSection() {
  return (
    <section id="apply" className="relative py-32 animated-bg particle-bg">
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium text-white/90">Ready to Join?</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-balance mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Talk Startup to Me
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Join us for an exclusive CEO fireside chat and mentorship session designed for aspiring student
            entrepreneurs.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-400 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Registration Open</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 mb-12 interactive-hover">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Date</h4>
                      <p className="text-white/70">October 3rd, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Time</h4>
                      <p className="text-white/70">2:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Venue</h4>
                      <p className="text-white/70">Homi J. Bhabha Auditorium</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Expected</h4>
                      <p className="text-white/70">100+ Attendees</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 interactive-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Keynote Address</h4>
                <p className="text-sm text-white/70">CEO insights on building and scaling ventures</p>
                <p className="text-xs text-white/50 mt-2">2:00 - 3:00 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 interactive-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Mentorship Session</h4>
                <p className="text-sm text-white/70">1-on-1 guidance for 10 selected teams</p>
                <p className="text-xs text-white/50 mt-2">3:00 - 5:00 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 interactive-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Networking</h4>
                <p className="text-sm text-white/70">Connect with peers and industry experts</p>
                <p className="text-xs text-white/50 mt-2">5:00 - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full pulse-glow group transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-white/60 text-sm mt-4">Limited seats available • First come, first served</p>
          </div>
        </div>
      </div>
    </section>
  )
}
