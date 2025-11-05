// components/TechStack.tsx
import Image from "next/image";
   

const techStack = [
  { name: "React", icon: "/imges/react.png" },
  { name: "Next.js", icon: "/imges/nextjs.png" },
  { name: "HTML5", icon: "/imges/html5i.png" },
  { name: "CSS3", icon: "/imges/css3.png" },
  { name: "JavaScript", icon: "/imges/js.png" },
  { name: "Tailwind CSS", icon: "/imges/tailwindcss.png" },
  { name: "WordPress", icon: "/imges/wordpresspng.png" },
  { name: "Figma", icon: "/imges/figma.png" },
  { name: "React Native", icon: "/imges/react native.png" },
  { name: "Expo", icon: "/expo.png" },
  { name: "github", icon: "/imges/github.png" },
];

export default function TechStack() {
  return (
    <section className="w-full ">
      <div className="w-full mx-auto ">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-row items-center justify-center gap-4 p-8 rounded-3xl border border-black/10 bg-white/[0.02] backdrop-blur-sm hover:border-black/20 hover:bg-white/[0.06] transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="relative w-10 h-10">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-black/90 text-lg font-medium group-hover:text-gray-700 transition-colors duration-200">
                {tech.name}
              </span>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
