import ServiceHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServiceList";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import CTASection from "@/components/services/CTASection";

export const metadata = {
  title: "Our Services | Talent Hunters",
  description:
    "Explore our range of specialized talent acquisition and staffing services.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServiceHero />
      <ServicesList />
      <ProcessTimeline />
      <CTASection />
    </main>
  );
}
