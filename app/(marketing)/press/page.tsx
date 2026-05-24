import React from "react";
import PressHero from "./compartments/PressHero";
import PressAboutStudio from "./compartments/PressAboutStudio";
import PressGame from "./compartments/PressGame";
import PressContact from "./compartments/PressContact";

export default function page() {
  return (
    <main className="min-h-screen">
      <PressHero />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        <PressAboutStudio />
        <PressGame />
        <PressContact />
      </div>
    </main>
  );
}
