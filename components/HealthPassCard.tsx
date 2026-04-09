"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HealthPassCard() {
  const [expanded, setExpanded] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-32 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT SIDE TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            Walk-In.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
          >
            Walk-Out.
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-md">
            Experience seamless healthcare powered by XenAI. No waiting. No complexity. Just intelligent care.
          </p>
        </div>

        {/* 💳 RIGHT SIDE CARD */}
        <div className="perspective w-full max-w-md mx-auto">
          
          <motion.div
            onClick={() => setExpanded(!expanded)}
            animate={{ scale: expanded ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer"
          >
            
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[260px]"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden rounded-3xl p-[1px] 
                bg-gradient-to-br from-[#ff1f3d]/40 via-transparent to-[#007bff]/40">

                <div className="relative h-full w-full rounded-3xl p-6 flex flex-col justify-between bg-black/40 backdrop-blur-3xl border border-white/10">

                  {/* Gloss */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-20" />

                  {/* Top */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-gray-300">Xen AI Health Pass</h3>
                    <div className="w-10 h-6 bg-white/20 rounded-md" />
                  </div>

                  {/* Middle */}
                  <div>
                    <h2 className="text-xl font-semibold">
                      Divyamsh Gowtham
                    </h2>
                    <p className="text-gray-400 text-sm">Family Plan</p>
                    <p className="text-gray-500 text-xs">Valid Till: 2027</p>
                  </div>

                  {/* Bottom */}
                  <div className="flex justify-between items-end">

                    {/* ⚡ CHIP */}
                    <div className="relative w-20 h-14 rounded-xl bg-gradient-to-br from-[#ff1f3d]/20 to-[#007bff]/20 border border-white/10 flex items-center justify-center overflow-hidden">

                      <motion.div
                        className="absolute w-16 h-16 bg-[#ff1f3d]/30 rounded-full"
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />

                      <div className="relative w-5 h-5 bg-gradient-to-br from-[#ff1f3d] to-[#007bff] rounded-sm shadow-[0_0_12px_rgba(255,31,61,0.8)]" />
                    </div>

                    {/* LOGO (FIXED SIZE) */}
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                      style={{ width: "auto", height: "auto" }}
                      className="opacity-80"
                    />

                  </div>

                </div>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-3xl p-[1px] 
                  bg-gradient-to-br from-[#ff1f3d]/40 to-[#007bff]/40"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="h-full w-full rounded-3xl p-6 flex flex-col justify-between border border-white/10 bg-black/40 backdrop-blur-3xl">

                  <div>
                    <p className="text-sm text-gray-400">Member ID</p>
                    <p className="text-lg tracking-wide">XEN-98234</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-2">Family Members</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Member 1</li>
                      <li>• Member 2</li>
                      <li>• Member 3</li>
                    </ul>
                  </div>

                  <button className="bg-gradient-to-r from-[#ff1f3d] to-[#007bff] py-2 rounded-lg hover:scale-105 transition">
                    Emergency Contact
                  </button>

                </div>
              </div>

            </motion.div>

            {/* Flip button */}
            <div className="text-center mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(!flipped);
                }}
                className="text-sm text-gray-400 hover:text-white"
              >
                Flip Card
              </button>
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
}