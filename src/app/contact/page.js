import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import FAQSection from "@/components/contact/FAQSection";

export const metadata = {
  title: "Contact Us | Talent Wave",
  description:
    "Get in touch with Talent Wave for all your talent acquisition needs.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <MapSection />
      <FAQSection />
    </main>
  );
}
