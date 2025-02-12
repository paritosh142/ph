"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services does Talent Hunters offer?",
    answer:
      "Talent Hunters offers a range of services including tech talent acquisition, executive leadership search, and project-based staffing solutions. We specialize in matching top-tier professionals with innovative companies across various industries.",
  },
  {
    question: "How long does the hiring process typically take?",
    answer:
      "The hiring process duration can vary depending on the specific role and requirements. On average, we aim to present qualified candidates within 2-3 weeks. For more urgent placements, we can expedite the process. We always prioritize finding the right fit over rushing the process.",
  },
  {
    question: "Do you offer international recruitment services?",
    answer:
      "Yes, we provide international recruitment services and have a global network of talent across various industries and regions. Our team is experienced in navigating the complexities of international hiring, including visa requirements and cultural considerations.",
  },
  {
    question:
      "What makes Talent Hunters different from other recruitment agencies?",
    answer:
      "We combine cutting-edge AI-powered matching technology with deep industry expertise to provide precision-matched candidates that align with both technical requirements and company culture. Our personalized approach, extensive network, and commitment to long-term success set us apart.",
  },
  {
    question: "How do you ensure the quality of candidates?",
    answer:
      "We have a rigorous vetting process that includes technical assessments, behavioral interviews, and reference checks. Our AI-powered matching algorithm also helps in initial screening. We only present candidates who we believe are an excellent fit for both the role and the company culture.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "While we have a strong focus on the tech industry, we also serve a wide range of sectors including finance, healthcare, e-commerce, and more. Our expertise spans across various functional areas within these industries.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
