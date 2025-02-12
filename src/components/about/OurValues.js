"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every placement and interaction.",
    icon: "🏆",
  },
  {
    title: "Integrity",
    description: "We operate with unwavering integrity and transparency.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description: "We embrace innovation in our processes and solutions.",
    icon: "💡",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaborative partnerships.",
    icon: "🤲",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
