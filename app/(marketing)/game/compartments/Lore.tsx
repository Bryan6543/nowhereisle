// app/components/game/Lore.tsx
export default function Lore() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">The Lost Holy Capital</h2>
          <p className="text-red-400 text-lg">A Brief Glimpse Into the Lore</p>
        </div>

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-10">
          <p>
            In the year 1472 of the Third Reckoning, the Holy Capital of Maylon fell silent. 
            No messengers returned. No ravens flew from its towers. The city simply... vanished into the fog.
          </p>

          <p>
            Decades later, the Inquisition sends its most expendable force — you — to reclaim what was lost. 
            Armed with forbidden sigils and dying faith, you must navigate a land where reality frays at the edges.
          </p>

          <div className="bg-black border border-red-900/30 p-10 rounded-3xl">
            <h3 className="text-red-400 mb-4 text-sm tracking-widest">THE FINAL EDICT</h3>
            <p className="italic text-lg">
              “Enter the fog. Burn what is corrupted. Die with honor if you must. 
              But bring back the Heart of Maylon or do not return at all.”
            </p>
            <p className="text-xs text-gray-500 mt-6">— High Inquisitor Serath Veyra</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500">More lore will be revealed as development continues...</p>
        </div>
      </div>
    </section>
  );
}