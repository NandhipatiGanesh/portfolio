"use client";   
import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Share2, Smartphone, Edit3, ChevronUp } from 'lucide-react';

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const services = [
    {
      id: 1,
      icon: Sparkles,
      title: "Web Design & Development",
      description: "Multi page websites & landing pages crafted with precision in Framer and much more, guiding you towards achieving your goals.",
      images: [
        { title: "Commerce Stores", url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop" },
        { title: "Website Redesigns", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop" },
        { title: "Full Website Builds", url: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&h=400&fit=crop" },
        { title: "Landing Pages", url: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?w=400&h=400&fit=crop" }
      ],
      logos: ["Framer", "React", "Next.js", "Tailwind", "TypeScript", "Figma", "Webflow", "Shopify"]
    },
    {
      id: 2,
      icon: Share2,
      title: "Social + Email Marketing",
      description: "Strategic marketing campaigns across social media and email platforms to boost engagement and drive conversions for your brand.",
      images: [
        { title: "Social Media Strategy", url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop" },
        { title: "Email Campaigns", url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=400&fit=crop" },
        { title: "Content Creation", url: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=400&fit=crop" },
        { title: "Analytics & Insights", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop" }
      ],
      logos: ["Instagram", "Facebook", "LinkedIn", "Mailchimp", "Twitter", "TikTok", "HubSpot", "Buffer"]
    },
    {
      id: 3,
      icon: Smartphone,
      title: "App + Product Design",
      description: "Beautiful, intuitive mobile and web applications designed with user experience at the forefront, from concept to launch.",
      images: [
        { title: "Mobile Apps", url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop" },
        { title: "UI/UX Design", url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=400&fit=crop" },
        { title: "Prototyping", url: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&h=400&fit=crop" },
        { title: "User Testing", url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop" }
      ],
      logos: ["React Native", "Flutter", "Swift", "Kotlin", "Figma", "Sketch", "Adobe XD", "InVision"]
    },
    {
      id: 4,
      icon: Edit3,
      title: "Copywriting",
      description: "Compelling, conversion-focused copy that captures your brand voice and resonates with your target audience across all platforms.",
      images: [
        { title: "Website Copy", url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop" },
        { title: "Blog Content", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop" },
        { title: "Ad Copy", url: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&h=400&fit=crop" },
        { title: "Brand Messaging", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" }
      ],
      logos: ["Grammarly", "Hemingway", "Copy.ai", "Jasper", "SEO Tools", "Google Docs", "Notion", "Airtable"]
    }
  ];

  const toggleAccordion = (id: any) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen py-20 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
       

        {/* Accordions */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openAccordion === service.id;

            return (
              <motion.div
                key={service.id}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "#ffffff" : "transparent",
                  borderRadius: isOpen ? "24px" : "0px",
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-b border-gray-200"
                style={{
                  boxShadow: isOpen ? "0 10px 40px rgba(0,0,0,0.08)" : "none",
                  borderBottom: isOpen ? "none" : "1px solid #e5e7eb"
                }}
              >
                {/* Header */}
                <motion.button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  whileHover={{ scale: isOpen ? 1 : 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        backgroundColor: isOpen ? "#fee2e2" : "transparent",
                        rotate: isOpen ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 flex items-center justify-center"
                    >
                      <Icon className={`w-6 h-6 ${isOpen ? 'text-red-500' : 'text-gray-700'}`} />
                    </motion.div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  {/* Image Previews (closed state) */}
                  {!isOpen && (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {service.images.slice(0, 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <ChevronUp className="w-5 h-5 text-gray-400 ml-2" />
                    </div>
                  )}

                  {/* Chevron (open state) */}
                  {isOpen && (
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    </motion.div>
                  )}
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
                          {service.description}
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
                          {service.images.map((img, idx) => (
                            <motion.div
                              key={img.title}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                              whileHover={{ scale: 1.05, y: -5 }}
                              className="group cursor-pointer"
                            >
                              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 mb-3">
                                <img
                                  src={img.url}
                                  alt={img.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <p className="text-sm text-gray-500 text-center font-medium">
                                {img.title}
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
                            {[...service.logos, ...service.logos, ...service.logos].map((logo, idx) => (
                              <div
                                key={idx}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;