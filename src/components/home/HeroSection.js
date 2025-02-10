"use client";
import { motion } from "framer-motion";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90 z-10" />
      <img
        src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
        alt="Team working"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Team with
            <span className="block bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent mt-4">
              Elite Talent Solutions
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Strategic workforce solutions powered by industry expertise and
            cutting-edge matching technology
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-lg px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg">
              Start Building Your Dream Team
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
