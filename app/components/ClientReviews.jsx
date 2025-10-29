"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "@framer",
    image: "/clients/emily.jpg",
    text: `"The Basics Template is awesome! It's user-friendly & visually appealing. I was able to customize it effortlessly, which saved me so much time. Highly recommend it to anyone looking for simplicity and efficiency in their projects!"`,
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "@contra",
    image: "/clients/michael.jpg",
    text: `"I absolutely love the Basics Template! It’s perfect for organizing my tasks and projects. The layout is clean, making it easy to navigate. I appreciate the attention to detail. This template has become an essential tool in my daily routine!"`,
  },
  {
    id: 3,
    name: "Jessica Brown",
    role: "@superhi",
    image: "/clients/jessica.jpg",
    text: `"The Basics Template is a game-changer! It helped me streamline my processes and stay focused. The design is sleek and modern, which keeps me motivated. I can't imagine working without it now. Truly a must-have for anyone seeking clarity in their work!"`,
  },
];

export default function ClientReviews() {
  return (
    <section className="max-w-3xl mx-auto pt-20  px-6">


      <div className="space-y-10">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
            className="p-8 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm transition-all duration-500"
          >
            {/* Quote */}
            <p className="text-lg text-gray-700 leading-relaxed relative">
              <span className="text-4xl text-gray-400 absolute -left-3 top-0">
                &ldquo;
              </span>
              {review.text}
            </p>

            {/* Footer: profile */}
            <motion.div
              whileHover="hovered"
              className="flex items-center gap-4 mt-6"
            >
              <motion.div
                variants={{
                  hovered: { rotate: 6 },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-12 h-12 rounded-full overflow-hidden"
              >
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <div>
                <motion.h4
                  variants={{
                    hovered: { fontWeight: 700 },
                  }}
                  className="text-base font-semibold text-gray-900 transition-all"
                >
                  {review.name}
                </motion.h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
