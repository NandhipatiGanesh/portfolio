"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronUp } from 'lucide-react';

export default function AboutSection() {
     const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Commerce Stores",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop"
    },
    {
      title: "Website Redesigns",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
    },
    {
      title: "Full Website Builds",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&h=400&fit=crop"
    },
    {
      title: "Landing Pages",
      image: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=400&h=400&fit=crop"
    }
  ];

  const logos = [
    "Framer", "React", "Next.js", "Tailwind", "TypeScript", 
    "Figma", "Webflow", "Shopify", "WordPress", "Vercel"
  ];

  return (
     <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isOpen ? "#ffffff" : "transparent",
            borderRadius: isOpen ? "24px" : "0px",
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
          style={{
            boxShadow: isOpen ? "0 10px 40px rgba(0,0,0,0.1)" : "none"
          }}
        >
          {/* Header */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 text-left"
            whileHover={{ scale: isOpen ? 1 : 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  backgroundColor: isOpen ? "#fee2e2" : "#f3f4f6",
                  rotate: isOpen ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
              >
                <Sparkles className={`w-6 h-6 ${isOpen ? 'text-red-500' : 'text-gray-700'}`} />
              </motion.div>
              <h2 className={`text-3xl font-bold ${isOpen ? 'text-red-500' : 'text-gray-900'}`}>
                Web Design & Development
              </h2>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.button>

          {/* Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-8">
                  {/* Description */}
                  <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 text-lg mb-6 ml-16"
                  >
                    Multi page websites & landing pages crafted with precision in Framer
                    and much more, guiding you towards achieving your goals.
                  </motion.p>

                  {/* Book a call button */}
                  <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-16 mb-8 px-6 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Book a call
                  </motion.button>

                  {/* Service Images Grid */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-4 gap-4 mb-8"
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group cursor-pointer"
                      >
                        <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 mb-3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-sm text-gray-500 text-center font-medium">
                          {service.title}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Infinite Logo Scroll */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative overflow-hidden py-6 mt-4"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
                    
                    <motion.div
                      className="flex gap-8"
                      animate={{
                        x: [0, -1000],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                    >
                      {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium whitespace-nowrap"
                        >
                          {logo}
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
