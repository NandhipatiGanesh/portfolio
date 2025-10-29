"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaXTwitter, FaYoutube, FaLinkedin, FaPaperPlane } from "react-icons/fa6";

export default function SocialIcons({ social }: { social: { x: string; youtube: string; linkedin: string; mail: string } }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const icons = [
    { id: "x", icon: <FaXTwitter />, label: "Twitter/X", link: social.x },
    { id: "youtube", icon: <FaYoutube />, label: "YouTube", link: social.youtube },
    { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn", link: social.linkedin },
    { id: "mail", icon: <FaPaperPlane />, label: "Mail", link: social.mail },
  ];

  return (
    <div className="flex items-center gap-5 mt-6 text-[1.4rem] text-black relative">
      {icons.map(({ id, icon, label, link }) => (
        <div
          key={id}
          className="relative flex flex-col items-center justify-center"
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            {icon}
          </a>

          {/* Tooltip popover */}
          <AnimatePresence>
            {hovered === id && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 12, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute bottom-[-2.5rem] bg-white shadow-md rounded-lg text-xs font-medium px-3 py-1 text-gray-800 whitespace-nowrap border border-gray-100"
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
