"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  HeartIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      variants={footerVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-24 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 md:w-1/3"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-lg flex items-center justify-center">
                <Image src="/logo.png" width={100} height={100} alt="Logo" />
              </div>
              <span className="text-2xl font-bold">Talent Wave</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses through strategic talent solutions since
              2020
            </p>
          </motion.div>

          {/* Other Columns */}
          <div className="flex flex-col md:flex-row gap-12 md:w-2/3 justify-end">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold mb-4 w-32">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                ].map(([title, href]) => (
                  <Link
                    key={title}
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {title}
                    <span className="block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 w-[200px]">
                  <MapPinIcon className="w-20 mt-1 text-blue-400" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">
                      6th Floor, Good Earth Business Bay -1, Golf Course Rd,
                      Ext, Sector 58, Gurugram, Haryana 122101
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2025 TalentWave</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>All rights reserved</span>
          </div>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 w-full"
      />
    </motion.footer>
  );
};

export default Footer;
