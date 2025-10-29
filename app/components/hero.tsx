import Image from "next/image";
import { personalInfo, tabs } from "../data";
import { Text } from "../constants/text";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa6";
import colors from "../constants/colors";
import SocialIcons from "./social-icons";



export default function Hero() {
  const { name, title, bio, social } = personalInfo;
 
  return (
    <>
    <section className="w-full h-full">
        <div className="max-w-2xl mx-auto mt-28">
        <div
          className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-md border-4 border-[white]"
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
      </div>
        <Text
        variant="h1"
        color="custom"
        customColor="#000"
        className="font-bold text-3xl sm:text-4xl"
      >
        Hey, I'm {name}.
      </Text>
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
       <SocialIcons social={social} />
     </div>
      <div className="flex flex-wrap items-center max-w-2xl mx-auto  gap-6 mt-20 text-gray-600 font-medium">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`${
              index === 0
                ? "bg-black text-white px-5 py-1.5 rounded-full"
                : "text-gray-600 hover:text-black transition"
            } capitalize`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
    </>
  );
}
