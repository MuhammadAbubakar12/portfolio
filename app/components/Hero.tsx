export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>

      <div className="relative max-w-6xl mx-auto text-center px-6 z-10">
        {/* Profile Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-white/80">
            Available for new opportunities
          </span>
        </div>

        {/* 🖼️ Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img
              src="/images/profile.webp" // 🧠 Place your image inside the public folder: public/profile.jpg
              alt="Muhammad Abubakar"
              className="w-full h-full object-cover"
            />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10 group-hover:border-cyan-300/50 transition-all"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Muhammad{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            Abubakar
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-200">
          Senior{" "}
          <span className="font-semibold text-white">Data Engineer</span> &{" "}
          <span className="font-semibold text-white">AWS Specialist</span>
        </h2>

        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Building{" "}
          <span className="font-semibold text-white">
            scalable data solutions
          </span>{" "}
          with
          <span className="text-cyan-400"> AWS</span>,
          <span className="text-yellow-400"> PySpark</span>, and
          <span className="text-purple-400"> cloud technologies</span> for
          <span className="font-semibold text-white">
            {" "}
            financial compliance
          </span>{" "}
          and big data processing
        </p>

        {/* ✅ Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </a>

          {/* 🆕 Download CV Button */}
          <a
            href="/Muhammad_Abubakar_CV.pdf" // Place inside 'public' folder
            download
            className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l4-4m-4 4l-4-4M12 4v8"
              />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Tech Stack Scroll */}
        <div className="mt-16">
          <div className="flex space-x-8 overflow-hidden">
            {[
              "AWS",
              "PySpark",
              "Python",
              "SQL",
              "Databricks",
              "Oracle FCCM",
              "TBAML",
              "Delta Lake",
            ].map((tech, index) => (
              <div
                key={tech}
                className="flex items-center space-x-2 text-sm text-gray-400 whitespace-nowrap animate-scroll"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
          {[
            { number: "4+", label: "Years Experience" },
            { number: "50M+", label: "Daily Records" },
            { number: "40%", label: "Performance Gain" },
            { number: "25%", label: "Cost Reduction" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
