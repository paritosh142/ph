import React, { lazy } from "react";

const HeroSection = lazy(() => import("../components/home/HeroSection"));
const FeaturedClients = lazy(() =>
  import("../components/home/FeaturedClients")
);
const ProcessTimeline = lazy(() =>
  import("../components/home/ProcessTimeline")
);
const StatsGrid = lazy(() => import("../components/home/StatsGrid"));
const Testimonials = lazy(() => import("../components/home/Testimonials"));
const TrustedByCarousel = lazy(() =>
  import("@/components/home/TrustedByCarousel")
);

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
