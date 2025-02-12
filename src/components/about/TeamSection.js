"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", image: "/team/john-doe.jpg" },
  { name: "Jane Smith", role: "COO", image: "/team/jane-smith.jpg" },
  { name: "Mike Johnson", role: "CTO", image: "/team/mike-johnson.jpg" },
  {
    name: "Sarah Brown",
    role: "Head of Talent Acquisition",
    image: "/team/sarah-brown.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-100 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Leadership Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                View Profile
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
