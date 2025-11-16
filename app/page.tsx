"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

// Dynamically import Contact to reduce initial JS
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

export default function Home() {


  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="antialiased">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-8 md:px-16 py-20 bg-white">
        <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl text-[#00c707] font-bold mb-4">
            Hi, I'm Langat
          </h1>

          <p className="text-lg md:text-xl text-gray-900 mb-6">
            I'm a Frontend Developer. I build modern web applications using Next.js, React, and Tailwind CSS.
          </p>

          <a
            href="/Langat_Aesthetics_Resume.pdf"
            download
            className="mb-6 text-[#00c707] underline font-medium hover:text-[#00c707]/80 transition"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/langataesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c707] transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/langat-aesthetics-671a032b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c707] transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:langataesthetics@gmail.com"
              className="hover:text-[#00c707] transition"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white text-black px-6 md:px-16 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00e20a] mb-12 text-center">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="eager" // lazy load below-the-fold images
                />
              </div>

              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold text-[#00e20a]">
                    {project.title}
                  </h3>

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

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="px-6 py-3 underline font-semibold text-[#00c707] transition"
          >
            See All Projects
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <Contact />
      </section>
    </main>
  );
}
