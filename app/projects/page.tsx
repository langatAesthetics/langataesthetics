"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#00e20a] mb-12 text-center">
        All Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                loading="eager"
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-[#00e20a]">
                  {project.title}
                </h3>

                {/* Action Icons */}
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#00c707] transition"
                      title="View Live Project"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#00c707] transition"
                      title="View GitHub Repo"
                    >
                      <Github size={22} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Tech Stack */}
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
