import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion — fully responsive and SEO optimized.",
      image: "/images/placeholderimg.jpg",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Coming Soon Project",
      description:
        "An upcoming project — stay tuned for something amazing!",
      image: "/images/placeholder.svg",
      tech: ["???", "???", "???"],
    },
    {
      title: "Coming Soon Project",
      description:
        "An upcoming project — stay tuned for something amazing!",
      image: "/images/placeholder.svg",
      tech: ["???", "???", "???"],
    },
  ];

  return (
    <section className="bg-white text-black py-6 px-6 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#00e20a] mb-12 text-center">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-[#00e20a]">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-[#00e20a]/10 text-[#00e20a] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
