"use client";
import { Github,Linkedin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12 lg:gap-20">
      {/* Left Content Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold  mb-4">
            Front End React Developer 👋🏻
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Rehman Kalawant</span>, 
            a passionate front-end React Developer based in Pune 📍
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <a 
            href="#" 
            className="bg-black text-white p-2 border-1 rounded-full "
          >
            <Linkedin />
          </a>
          <a 
            href="#" 
            className="bg-black text-white p-2 border-1 rounded-full "
          >
            <Github />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Next.js
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Right Profile Section */}
      <div className="flex flex-col items-center">
        {/* Profile Bubble */}
        <div className="bubble mb-8 shadow-2xl">
          <img 
            src="/rehman.jpg" 
            alt="Rehman Kalawant - Front End Developer" 
            className="bubble-img"
          />
        </div>
        
        {/* Profile Description */}
        <div className="text-center max-w-sm">
          <p className="text-gray-400 text-sm leading-relaxed">
            Passionate about creating beautiful, responsive, and user-friendly web experiences
          </p>
        </div>
      </div>
    </div>
  );
}


