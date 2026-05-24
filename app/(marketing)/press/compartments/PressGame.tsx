import React from "react";
import Image from "next/image";

export default function PressGame() {
  const gameFacts = [
    { label: "GENRE", value: "Tactical RPG" },
    { label: "PLATFORMS", value: "PC (Steam & itch.io)" },
    { label: "RELEASE", value: "2026" },
    { label: "DEVELOPER", value: "NowhereIsle" },
    { label: "PUBLISHER", value: "TBA" },
    { label: "ENGINE", value: "Unity" },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold mb-12 border-l-4 border-red-600 pl-4">
        Our Games
      </h2>

      {/* Sigil Tactics: Lost Maylon */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="relative h-96">
          <Image
            src="/General-BG-1-scaled-red.png"
            alt="Sigil Tactics: Lost Maylon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-5xl font-bold">Sigil Tactics: Lost Maylon</h3>
            <p className="text-red-400 mt-2 text-xl">
              Upcoming • Tactical RPG • Mystery
            </p>
          </div>
        </div>

        <div className="p-10 space-y-16">
          {/* Game Facts */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Game Facts</h4>
            <div className="grid md:grid-cols-3 gap-8">
              {gameFacts.map((fact, i) => (
                <div key={i}>
                  <div className="text-red-500 text-sm">{fact.label}</div>
                  <div className="mt-1 text-xl">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">About the Game</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Sigil Tactics: Lost Maylon is a turn-based tactical RPG set in a
              decaying world where ancient sigils hold the power to rewrite
              reality. Explore haunted islands, uncover deep lore, and make
              choices that shape the fate of Maylon.
            </p>
          </div>

          {/* Screenshots */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Screenshots</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative"
                >
                  <Image
                    src={`/screenshots/screenshot-${i}.png`} // Replace with real paths
                    alt={`Screenshot ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              All screenshots are available in high resolution in the Assets
              Pack below.
            </p>
          </div>

          {/* Assets Download */}
          <div className="pt-8 border-t border-zinc-800">
            <h4 className="text-2xl font-semibold mb-6">Download Assets</h4>
            <a
              href="/press-assets/nowhereisle-press-kit.zip"
              className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 transition px-10 py-4 rounded-xl text-lg font-medium"
            >
              ↓ Download Full Press Kit (ZIP)
            </a>
            <p className="text-gray-500 mt-3 text-sm">
              Includes: Logos, Key Art, Screenshots, Trailers, Fact Sheets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
