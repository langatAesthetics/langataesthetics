"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className=" text-[#000000] px-6 md:px-16 py-20">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* ===== Header ===== */}
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#14213D] mb-4">
                        Projects
                    </h1>
                    <p className="text-gray-700 text-lg">
                        A collection of personal builds, experiments, and product ideas —
                        showcasing how I think, design, and develop real-world solutions.
                    </p>
                </section>

                {/* ===== Projects Grid ===== */}
                <section>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 ">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col h-full">

                                        {/* Title + Status */}
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-[#14213D]">
                                                {project.title}
                                            </h3>

                                            {project.status && (
                                                <span className="text-xs bg-[#FCA311]/20 text-[#FCA311] px-2 py-1 rounded-full">
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 text-sm mb-4">
                                            {project.description}
                                        </p>

                                        {/* ===== Features Section (NEW) ===== */}
                                        {project.features && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-[#14213D] mb-2">
                                                    Key Features:
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    {project.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-[#FCA311] mr-2">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Tech Stack & Actions*/}
                                        <div className="flex justify-between items-start mb-2">
                                            {project.tech && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tech.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs bg-[#E5E5E5] text-[#14213D] px-2 py-1 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="flex  items-center ">
                                                <div className="flex space-x-3">
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            className="text-gray-700 hover:text-[#FCA311] transition"
                                                        >
                                                            <Github size={16} />
                                                        </a>
                                                    )}

                                                    {project.liveLink && (
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            className="text-gray-700 hover:text-[#FCA311] transition"
                                                        >
                                                            <ExternalLink size={16} />
                                                        </a>
                                                    )}
                                                </div>
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
                    <p className="text-gray-700 mb-6">
                        I'm continuously building and refining new ideas. Stay connected to
                        see what’s next.
                    </p>

                    <a
                        href="/#contact"
                        className="inline-block px-6 py-3 bg-[#FCA311] text-[#14213D] font-semibold rounded-md hover:opacity-90 transition"
                    >
                        Get In Touch
                    </a>
                </section>

            </div>
        </main>
    );
}