// components/WorksSection.tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Velour Studio",
    image: "/works/velour.jpg",
    date: "9.25",
    company: "Velour Studio LLC",
    link: "#",
  },
  {
    title: "Lumen Theory",
    image: "/works/lumen.jpg",
    date: "3.25",
    company: "Lumen Theory Inc",
    link: "#",
  },
  // Add more here...
];

export default function WorksSection() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-2">
     

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {works.map((work) => (
            <div key={work.title} className="group">
              {/* Thumbnail */}
              <div className="overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] relative">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Metadata */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                  {work.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-500 text-sm">
                  <span>{work.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span>{work.company}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-0.5 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all text-sm"
                  >
                    Live Site
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
