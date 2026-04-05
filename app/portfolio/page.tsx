"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-[#ffff] text-[#000000] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ===== Header ===== */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#14213D] mb-4">
            My Portfolio
          </h1>
          <p className="text-gray-700 text-lg">
            A collection of real-world projects and client work demonstrating
            practical solutions, clean design, and scalable development.
          </p>
        </section>

        {/* ===== Featured Project ===== */}
        {portfolio[0] && (
          <section className="bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2">
            
            {/* Image */}
            <div className="relative w-full h-72 md:h-full">
              <Image
                src={portfolio[0].image}
                alt={portfolio[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#14213D] mb-3">
                {portfolio[0].title}
              </h2>

              <p className="text-gray-700 mb-4">
                {portfolio[0].description}
              </p>

              <div className="flex space-x-4 mt-4">
                {portfolio[0].liveLink && (
                  <a
                    href={portfolio[0].liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-[#14213D] text-white rounded-md hover:bg-[#FCA311] transition"
                  >
                    <ExternalLink size={18} />
                    Live Site
                  </a>
                )}

                {portfolio[0].githubLink && (
                  <a
                    href={portfolio[0].githubLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-[#14213D] text-[#14213D] rounded-md hover:bg-[#14213D] hover:text-white transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ===== Portfolio Grid ===== */}
        <section>
          <h2 className="text-2xl font-bold text-[#14213D] mb-8 text-center">
            More Work
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  {/* Image */}
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col">
                    <h3 className="text-lg font-semibold text-[#14213D] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex space-x-3">
                        {item.liveLink && (
                          <a
                            href={item.liveLink}
                            target="_blank"
                            className="text-gray-700 hover:text-[#FCA311] transition"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}

                        {item.githubLink && (
                          <a
                            href={item.githubLink}
                            target="_blank"
                            className="text-gray-700 hover:text-[#FCA311] transition"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-[#14213D] mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-700 mb-6">
            Let’s work together to bring your ideas to life.
          </p>

          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#FCA311] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Get In Touch
          </a>
        </section>

      </div>
    </main>
  );
}