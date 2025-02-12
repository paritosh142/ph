"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Our 4-Step Success Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Systematic approach ensuring perfect candidate matches every time
          </p>
        </motion.div>

        {isClient && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
