// app/components/game/Characters.tsx
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CharacterModel from "@/app/components/game/CharacterModel";
import Image from "next/image";

const characters = [
  {
    name: "Cadet Mixamo",
    role: "Ranger",
    model: "/models/Cadet Mixamo.glb",
    src: "/models/Cadet Mixamo.png",
    description:
      "young scout-marksman trained to watch sightlines, pick targets, and guide the squad through cursed ruins.",
  },
  {
    name: "Initiate Mixamo",
    role: "Frontliner",
    model: "/models/Initiate Mixamo.glb",
    src: "/models/Initiate Mixamo.png",
    description:
      "A sworn Inquisition fighter sent ahead to break the enemy line in the name of Maylon.",
  },
  {
    name: "Vicar Mixamo",
    role: "Support",
    model: "/models/Vicar Mixamo.glb",
    src: "/models/Vicar Mixamo.png",
    description:
      "A battle-priest of the expedition who heals wounds, steadies faith, and cleanses corruption where possible.",
  },
];

export default function Characters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = characters[activeIndex];

  return (
    <section className="py-20 bg-zinc-950 border-y border-red-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          The Doomed Expedition
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Meet the souls you will lead into darkness
        </p>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Images for Character */}
            <div className="border border-white w-1/3 h-100">
              <Image
                src={active.src}
                width={1000}
                height={1000}
                alt=""
                className="h-full "
              />
            </div>
            {/* 3D Viewer - Fixed */}
            <div className="w-full lg:w-1/3 h-100 bg-black rounded-3xl overflow-hidden border border-red-900/30">
              <Canvas
                camera={{ position: [0, 2.5, 8], fov: 45 }} // Moved camera back
                style={{ background: "#0a0a0a" }}
              >
                <CharacterModel modelPath={active.model} />
                <Environment preset="night" />

                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={5}
                  minDistance={4}
                  maxDistance={15}
                  target={[0, 1, 0]}
                />
              </Canvas>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <p className="text-red-400 text-sm tracking-widest">
                  {active.role}
                </p>
                <h3 className="text-5xl font-bold mt-2">{active.name}</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {active.description}
              </p>

              <div className="flex flex-col gap-1 ">
                {characters.map((char, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`px-6 py-2 border transition-all ${
                      i === activeIndex
                        ? "border-red-600 bg-red-950/50"
                        : "border-zinc-700 hover:border-zinc-500"
                    }`}
                  >
                    {char.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Video Section */}
          <section className="w-[100%] h-auto m-auto ">
            <video
              src={"/20260524000553.mp4"}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full"
            />
          </section>
        </div>
      </div>
    </section>
  );
}
