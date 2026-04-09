"use client";

export default function Architecture() {
  const layers = [
    "Agents Layer",
    "Decision Engine",
    "Memory System",
    "Hospital Interface",
  ];

  return (
    <section className="py-32 px-6 text-center">
      <h2 className="text-4xl mb-16 font-semibold">XenAI OS</h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {layers.map((layer) => (
          <div
            key={layer}
            className="glass-card p-6 rounded-2xl hover:bg-white/10 transition"
          >
            {layer}
          </div>
        ))}
      </div>
    </section>
  );
}