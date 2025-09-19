"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, Heart, Target, Users } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const eventTitleRef = useRef<HTMLHeadingElement>(null)
  const eventDescRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Content animation with stagger
      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Cards animation with stagger
      gsap.from(cardsRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Event section animations
      gsap.from(eventTitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eventTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(eventDescRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventDescRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Floating animation for cards
      gsap.to(cardsRef.current?.children || [], {
        y: -5,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-balance mb-6">
              About <span className="text-primary">ECell RV University</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={contentRef}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                One of RV University's most vibrant and dynamic student communities. We are dedicated to creating a
                student-led entrepreneurial ecosystem that fosters trust, collaboration, and meaningful impact with an
                active 200+ student community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We build a supportive environment where innovation thrives, and students feel truly empowered to begin
                their entrepreneurial journeys. Through workshops, mentorship programs, speaker sessions, and hands-on
                projects, we help aspiring founders develop essential skills and transform bold ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group">
                  <Mail className="w-4 h-4 mr-2" />
                  club_ecell@rvu.edu.in
                </Button>
                <Button variant="outline" className="group bg-transparent">
                  Visit Instagram
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div ref={cardsRef} className="space-y-6">
              <Card className="border-primary/20 interactive-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        Creating a student-led entrepreneurial ecosystem that fosters innovation and meaningful impact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 interactive-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        Establish RV University as a hub for innovation, entrepreneurship, and the next generation of
                        changemakers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 interactive-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Community</h3>
                      <p className="text-muted-foreground">
                        Active 200+ student community fostering creativity, resilience, and leadership on campus.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={eventTitleRef} className="text-4xl md:text-5xl font-bold text-balance mb-8">
            About <span className="text-accent">Talk Startup to Me</span>
          </h2>
          <p ref={eventDescRef} className="text-lg text-muted-foreground leading-relaxed">
            "Talk Startup to Me" is an ECell initiative at RV University that connects aspiring student founders with a
            leading CEO from the startup ecosystem. Designed to blend knowledge-sharing, mentorship, and networking, the
            event offers students a practical glimpse into the world of entrepreneurship with over 100 attendees
            including participants and volunteers.
          </p>
        </div>
      </div>
    </section>
  )
}
