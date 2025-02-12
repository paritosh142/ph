"use client";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto text-center"
        >
          At Talent Hunters, we are committed to bridging the gap between
          exceptional talent and innovative companies. Our mission is to empower
          businesses with the right people, fostering growth, innovation, and
          success in an ever-evolving global marketplace.
        </motion.p>
      </div>
    </section>
  );
}
