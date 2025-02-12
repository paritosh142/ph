"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90 z-10" />
      <img
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        alt="Contact Us Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Get in Touch
          <span className="block bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent mt-4">
            We're Here to Help
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Have questions or need assistance? Our team is ready to support you.
        </p>
      </motion.div>
    </section>
  );
}
