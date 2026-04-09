"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      <ParticlesBackground />

      <div className="relative z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          The Operating System for{" "}
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Intelligent Healthcare
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-xl mx-auto"
        >
          XenAI is an agentic platform that automates hospital workflows using intelligent agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <button className="bg-gradient-to-r from-red-500 to-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition">
            Enter XENAI
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            View Demo
          </button>
        </motion.div>

      </div>
    </section>
  );
}