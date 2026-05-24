"use client";

import Image from "next/image";
import Link from "next/link";
import BehindTheFog from "../../components/BehindTheFog";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Akeil Mohideen",
      role: "Chief Executive Officer",
      image: "/team/akeil.pn",
      bio: "............",
    },
    {
      name: "Win Khant Kyi",
      role: "Chief Operational & Creative Officer",
      image: "/team/win.pn",
      bio: "............",
    },
    {
      name: "Lin Kyaw Khant",
      role: "Chief Technical Officer",
      image: "/team/lin.pn",
      bio: "............",
    },
    {
      name: "Danidu Dileka Perera",
      role: "3D Artist",
      image: "/team/lin.pn",
      bio: "............",
    },
    {
      name: "Hasal Nauranna",
      role: "2D Artist",
      image: "/team/lin.pn",
      bio: "............",
    },
    {
      name: "Spartan138",
      role: "Music composer",
      image: "/team/lin.pn",
      bio: "............",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center border-b border-red-950 overflow-hidden">
        <Image
          src={"/final_1.png"}
          width={10000}
          height={10000}
          quality={75}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-red-500 tracking-[4px] text-sm mb-6">
            ESTABLISHED 2024
          </p>
          <h1 className="text-7xl md:text-8xl font-bold leading-none mb-8">
            NOWHERE ISLE
          </h1>
          <p className="text-2xl text-gray-400">
            A small studio where lost ideas find their home.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-red-500 uppercase tracking-widest text-sm mb-4">
              Our Mission
            </h2>
            <h3 className="text-4xl font-bold leading-tight mb-6">
              To become Sri Lanka's first globally successful game studio and to
              be best at what we do. Unforgettable Storytelling and deeply
              engaging gameplay.
            </h3>
            <p className="text-gray-400 text-lg">
              We believe games are more than entertainment.
            </p>
          </div>
          <div>
            <h2 className="text-red-500 uppercase tracking-widest text-sm mb-4">
              Our Vision
            </h2>
            <h3 className="text-4xl font-bold leading-tight mb-6">
              Fully independent with no comprise over creative decision to
              create worlds we want to play.
            </h3>
          </div>
        </div>
        <div className="py-10">
          {/* <video
            className="m-auto rounded-2xl"
            src={"/funny-shit.mp4"}
            autoPlay
            loop
            muted
            playsInline
          /> */}
          {/* <Image
            src={"/team.png"}
            width={1000}
            height={1000}
            alt=""
            className=""
          /> */}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-zinc-950 py-20 border-y border-red-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Nowhere Isle Studios is an independent game studio that dares to
            venture into the unknown strange worlds of the mind, crafting
            atmospheric strategy games filled with strong identity, intricate
            lore, meaningful tactics, and underlying mystery.
          </p>
          <br />
          <p className="text-lg text-gray-300 leading-relaxed">
            Our current project is Sigil Tactics: Lost Maylon, a brutal tactical
            RPG about the Inquisition's seventh doomed expedition sent to
            reclaim a holy capital swallowed by corruption
          </p>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-red-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BehindTheFog />

      {/* Contact */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto">
          Whether you have a question, collaboration idea, or just want to say
          hello — we’d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="mailto:hello@nowhereisle.com"
            className="px-10 py-5 border border-red-700 hover:bg-red-950 rounded-2xl transition"
          >
            supportnowhereisle@gmail.com
          </a>
          {/* <a
            href="mailto:press@nowhereisle.com"
            className="px-10 py-5 border border-red-700 hover:bg-red-950 rounded-2xl transition"
          >
            press@nowhereisle.com
          </a> */}
        </div>

        <div className="mt-16 text-sm text-gray-500">
          NowhereIsle Studio • Remote • Earth
        </div>
      </section>
    </div>
  );
}
