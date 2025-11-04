"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { personalInfo, tabs } from "../data";
import { Text } from "../constants/text";
import colors from "../constants/colors";
import SocialIcons from "./social-icons";
import { useRef } from "react";
import Tabs from "./tabs";

export default function Hero() {
  const { name, title, bio, social } = personalInfo;
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Softer swing motion for better look on scroll
  const rawSwingY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const swingY = useSpring(rawSwingY, { stiffness: 80, damping: 15 });

  // Smooth opacity and scale transitions
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-24"
      style={{ backgroundColor: colors.bg }}
    >
      <motion.div
        className="w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 md:mt-28 flex flex-col  "
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: swingY, opacity, scale }}
      >
        {/* Profile Image */}
        <motion.div
          variants={item}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-6 shadow-md border-4 border-white transition-transform duration-500 ease-out hover:rotate-6"
          style={{ backgroundColor: colors.bg }}
        >
          <Image
            src="/myprofileimage.jpg"
            alt={name}
            width={112}
            height={112}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Name */}
        <motion.div variants={item}>
          <Text
            variant="h1"
            color="custom"
            customColor="#000"
            className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
          >
            Hey, I'm {name}.
          </Text>
        </motion.div>

        {/* Title + Bio */}
        <motion.div variants={item}>
          <Text
            variant="p"
            color="custom"
            customColor="#555"
            className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {title}
            <br />
            {bio}
          </Text>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="mt-4">
          <SocialIcons social={social} />
        </motion.div>
      </motion.div>

      {/* Tabs Section */}
      <div className="w-full max-w-3xl mx-auto px-4 mt-10 sm:mt-12">
        <Tabs />
      </div>
    </section>
  );
}
