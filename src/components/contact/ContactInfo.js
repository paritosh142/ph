"use client";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Contact Information
      </h2>
      <div className="space-y-6">
        <motion.div
          className="flex items-center"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <p className="text-gray-700">
            6th Floor, Good Earth Business Bay -1, Golf Course Rd, Ext, Sector
            58, Gurugram, Haryana 122101
          </p>
        </motion.div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Business Hours
        </h3>
        <div className="space-y-2">
          <p className="text-gray-700 flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
