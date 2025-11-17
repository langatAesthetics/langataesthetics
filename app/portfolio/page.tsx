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

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((portfolio, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Project Image */}
                        <div className="relative w-full h-56">
                            <Image
                                src={portfolio.image}
                                alt={portfolio.title}
                                fill
                                loading="eager"
                                className="object-cover"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-semibold text-[#14213d]">
                                    {portfolio.title}
                                </h3>

                                {/* Action Icons */}
                                <div className="flex space-x-3">
                                    {portfolio.liveLink && (
                                        <a
                                            href={portfolio.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-800 hover:text-[#fca311] transition"
                                            title="View Live Project"
                                        >
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                    {portfolio.githubLink && (
                                        <a
                                            href={portfolio.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-800 hover:text-[#fca311] transition"
                                            title="View GitHub Repo"
                                        >
                                            <Github size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4">{portfolio.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
