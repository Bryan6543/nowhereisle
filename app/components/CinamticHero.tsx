"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CinematicHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 80,
        opacity: 0,
        duration: 1.6,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-overlay", {
        opacity: 0,
        duration: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}

      <div
        className="absolute inset-0 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}

      <div className="hero-overlay absolute inset-0 bg-black/60" />

      {/* Content */}

      <div className="relative z-10 px-6 text-center">
        <h1 className="hero-title text-7xl font-black uppercase tracking-widest text-white md:text-9xl">
          Eclipse
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-2xl">
          A cinematic AAA experience crafted with immersive storytelling and
          next generation visuals.
        </p>
      </div>
    </section>
  );
}