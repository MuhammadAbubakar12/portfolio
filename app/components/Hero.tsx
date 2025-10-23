"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!mounted) return null;

  // Fixed animation variants with proper typing
  const fadeUpVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const scaleInVariants: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Cosmic ambiance background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Deep space gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.1)_0%,rgba(88,28,135,0.2)_50%,rgba(17,24,39,0.6)_100%)]" />
        
        {/* Subtle nebula glow */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.15), transparent 50%)",
            filter: "blur(80px)",
          }}
        />

        {/* Twinkling stars (lightweight, no JS) */}
        {prefersReducedMotion ? null : (
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute block h-px w-px rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: "0 0 4px 1px rgba(255,255,255,0.8)",
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        {/* Availability badge */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm sm:mb-8"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-green-400"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm text-white/80">Open to new opportunities</span>
        </motion.div>

        {/* Profile image with advanced ambiance */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={scaleInVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 flex justify-center sm:mb-8"
        >
          <div className="relative">
            {/* Pulsing halo (outer glow) */}
            <motion.div
              aria-hidden
              className="absolute -inset-16 rounded-full opacity-60"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 60px 20px rgba(6,182,212,0.2)",
                        "0 0 80px 30px rgba(6,182,212,0.3)",
                        "0 0 60px 20px rgba(6,182,212,0.2)",
                      ],
                    }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Orbiting particles around image */}
            {prefersReducedMotion ? null : (
              <>
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-cyan-300"
                    style={{
                      top: "50%",
                      left: "50%",
                      boxShadow: "0 0 6px 2px rgba(6,182,212,0.8)",
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: [0, Math.cos((i * Math.PI) / 4) * 80, 0],
                      y: [0, Math.sin((i * Math.PI) / 4) * 80, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </>
            )}

            {/* Inner glowing ring */}
            <motion.div
              aria-hidden
              className="absolute inset-[-8px] rounded-full"
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                filter: "blur(1px)",
                mask: "radial-gradient(transparent 85%, black 90%)",
                WebkitMask: "radial-gradient(transparent 85%, black 90%)",
              }}
            />

            {/* Profile photo */}
            <div
              className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-cyan-400 shadow-2xl transition-transform hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48"
              style={{
                border: "4px solid #06b6d4",
                boxShadow:
                  "0 0 40px rgba(6,182,212,0.5), 0 20px 25px -5px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src="/images/profile.webp"
                alt="Muhammad Abubakar - Senior Data Engineer and AWS Certified Specialist"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-full border-2 border-white/15"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-heading"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Muhammad{" "}
          <motion.span
            className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundSize: "200% 200%",
              backgroundImage: "linear-gradient(to right, #f59e0b, #06b6d4, #f59e0b)",
            }}
          >
            Abubakar
          </motion.span>
        </motion.h1>

        {/* Professional title (SEO-rich) */}
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-xl font-light text-blue-100 sm:mb-8 sm:text-2xl md:text-3xl"
        >
          Senior Data Engineer • AWS Solutions Architect • Big Data Expert
        </motion.h2>

        {/* Professional summary (SEO-optimized) */}
        <motion.p
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={fadeUpVariants}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-gray-300 sm:mb-12 sm:text-lg md:text-xl"
  style={{ lineHeight: 1.7 }}
>
  <strong className="text-white">AWS-certified Data Architect</strong> with deep expertise in{" "}
  <strong className="text-white">cloud-native platforms</strong>,{" "}
  <strong className="text-white">big data engineering</strong>, and{" "}
  <strong className="text-white">real-time analytics</strong>. Proven success delivering{" "}
  <strong className="text-white">high-throughput ETL pipelines</strong> using{" "}
  <strong className="text-white">Apache Spark</strong>,{" "}
  <strong className="text-white">Databricks</strong>, and{" "}
  <strong className="text-white">AWS EMR</strong>, supporting{" "}
  <strong className="text-white">AML compliance</strong> and{" "}
  <strong className="text-white">fraud detection</strong> at scale.
</motion.p>

        {/* CTA buttons */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 font-bold text-gray-900 transition-all hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
            style={{
              background: "linear-gradient(to right, #f59e0b, #f97316)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            <span>Explore Projects</span>
            <motion.svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="group-hover:translate-x-1"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </a>

          <a
            href="#contact"
            className="rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            Contact Me
          </a>

          <a
            href="/cv/Muhammad-Abubakar-CV.pdf"
            download
            className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white transition-all hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
            style={{
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l4-4m-4 4l-4-4M12 4v8" />
            </svg>
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Rest of the component remains the same... */}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}   