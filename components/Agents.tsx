"use client";

export default function Agents() {
  const agents = [
    "Intake Agent",
    "Triage Agent",
    "Doctor Assistant",
    "Billing Agent",
  ];

  return (
    <section className="py-32 px-6 text-center">
      <h2 className="text-4xl mb-16 font-semibold">Autonomous Agents</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {agents.map((agent) => (
          <div
            key={agent}
            className="glass-card p-6 rounded-2xl hover:scale-105 transition shadow-[0_0_20px_rgba(0,120,255,0.1)]"
          >
            {agent}
          </div>
        ))}
      </div>
    </section>
  );
}