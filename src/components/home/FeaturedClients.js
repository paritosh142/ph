"use client";
import { motion } from "framer-motion";
import Card from "../Card";

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
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Specialized Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Precision-matched professionals aligned with your technical and
            cultural needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <Card
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
