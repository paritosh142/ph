"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HeartIcon,
  EnvelopeIcon,
  PhoneIcon,
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">TH</span>
              </div>
              <span className="text-2xl font-bold">Talent Hunters</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses through strategic talent solutions since
              2020
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["About", "/about"],
                ["contact", "/contact"],
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
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:hello@talenthunters.com"
                    className="text-gray-300 hover:text-white"
                  >
                    hello@talenthunters.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+11234567890"
                    className="text-gray-300 hover:text-white"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: LinkedinIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
                { icon: FacebookIcon, href: "#" },
              ].map((SocialIcon, idx) => (
                <a
                  key={idx}
                  href={SocialIcon.href}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  aria-label={`Social media link ${idx + 1}`}
                >
                  <SocialIcon.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2025 TalentHunters</span>
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
