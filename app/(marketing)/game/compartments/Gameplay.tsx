// app/components/game/Gameplay.tsx
import Image from "next/image";

export default function Gameplay() {
  return (
    <section className="py-24 bg-black border-b border-red-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Tactical Combat Reimagined
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Brutal, deliberate, and punishing. Every decision matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-red-400 text-sm tracking-widest mb-2">
                  CORE MECHANICS
                </h3>
                <h4 className="text-3xl font-semibold">Sigil-Based Tactics</h4>
                <p className="text-gray-400 mt-3">
                  <ul className="flex flex-col gap-1">
                    <li>20 effects and afflictions</li>
                    <li>3 armor types </li>
                    <li>7+ weapon families</li>
                    <li>12 melee weapon types</li>
                    <li>6 ranged weapon types</li>
                    <li>6 magic weapon types</li>
                    <li>120 Total weapon variants</li>
                    <li>6 classes and advanced classes </li>

                    <li>15 ultimate class abilities</li>
                    <li>600+ tactical moves</li>
                  </ul>
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-semibold">
                  Permadeath & Sacrifice
                </h4>
                <p className="text-gray-400 mt-3">
                  Death is Final. Those who fall cannot be saved. As a Grand
                  Inquisitor, you must risk the lives of your warriors to
                  reclaim the lost glory of Maylon.
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-semibold">Dungeon Crawler</h4>
                <p className="text-gray-400 mt-3">
                  Watch over your squad, tend their wounds at scarce rest
                  points, and guide them through the corrupted heart of the
                  Blight.
                </p>
              </div>
            </div>

            <button className="px-8 opacity-20 py-4 border border-red-700 hover:bg-red-950 rounded-xl transition">
              Watch Gameplay Trailer →
            </button>
          </div>

          {/* Right - Visuals */}
          <div className="flex flex-col gap-1 ">
            <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative">
              <video
                src={"/envmodels.mp4"}
                loop
                muted
                playsInline
                autoPlay
                className=""
              />
              {/* <Image
                src="/gameplay/combat-1.jpg"
                alt="Tactical Combat"
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative mt-12">
              <video
                src={"/modelsmovement.mp4"}
                loop
                muted
                playsInline
                autoPlay
                className=""
              />
              {/* <Image
                src="/gameplay/sigil-cast.jpg"
                alt="Sigil Casting"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
