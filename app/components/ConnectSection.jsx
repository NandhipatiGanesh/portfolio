"use client";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaCalendar,
  FaHandshake,
} from "react-icons/fa6";
import { SiFramer } from "react-icons/si";

const socials = [
  {
    id: 1,
    icon: <FaXTwitter />,
    label: "Twitter/X",
    username: "@samar_jamil7",
    link: "https://twitter.com/samar_jamil7",
  },
  {
    id: 2,
    icon: <FaYoutube />,
    label: "YouTube",
    username: "@framer_it",
    link: "https://youtube.com/framer_it",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    label: "LinkedIn",
    username: "samarjamil7",
    link: "https://linkedin.com/in/samarjamil7",
  },
  {
    id: 4,
    icon: <SiFramer />,
    label: "Framer Marketplace",
    username: "@samar",
    link: "https://framer.com/@samar",
  },
  {
    id: 5,
    icon: <FaHandshake />,
    label: "Contra",
    username: "samar_jamil",
    link: "https://contra.com/samar_jamil",
  },
  {
    id: 6,
    icon: <FaEnvelope />,
    label: "Email",
    username: "hey@framerit.com",
    link: "mailto:hey@framerit.com",
  },
  {
    id: 7,
    icon: <FaCalendar />,
    label: "Book a Call",
    username: "cal.com",
    link: "https://cal.com",
  },
];

export default function ConnectSection() {
  return (
    <section className="max-w-md py-16 mx-auto">
    

      <div className="flex flex-col gap-4">
        {socials.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-3 p-4 rounded-xl group overflow-hidden border border-gray-200 transition-all cursor-pointer"
          >
            {/* Animated background grow-up effect */}
            <motion.div
              className="absolute inset-0 bg-black rounded-xl z-0"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            ></motion.div>

            {/* Foreground content */}
            <div className="relative z-10 flex items-center gap-3 text-gray-900">
              <motion.span
                whileHover={{ rotate: 6 }}
                transition={{ type: "spring", stiffness: 250, damping: 14 }}
                className="text-xl"
              >
                {item.icon}
              </motion.span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-medium group-hover:font-semibold transition-all duration-300">
                  {item.label}
                </span>
                <span className="text-gray-500 text-sm">{item.username}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
