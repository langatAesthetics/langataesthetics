"use client";
import { useState, useEffect } from "react";

const techStacks = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Node.js",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Auto-close dropdown 5 seconds after opening
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 5000); // 5000ms = 5 seconds
    }
    return () => clearTimeout(timer); // cleanup if dropdown closes early
  }, [open]);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">Langat Aesthetics</div>

      {/* Tech Stack Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="font-medium hover:text-[#00c707] transition"
        >
          Tech Stack
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden z-50">
            {techStacks.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
