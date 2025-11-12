"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between bg-white text-black px-6 md:px-16 py-20 gap-12"
    >
      {/* Left: Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-[#00e20a] mb-6">Get in Touch</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e20a]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e20a]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e20a]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00e20a] text-white font-semibold py-3 rounded-lg hover:bg-[#00c707] transition"
        >
          Send Message
        </button>
      </form>

      {/* Right: Info Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e20a]">
          Let’s Collaborate
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Have a project idea, a website redesign, or just want to say hi?  
          I’d love to connect and discuss how I can help bring your vision to life.
          Fill out the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}
