"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left: Contact Form */}
        <form
          action="https://formspree.io/f/mrbrbanw"
          method="POST"
          className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8 space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d]">
            Send a Message
          </h2>

          <p className="text-gray-600">
            Fill out the form and I’ll get back to you as soon as possible.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#14213d] text-white font-semibold rounded-lg hover:bg-[#fca311] transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>

        {/* Right: Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14213d] mb-4">
            Contact Information
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            I’m available for freelance work, collaborations, and long-term
            projects. You can reach me directly through the details below.
          </p>

          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-4">
              <Mail className="text-[#fca311]" />
              <a
                href="mailto:langataesthetics@gmail.com"
                className="hover:underline text-gray-800"
              >
                langataesthetics@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#fca311]" />
              <a
                href="tel:+254780576547"
                className="hover:underline text-gray-800"
              >
                0780 576 547
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#fca311]" />
              <span className="text-gray-800">Remote</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
