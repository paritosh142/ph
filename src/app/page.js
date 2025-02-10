// app/page.js
import HeroSection from "../components/home/HeroSection";
import FeaturedClients from "../components/home/FeaturedClients";
import ProcessTimeline from "../components/home/ProcessTimeline";
import StatsGrid from "../components/home/StatsGrid";
import Testimonials from "../components/home/Testimonials";
import TrustedByCarousel from "@/components/home/TrustedByCarousel";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <TrustedByCarousel />
      <FeaturedClients />
      <ProcessTimeline />
      <StatsGrid />
      <Testimonials />
    </div>
  );
}
