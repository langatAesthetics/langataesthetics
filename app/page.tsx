"use client";

import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Github, Linkedin, Mail } from "lucide-react";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Hi, I'm Langat"],
    typeSpeed: 100,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });

  return (
    <main>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-white text-black">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/images/heroimg.jpg"
            alt="Langat Aesthetics"
            width={400}
            height={400}
            className=" object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
          {/* Typing Animation */}
          <h1 className="text-3xl md:text-4xl text-[#00c707] font-bold mb-4">
            <span>{text}</span>
            <Cursor />
          </h1>

          <p className="text-lg md:text-xl text-gray-900 mb-6">
            I'm a Frontend Developer. I build modern web applications using Next.js, React, Tailwind CSS.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/langataesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c707] transition"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/langataesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c707] transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://linkedin.com/in/langataesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c707] transition"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact/>
      </section>
    </main>
  );
}
