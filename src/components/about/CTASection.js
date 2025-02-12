"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/contact");
  };
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform the world of talent acquisition.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-50 transition-colors duration-300"
          >
            Explore Careers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
