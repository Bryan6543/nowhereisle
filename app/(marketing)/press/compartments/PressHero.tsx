"use client";

import Image from "next/image";

export default function PressKit() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center border-b border-red-900">
      <Image
        src={"/final_1.png"}
        width={10000}
        height={10000}
        alt=""
        className="absolute inset-0 object-cover object- w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-wider mb-4">
          NOWHERE ISLE
        </h1>
        <p className="text-2xl text-red-400 font-light">PRESS KIT</p>
        <p className="mt-6 text-gray-400 max-w-md mx-auto">
          Media resources for journalists, streamers, and content creators
        </p>
      </div>
    </div>
  );
}
