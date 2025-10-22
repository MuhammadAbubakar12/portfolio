'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abubakar.dataengineer@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: 'abubakar.dataengineer@gmail.com',
      href: 'mailto:abubakar.dataengineer@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: 'Phone',
      value: '+92 335 4631993',
      href: 'tel:+923354631993'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'muhammadabubakar12',
      href: 'https://linkedin.com/in/muhammadabubakar12'
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
    >
      {/* Animated background glow elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Let’s <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
          Have a project, role, or idea in mind? I’d love to collaborate and bring it to life.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-12 px-6">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-4">Let’s Get in Touch</h3>
            <p className="text-blue-200 text-lg leading-relaxed">
              Whether you’re looking for a data engineering expert, cloud consultant, or project collaborator — feel free to reach out. I respond quickly and enjoy meaningful technical discussions.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-800/20 to-purple-800/20 border border-white/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {info.icon}
                </div>
                <div>
                  <p className="text-blue-300 text-sm">{info.label}</p>
                  <p className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-400/30 rounded-xl p-6 mt-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Available for Opportunities</span>
            </div>
            <p className="text-green-200 text-sm">
              Open to new projects, consulting work, and full-time opportunities in cloud data engineering and analytics.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white/5 via-blue-900/10 to-purple-900/10 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all duration-500">
          <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-blue-200 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-blue-200 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-blue-200 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Discussion / Job Opportunity"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-blue-200 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <p className="text-blue-300 text-sm text-center">
              I typically respond within 24 hours
            </p>
          </form>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-20 pt-8 border-t border-white/10 text-blue-300 text-sm">
        Built with ❤️ using Next.js, Tailwind CSS — deployed on Vercel
        <p className="text-blue-400 mt-2">© 2024 Muhammad Abubakar. All rights reserved.</p>
      </div>
    </section>
  );
}
