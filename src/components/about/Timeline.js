"use client";
import { motion } from "framer-motion";

const milestones = [
  { year: 2010, event: "Founded in San Francisco" },
  { year: 2015, event: "Expanded to 5 major cities" },
  { year: 2018, event: "Launched AI-powered matching algorithm" },
  { year: 2020, event: "Reached 1000+ successful placements" },
  { year: 2023, event: "Opened international offices" },
];

export default function Timeline() {
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
            Our Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative mb-8 flex justify-between items-center w-full"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-10 h-10 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {milestone.year}
                    </h1>
                  </div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="mb-3 font-bold text-blue-600 text-xl">
                        {milestone.year}
                      </h3>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="mb-3 font-bold text-blue-600 text-xl">
                        {milestone.year}
                      </h3>
                      <p className="text-sm md:text-base leading-snug text-gray-700">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-10 h-10 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">
                      {milestone.year}
                    </h1>
                  </div>
                  <div className="order-1 w-5/12"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
