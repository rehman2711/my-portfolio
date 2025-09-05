"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-800 fixed top-0 bg-black z-10">
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold">
          💻 REHMAN
          <span className="text-xs text-gray-400">.DEV</span>
        </div>
      </div>
      <nav className="hidden md:flex gap-10 text-gray-400">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Projects</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>
      <div className="flex gap-3">
        {/* create resume using that pdf/render library */}
        <Button className="bg-gray-800 px-3 py-1 hover:bg-gray-900">Download Resume</Button>
        <Button
          className="bg-white text-black px-3 py-1 hover:bg-white"
          onClick={() => router.push("/")}
        >
          Login
        </Button>
      </div>
    </header>
  );
}
