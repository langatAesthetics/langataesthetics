// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Langat Aesthetics. All rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/langataesthetics"
            target="_blank"
            className="hover:text-[#fca311] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/langat-aesthetics-671a032b5/"
            target="_blank"
            className="hover:text-[#fca311] transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:langataesthetics@gmail.com"
            className="hover:text-[#fca311] transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
