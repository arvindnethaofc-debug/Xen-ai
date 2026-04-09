"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: { value: "#0A0A0A" },
        },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: "#E0115F" },
          links: {
            enable: true,
            color: "#E0115F",
            distance: 120,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}