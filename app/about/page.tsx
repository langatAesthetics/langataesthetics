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
            Frontend Developer & Digital Problem Solver
          </p>
        </section>

        {/* ===== About Content ===== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/placeholder.svg" // replace if needed
              alt="Langat Aesthetics"
              width={420}
              height={420}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-4">
              Hi, I’m Langat
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I’m a frontend developer with a background in software development
              and a strong passion for building clean, functional, and
              user-focused digital experiences.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              I specialize in translating ideas into well-structured,
              visually appealing, and high-performance web solutions. My
              approach combines technical precision with thoughtful design,
              ensuring every project is scalable, accessible, and easy to use.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Beyond writing code, I focus on understanding the purpose behind
              each product — the users, goals, and real-world problems it solves.
              This allows me to collaborate effectively and deliver solutions
              that create real value.
            </p>
          </div>
        </section>

        {/* ===== Education ===== */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-6">
            Education
          </h2>

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
                desc: "Designing and building responsive, fast, and scalable websites using modern technologies such as Next.js, React, and Tailwind CSS.",
              },
              {
                title: "UX Design",
                desc: "Creating intuitive user experiences with a strong focus on usability, accessibility, and clear user journeys.",
              },
              {
                title: "Graphic Design",
                desc: "Designing clean visual assets that align with brand identity and enhance digital presentation.",
              },
              {
                title: "Content Writing",
                desc: "Writing clear, engaging, and purpose-driven content that communicates ideas effectively.",
              },
              {
                title: "Virtual Assistance",
                desc: "Providing reliable remote support including administrative tasks, research, and digital coordination.",
              },
              {
                title: "Mobile App Development",
                desc: "I design and develop cross-platform mobile applications that are fast, intuitive, and user-focused.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#14213d] mb-2">
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
