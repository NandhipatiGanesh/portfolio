"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, tabs } from "../data";
import { Text } from "../constants/text";
import colors from "../constants/colors";
import SocialIcons from "./social-icons";
import { useRef, useState } from "react";
import Tabs from "./tabs";  


export default function Hero() {
  const { name, title, bio, social } = personalInfo;
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll into swing motion (negative = swing up, positive = swing down)
  const swingY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Container animation for initial stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Individual item animation
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Tab animation
  const tabItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section ref={sectionRef} className="w-full h-full" style={{ backgroundColor: colors.bg }}>
      <motion.div 
        className="max-w-2xl mx-auto mt-28"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: swingY, opacity }}
      >
        <motion.div
          variants={item}
          className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-md border-4 border-[white] transition-transform duration-500 ease-out hover:rotate-6"
          style={{ backgroundColor: colors.bg }}
        >
          <Image
            src="/myprofileimage.jpg"
            alt={name}
            width={80}
            height={80}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div variants={item}>
          <Text
            variant="h1"
            color="custom"
            customColor="#000"
            className="font-bold text-3xl sm:text-4xl"
          >
            Hey, I'm {name}.
          </Text>
        </motion.div>

        <motion.div variants={item}>
          <Text
            variant="p"
            color="custom"
            customColor="#555"
            className="mt-3 text-gray-600 leading-relaxed"
          >
            {title}
            <br />
            {bio}
          </Text>
        </motion.div>

        <motion.div variants={item}>
          <SocialIcons social={social} />
        </motion.div>
      </motion.div>
       <Tabs />
    </section>
  );
}