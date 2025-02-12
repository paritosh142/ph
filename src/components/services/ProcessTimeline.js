"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Needs Assessment",
    desc: "Deep dive into your requirements",
    icon: "📋",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
  },
  {
    title: "Talent Matching",
    desc: "AI-powered candidate selection",
    icon: "🤝",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  },
  {
    title: "Vetting Process",
    desc: "Technical & cultural assessment",
    icon: "🔍",
    image: "https://images.pexels.com/photos/7693229/pexels-photo-7693229.jpeg",
  },
  {
    title: "Onboarding",
    desc: "Seamless integration",
    icon: "🚀",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our 4-Step Success Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Systematic approach ensuring perfect candidate matches every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-2xl shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{step.desc}</p>
                <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    layout="responsive"
                    width={16}
                    height={9}
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
