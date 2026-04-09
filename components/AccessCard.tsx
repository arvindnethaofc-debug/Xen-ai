"use client";

import { motion } from "framer-motion";

export default function AccessCard() {
  return (
    <section className="py-32 flex justify-center items-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-r from-[#E0115F]/40 to-purple-500/40"
      >
        <div className="bg-[#0A0A0A] rounded-3xl p-8 backdrop-blur-xl border border-white/10">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">XenAI Access</h3>
            <span className="text-sm text-[#E0115F]">Early</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl font-bold mb-4">
            Agentic OS Pass
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-6">
            Unlock early access to the XenAI operating system and experience autonomous healthcare workflows.
          </p>

          {/* Features */}
          <div className="space-y-2 text-sm text-gray-300 mb-6">
            <p>✓ Autonomous Agents</p>
            <p>✓ Real-time Decisions</p>
            <p>✓ Hospital OS Preview</p>
          </div>

          {/* CTA */}
          <button className="w-full bg-[#E0115F] py-3 rounded-xl hover:scale-105 transition">
            Request Access
          </button>

        </div>
      </motion.div>

    </section>
  );
}