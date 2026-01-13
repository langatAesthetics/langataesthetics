"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-12 text-center">
        Welcome to my Portfolio
      </h2>

      {/* Constrained container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Project Image */}
              <div className="relative w-full h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="eager"
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#14213d]">
                    {item.title}
                  </h3>

                  {/* Action Icons */}
                  <div className="flex space-x-3">
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#fca311] transition"
                        title="View Live Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#fca311] transition"
                        title="View GitHub Repo"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
