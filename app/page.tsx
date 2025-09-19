import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeamSection } from "@/components/team-section"
import { ApplicationSection } from "@/components/application-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <TimelineSection />
        <TeamSection />
        <ApplicationSection />
        <SponsorsSection />
        <Footer />
      </main>
    </>
  )
}
