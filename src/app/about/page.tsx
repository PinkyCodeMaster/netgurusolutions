import Hero from "@/components/about/hero"
import Introduction from "@/components/about/introduction"
import FounderStory from "@/components/about/founder-story"
import VisionMission from "@/components/about/vision-mission"
import WhyChooseUs from "@/components/about/why-choose-us"
import ServicesOverview from "@/components/about/services-overview"
import Team from "@/components/about/team"
import ClosingCTA from "@/components/about/closing-cta"

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FounderStory />
      <VisionMission />
      <WhyChooseUs />
      <ServicesOverview />
      <Team />
      <ClosingCTA />
    </>
  )
}

