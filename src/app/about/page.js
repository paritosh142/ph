import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/about/TeamSection";
import Timeline from "@/components/about/Timeline";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: "About Us | Talent Wave",
  description:
    "Learn about our mission, values, and the team behind Talent Wave.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <OurMission />
      <OurValues />
      <TeamSection />
      <Timeline />
      <CTASection />
    </main>
  );
}
