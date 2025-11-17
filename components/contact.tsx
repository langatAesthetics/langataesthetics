"use client";

export default function Contact() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Contact Form */}
        <form
          action="https://formspree.io/f/mrbrbanw" // ✅ Your live Formspree endpoint
          method="POST"
          className="w-full md:w-1/2 bg-gray-50 shadow-lg rounded-xl p-8 space-y-4 border border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-4">
            Get In Touch
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#14213d] text-white font-semibold rounded-lg hover:bg-[#fca311] transition"
          >
            Send Message
          </button>
        </form>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#14213d] mb-4">
            Let’s Collaborate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have an idea or project in mind? Let’s connect and make it a
            reality. Whether you need a modern web app, a responsive portfolio,
            or a custom system, I’m here to help turn your vision into an elegant
            digital experience.
          </p>
        </div>
      </div>
    </section>
  );
}
