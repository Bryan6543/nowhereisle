import React from "react";

const studioFacts = [
  { label: "FOUNDED", value: "2024" },
  { label: "TEAM SIZE", value: "4" },
  { label: "LOCATION", value: "Remote" },
  { label: "FOCUS", value: "Atmospheric Narrative" },
];

export default function PressAboutStudio() {
  return (
    <>
      <section>
        <h2 className="text-4xl font-bold mb-8 border-l-4 border-red-600 pl-4">
          About NowhereIsle
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
          NowhereIsle is an independent game studio focused on creating
          atmospheric, narrative-driven experiences. We craft worlds that feel
          alive — mysterious, melancholic, and deeply immersive.
        </p>
      </section>
      <section>
        <h2 className="text-4xl font-bold mb-10 border-l-4 border-red-600 pl-4">
          Studio Facts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {studioFacts.map((fact, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl"
            >
              <div className="text-red-500 text-sm mb-2">{fact.label}</div>
              <div className="text-3xl font-semibold">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
