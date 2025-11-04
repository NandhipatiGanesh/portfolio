"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { tabs, personalInfo } from "../data";
import { useRef, useState } from "react";
import { useLenis } from "./LenisProvider";
import ServicesSection from "./service-section";
import ClientReviews from "./ClientReviews";
import ConnectSection from "./ConnectSection";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const tabItem = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
};

export default function Tabs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const swingY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="w-full">
      <motion.div
        className="flex flex-wrap items-center max-w-2xl mx-auto gap-6 mt-20 text-gray-600 font-medium"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: swingY, opacity }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const lenis = useLenis();

          return (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                // scroll to the matching section id using Lenis when available
                if (lenis && typeof lenis.scrollTo === "function") {
                  lenis.scrollTo(`#${tab.id}`);
                } else {
                  const el = document.getElementById(tab.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variants={tabItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`capitalize px-6 py-2 rounded-full  transition-all duration-500 relative overflow-hidden
              ${
                isActive
                  ? "text-black border-transparent bg-white/20 backdrop-blur-md shadow-lg before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/50 before:to-white/10 before:opacity-70 before:blur-[3px] before:z-[-1]"
                  : "text-gray-600 hover:text-black  bg-transparent"
              }
            `}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </motion.div>
      {/* content panel for the active tab */}
      <div className="max-w-4xl mx-auto mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 p-6 rounded-lg "
          >
            {(() => {
              switch (activeTab) {
                case "works":
                  return (
                    <div>
                      <h3 className="text-lg font-semibold">Ventures</h3>
                      <p className="mt-2 text-gray-600">
                        I explore products and startups, building small experimental projects and collaborating with founders to ship user-focused features.
                      </p>
                    </div>
                  );
                case "services":
                  return (
                    <div>
                      <ServicesSection />
                    </div>
                  );
                case "clients":
                  return (
                    <div>
                     <ClientReviews />
                    </div>
                  );
                case "techstack":
                  return (
                    <div>
                      <h3 className="text-lg font-semibold">Tech Stack</h3>
                      <ul className="mt-2 text-gray-600 list-disc ml-5">
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Framer Motion</li>
                      </ul>
                    </div>
                  );
                case "connect":
                  return (
                    <div className="max-w-2xl">
                      <ConnectSection />
                    </div>
                  );
                default:
                  return (
                    <div>
                      <h3 className="text-lg font-semibold">{tabs.find(t => t.id === activeTab)?.label}</h3>
                      <p className="mt-2 text-gray-600">Content coming soon.</p>
                    </div>
                  );
              }
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}