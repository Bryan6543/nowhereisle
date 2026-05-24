"use client";

import { useRef } from "react";
import ForestBackground from "@/app/components/ForestBackground";

import Introduction from "./compartments/Introduction";
import Artworks from "./compartments/Artworks";
import Characters from "./compartments//Characters";
import Gameplay from "./compartments//Gameplay";
import Lore from "./compartments//Lore";
import GameFAQ from "./compartments/GameFAQ";

export default function GamePage() {
  const introRef = useRef<HTMLDivElement>(null);

  const scrollToIntro = () => {
    introRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative text-white overflow-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(239, 68, 68, 0.12) 0%,
          rgba(239, 68, 68, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center">
        <ForestBackground />

        <div className="z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            SIGIL TACTICS
          </h1>
          <p className="text-2xl text-red-400 mb-2">LOST MAYLON</p>
          <p className="text-gray-400 text-lg">
            A brutal squad-based tactics RPG
          </p>

          <button
            onClick={scrollToIntro}
            className="mt-12 px-10 py-4 bg-red-700 hover:bg-red-600 rounded-xl text-lg font-medium transition"
          >
            Explore the Path
          </button>
        </div>
      </section>
      

      <div ref={introRef}>
        <Introduction />
      </div>
      <Lore />
      <Characters />
      <Gameplay />

      <Artworks />

      <GameFAQ />

      {/* Final CTA */}
      <section className="py-28 text-center border-t border-red-950 bg-black">
        <h2 className="text-4xl font-bold mb-6">The Expedition Begins</h2>
        <button className="px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition">
          Wishlist on Steam
        </button>
      </section>
    </main>
  );
}
