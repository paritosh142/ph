"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  index,
  details = [], // Add default value for details
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="relative group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 font-semibold flex items-center group"
            >
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            title={title}
            description={description}
            details={details}
            image={image}
            icon={icon}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Modal({ title, description, details = [], image, icon, onClose }) {
  // Add default value for details
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden"
      >
        <div className="relative h-64">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow-lg">
            {icon}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Key Features:
          </h3>
          <ul className="list-disc pl-5 mb-6">
            {details.map((detail, index) => (
              <li key={index} className="text-gray-600 mb-2">
                {detail}
              </li>
            ))}
          </ul>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
