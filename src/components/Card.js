"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ title, description, image, icon, index }) => {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/services");
  };

  return (
    <motion.div
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
            onClick={handleExplore}
            className="text-blue-600 font-semibold flex items-center group cursor-pointer"
          >
            Explore Service
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
