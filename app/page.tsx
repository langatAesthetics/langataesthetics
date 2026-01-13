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
          <h1 className="text-3xl md:text-4xl text-[#14213d]  font-bold mb-4">
            Hi, I'm Langat
          </h1>

          <p className=" text-gray-900 mb-6">
            I’m a Frontend Developer focused on building fast, accessible, and modern web applications using Next.js, React, and Tailwind CSS.
          </p>

          <a
            href="/Langat_Aesthetics_Resume.pdf"
            download
            className="mb-6 text-[#fca311] underline font-medium hover:text-[#fca311]/80 transition"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/langataesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fca311] transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/langat-aesthetics-671a032b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fca311] transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:langataesthetics@gmail.com"
              className="hover:text-[#fca311] transition"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto w-full ">
        <div className="rounded-lg shadow-lg p-6  transition-all duration-300 bg-white/10  backdrop-blur-md border-white/20 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="md:col-span-1">
              <Image
                src="/images/placeholder.svg" // replace with your actual image
                alt="Langat Aesthetics"
                width={400}
                height={400}
                className="rounded-sm  object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="mb-6">Duncan Langat, a frontend developer with a software development background, focused on building clean, fast, and user-friendly web applications.</p>
              <p className="mb-6"> I work primarily with modern JavaScript frameworks like Next.js and React, paying close attention to performance, accessibility, and scalable UI design.</p>
              <div className="flex justify-end">
                <a href="/about" className="mb-6 text-[#fca311] underline font-medium hover:text-[#fca311]/80 transition">Learn More About Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
