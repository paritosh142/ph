"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Tech Talent Acquisition",
    description: "Curated network of top 1% developers & engineers",
    icon: "💻",
    image: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
  },
  {
    title: "Executive Leadership Search",
    description: "C-suite executives & senior leadership placements",
    icon: "👔",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
  },
  {
    title: "Project-Based Staffing",
    description: "Specialized teams for time-bound initiatives",
    icon: "📆",
    image: "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  },
  {
    title: "Data Science & AI Experts",
    description: "Top-tier data scientists and AI specialists",
    icon: "🧠",
    image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
  },
  {
    title: "Remote Team Building",
    description: "Assembling high-performing distributed teams",
    icon: "🌐",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg",
  },
  {
    title: "Cybersecurity Professionals",
    description: "Expert security analysts and ethical hackers",
    icon: "🔒",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
  },
  {
    title: "UX/UI Design Talent",
    description: "Creative designers for exceptional user experiences",
    icon: "🎨",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
  },
  {
    title: "DevOps Specialists",
    description: "Experts in streamlining development operations",
    icon: "⚙️",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
  },
  {
    title: "Agile Coaches",
    description: "Facilitators for agile transformation and team efficiency",
    icon: "🏃",
    image: "https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg",
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Precision-matched professionals aligned with your technical and
            cultural needs across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
