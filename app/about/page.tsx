import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-black px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ===== About Intro ===== */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#14213d] mb-4">
            About Me
          </h1>
          <p className="text-gray-700 text-lg">
            Fullstack Developer & Digital Problem Solver
          </p>
        </section>

        {/* ===== About Content ===== */}
        <section className="max-w-6xl mx-auto w-full ">
          <div className="rounded-lg shadow-lg p-6  transition-all duration-300 bg-white/10  backdrop-blur-md border-white/20 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              <div className="relative w-full max-w-[340px] aspect-square overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/Langat_Duncan_Software_Developer.webp" // replace with your actual image
                  alt="Langat Duncan Professional Photo"
                  fill
                  className="rounded-sm  object-cover"
                  loading="eager"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Langat Duncan</h2>
                <p className="mb-6">Fullstack developer with a background in software development,
                  focused on building clean, scalable, and user-centered digital
                  solutions.
                </p>
                <p className="mb-6">I work across both frontend and backend, combining modern
                  technologies like Next.js, React, and Node.js to create
                  high-performance applications that are both functional and visually
                  refined.
                </p>
                <p>
                  Beyond writing code, I focus on understanding the real-world problem
                  behind every project — ensuring that each solution is purposeful,
                  efficient, and delivers measurable value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Education ===== */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-6">
            Education
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#14213d]">
                Bachelor’s Degree in Software Development
              </h3>
              <p className="text-gray-700 mt-1">
                KCA University
              </p>
              <p className="text-gray-600 text-sm mt-1">
                2022 – 2026
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                My academic journey has provided a strong foundation in
                programming, systems development, and software engineering
                principles, complemented by hands-on projects and continuous
                self-learning.
              </p>
            </div>

            {/* YouTube University */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#14213D]">
                Continuous Learning (Online Resources)
              </h3>
              <p className="text-gray-700 mt-1">
                Self-directed learning through online resources
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Continuously expanding my skillset through online learning,
                tutorials, technology documentation and real-world project building. This has played a
                major role in sharpening my practical development skills and
                staying up-to-date with modern technologies.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Expertise ===== */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-8 text-center">
            Areas of Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Development",
                desc: "Building responsive, scalable, and high-performance websites using modern frameworks like Next.js and React.",
              },
              {
                title: "Fullstack Development",
                desc: "Developing complete web applications by integrating frontend interfaces with secure and scalable backend systems.",
              },
              {
                title: "Virtual Assistance",
                desc: "Providing reliable remote support including research, organization, and digital coordination.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#14213d] mb-2 ">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
