"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-30">
      {/* ===== Left Content Section ===== */}
      <section className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl space-y-6">
        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          Frontend React Developer 👋🏻
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi , I&apos;m{" "}
          <span className="text-blue-300 font-semibold">Rehman Kalawant </span>,
          a passionate front-end React Developer based in Pune 📍
        </p>
        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <span>
            <Image
              src="/linkedin.svg"
              alt="html"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
          </span>
          <span>
            <Image
              src="/github.webp"
              alt="html"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
          </span>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "html",
              "css",
              "javascript",
              "reactjs",
              "nextjs",
              "tailwindcss",
              "nodejs",
              "expressjs",
              "mongodb",
              "mysql",
              "redux",
              "git",
              "github-t",
              "vercel",
              "netlify",
              "postman",
              "swagger",
              "bootstrap",
            ].map((tech) => (
              <span
                key={tech}
                className="p-2 bg-white rounded-xl hover:scale-105 transition"
              >
                <Image
                  src={`/${tech}.svg`}
                  alt={tech}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Right Profile Section ===== */}
      <section className="flex flex-col items-center space-y-6">
        {/* Profile Bubble */}
        <div className="bubble mb-8 shadow-2xl ">
          <Image
            src="/rehman.jpg"
            alt="Rehman Kalawant - Front End Developer"
            width={300}
            height={300}
            className="bubble-img"
            priority
          />
        </div>

        {/* Profile Description */}
        <p className="text-gray-400 text-center text-sm leading-relaxed max-w-sm">
          Passionate about building engaging digital experiences that are fast,
          accessible, and user-friendly.
        </p>
      </section>
    </main>
  );
}
