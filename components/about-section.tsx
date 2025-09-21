"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, Heart, Telescope, Users } from "lucide-react"
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

      {/* About Us Text */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-balance mb-6"
        >
          About <span className="text-primary">ECell RV University</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <strong>The Entrepreneurship Cell (ECell)</strong>, RV University is a 200+ student-led community fostering innovation, trust, and collaboration. We host workshops, speaker sessions, and hands-on projects to empower students to turn bold ideas into reality.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We build a supportive environment where innovation thrives, and students feel truly empowered to begin their entrepreneurial journeys. Through workshops, mentorship programs, speaker sessions, and hands-on projects, we help aspiring founders develop essential skills and transform bold ideas into reality.
        </p>
              {/* Cards: Mission, Vision, Purpose */}
      <div ref={cardsRef} className="flex flex-row flex-wrap gap-6 justify-center">

  <Card className="flex-1 border-primary/20 interactive-hover">
    <CardContent className="p-6 text-center">
      <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
      <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
      <p className="text-muted-foreground">
        To build a student-led space that feels real, earns trust, and grows with people who genuinely care.
      </p>
    </CardContent>
  </Card>

  <Card className="flex-1 border-primary/20 interactive-hover">
    <CardContent className="p-6 text-center">
      <Telescope className="w-10 h-10 text-primary mx-auto mb-4" />
      <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
      <p className="text-muted-foreground">
        To create a self-sustaining, student-driven entrepreneurial ecosystem where innovation is nurtured through collaboration.
      </p>
    </CardContent>
  </Card>

  <Card className="flex-1 border-primary/20 interactive-hover">
    <CardContent className="p-6 text-center">
      <Users className="w-10 h-10 text-primary mx-auto mb-4" />
      <h3 className="font-semibold text-lg mb-2">Our Purpose</h3>
      <p className="text-muted-foreground">
        We strive to create a strong peer network and promote entrepreneurial skills among students.
      </p>
    </CardContent>
  </Card>

</div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
  <a href="mailto:club_ecell@rvu.edu.in">
    <Button className="group">
      <Mail className="w-4 h-4 mr-2" />
      club_ecell@rvu.edu.in
    </Button>
  </a>

  <a
    href="https://www.instagram.com/ecell_rvu?igsh=MXFtbTc0dXZwZG4xaQ=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" className="group bg-transparent">
      Visit Instagram
      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
</div>


      </div>


      {/* Event Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2
          ref={eventTitleRef}
          className="text-4xl md:text-5xl font-bold text-balance mb-8"
        >
          About <span className="text-accent">Talk Startup to Me</span>
        </h2>
        <p
          ref={eventDescRef}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Talk Startup to Me is an initiative by the Entrepreneurship Cell (ECell), RV University, designed to connect aspiring student founders with a leading CEO from the startup ecosystem.
        </p>
        <p
          ref={eventDescRef}
          className="text-lg text-muted-foreground leading-relaxed"
        >The event blends knowledge-sharing, mentorship, and networking, giving students a practical glimpse into entrepreneurship.
          </p>
      </div>
    </div>
  </section>
)
}

