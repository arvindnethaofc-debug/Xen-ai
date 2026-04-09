"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-lg z-50 border-b border-white/10">
      
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="XEN AI Logo"
          width={120}
          height={120}
          priority
          className="h-auto w-auto drop-shadow-[0_0_12px_rgba(255,0,60,0.6)]"
        />
        <h1 className="text-lg font-semibold tracking-wide">XEN AI</h1>
      </div>

      <button className="bg-gradient-to-r from-red-500 to-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition">
        Request Access
      </button>
    </div>
  );
}