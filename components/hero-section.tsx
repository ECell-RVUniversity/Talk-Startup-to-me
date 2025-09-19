"use client"

import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const arcRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from(
        arcRef.current,
        {
          scale: 0.5,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        },
        0,
      )

      tl.from(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.5",
      )

      tl.from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8",
      )

      tl.from(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      )

      tl.from(
        statusRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4",
      )

      gsap.to(arcRef.current, {
        filter: "blur(1px) brightness(1.2)",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(gridRef.current, {
        backgroundPosition: "100px 100px",
        duration: 30,
        ease: "none",
        repeat: -1,
      })

      gsap.to(buttonRef.current, {
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div
        ref={arcRef}
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            Homi J. Bhabha Auditorium, RV University • 2pm - 6pm • 3rd October 2025
          </div>

          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-white text-balance mb-6 leading-tight">
            Talk Startup
            <br />
            To Me 2025
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/70 text-balance mb-12 max-w-2xl mx-auto font-light"
          >
            A CEO fireside + mentorship session for student founders.
          </p>

          <Button
            ref={buttonRef}
            size="lg"
            className="text-lg px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold mb-8 transition-all duration-300"
          >
            Apply Now
          </Button>

          <div ref={statusRef} className="flex items-center justify-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">All Applications Live!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
