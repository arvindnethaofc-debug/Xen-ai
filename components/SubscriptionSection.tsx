"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SubscriptionSection() {
  return (
    <section className="py-32 px-6">

      {/* 🔥 IMAGE + TEXT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* Image */}
        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden group">
          <Image
            src="/family-health.jpg"
            alt="Family Healthcare"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Overlay text */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold"
            >
              Care for{" "}
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Every Life Stage
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm mt-2"
            >
              From pregnancy to full family care powered by AI
            </motion.p>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Healthcare for Every Stage of Life
          </h2>

          <p className="text-gray-400 mb-6">
            XenAI delivers intelligent, continuous healthcare across every phase —
            from maternity to complete family wellness.
          </p>

          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-red-500 to-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* 💳 PLANS */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-semibold mb-16">
          XenAI Subscription Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* BASIC */}
          <PlanCard
            title="Basic Care"
            price="₹999/mo"
            features={[
              "AI Health Monitoring",
              "Basic Consultations",
              "Limited Agent Access",
            ]}
          />

          {/* FAMILY (same style now) */}
          <PlanCard
            title="Family Plan"
            price="₹3999/mo"
            features={[
              "Up to 4 Members",
              "Full Agent Access",
              "Priority Support",
              "Pregnancy Tracking",
            ]}
          />

          {/* MATERNITY */}
          <PlanCard
            title="Maternity Care"
            price="₹1999/mo"
            image="/pregnancy.jpg"
            features={[
              "Prenatal & Postnatal Care",
              "AI Pregnancy Tracking",
              "Doctor Consultations",
              "Nutrition Guidance",
            ]}
          />

        </div>

      </div>

    </section>
  );
}

function PlanCard({
  title,
  price,
  features,
  image,
}: {
  title: string;
  price: string;
  features: string[];
  image?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-[1px] rounded-3xl bg-white/10"
    >
      <div className="bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition h-full">

        {/* IMAGE (optional) */}
        {image && (
          <div className="relative h-40 w-full">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6">

          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-2xl font-bold mb-4">{price}</p>

          <ul className="text-gray-400 text-sm space-y-2 mb-6">
            {features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>

          <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Choose Plan
          </button>

        </div>

      </div>
    </motion.div>
  );
}