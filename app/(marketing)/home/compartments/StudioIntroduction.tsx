import React from "react";

export default function StudioIntroduction() {
  return (
    <section className="py-24 bg-black border-b border-red-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">
          Nowhere Isle Studio
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-body">
          We are an independent game studio building
          atmospheric strategy games with strong identity, intricate lore,
          meaningful tactical systems, and underlying mystery.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-red-400 text-4xl font-bold">2026</p>
            <p className="text-sm text-gray-500 mt-2">ESTABLISHED</p>
          </div>
          <div>
            <p className="text-red-400 text-4xl font-bold">6</p>
            <p className="text-sm text-gray-500 mt-2">TEAM MEMBERS</p>
          </div>
          <div>
            <p className="text-red-400 text-4xl font-bold">1</p>
            <p className="text-sm text-gray-500 mt-2">WORLDS CREATED</p>
          </div>
          <div>
            <p className="text-red-400 text-4xl font-bold">Sri Lanka</p>
            <p className="text-sm text-gray-500 mt-2">BASED IN</p>
          </div>
        </div>
      </div>
    </section>
  );
}
