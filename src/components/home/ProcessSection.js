"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Needs Analysis",
    description: "Deep-dive consultation",
    number: "01",
  },
  {
    title: "Talent Matching",
    description: "AI-powered candidate selection",
    number: "02",
  },
  {
    title: "Vetting Process",
    description: "Technical & cultural assessment",
    number: "03",
  },
  { title: "Onboarding", description: "Seamless integration", number: "04" },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Systematic approach ensuring perfect candidate matches every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
