"use client";

import { FaDiscord, FaRedditAlien, FaInstagram } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
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

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-red-500 tracking-[3px] uppercase text-sm mb-4">
            You are not alone here
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
            THE ISLE
            <br />
            AWAITS YOU
          </h1>
          <p className="text-gray-400 text-lg">
            Join a quiet community of story lovers, artists, and wanderers.
          </p>
        </div>
      </div>

      {/* Join Platforms */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Find Your Way In
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.name}
                href={p.link}
                target="_blank"
                className="group bg-zinc-950 border border-zinc-800 hover:border-red-800 rounded-3xl p-10 transition-all hover:-translate-y-2 flex flex-col"
              >
                <div className={`text-5xl mb-6 transition-colors ${p.color}`}>
                  <Icon size={52} strokeWidth={1.8} />
                </div>

                <h3 className="text-3xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-400 mb-6">{p.members}</p>

                <p className="mt-auto text-sm text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Fan Art Gallery */}
      <section className="bg-zinc-950 py-20 border-y border-red-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Echoes from the Isle</h2>
            <Link href="#" className="text-red-400 hover:underline">
              View All Fan Art →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fanArt.map((art, i) => (
              <div
                key={i}
                className="aspect-square relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-2/3" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-red-400">{art.type}</p>
                  <p className="text-sm font-medium mt-1">{art.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Wanderers Join Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center text-4xl mb-6">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Voices */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Voices from the Fog
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 p-10 rounded-3xl"
              >
                <p className="text-lg italic leading-relaxed text-gray-300">
                  "{t.quote}"
                </p>
                <p className="mt-8 text-red-400 text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to step into the mist?
          </h2>
          <p className="text-gray-400 mb-10">
            No pressure. No noise. Just fellow souls who love strange stories.
          </p>

          <Link
            href="https://discord.gg/nowhereisle"
            target="_blank"
            className="inline-block bg-red-700 hover:bg-red-600 px-16 py-5 rounded-2xl text-lg font-medium transition"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
}

// ==================== DATA ====================

const platforms = [
  {
    name: "Discord",
    icon: FaDiscord,
    members: "2.8k+ Members",
    desc: "Main hub for discussions, dev updates, lore sharing, and chill voice chats.",
    link: "https://discord.gg/nowhereisle",
    color: "hover:text-indigo-400",
  },
  {
    name: "Reddit",
    icon: FaRedditAlien,
    members: "r/NowhereIsle",
    desc: "Long-form discussions, theories, fan creations, and game feedback.",
    link: "https://reddit.com/r/NowhereIsle",
    color: "hover:text-orange-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    members: "@nowhereisle",
    desc: "Visuals, behind-the-scenes, fan art reposts, and mood boards.",
    link: "https://instagram.com/nowhereisle",
    color: "hover:text-pink-500",
  },
];


const fanArt = [
  { image: "/fanart/1.jpg", title: "Fogbound Shores", type: "Digital Art" },
  { image: "/fanart/2.jpg", title: "Sigil Bearer", type: "Illustration" },
  { image: "/fanart/3.jpg", title: "Maylon Dusk", type: "3D Render" },
  { image: "/fanart/4.jpg", title: "The Last Lantern", type: "Painting" },
];

const reasons = [
  {
    icon: "🪶",
    title: "Deep Lore Discussions",
    desc: "Talk about theories, hidden meanings, and the world we are slowly revealing.",
  },
  {
    icon: "🎨",
    title: "Share Your Creations",
    desc: "Post your fan art, music, stories, or theories. All creativity is welcomed.",
  },
  {
    icon: "🌊",
    title: "A Calm Corner",
    desc: "No toxicity. No drama. Just people who enjoy quiet, meaningful spaces.",
  },
];

const testimonials = [
  {
    quote:
      "Finally found a community that feels like home. The lore discussions here are next level.",
    author: "u/fogwalker87",
  },
  {
    quote:
      "The atmosphere in this community matches the games perfectly. It's peaceful yet full of wonder.",
    author: "echoes_in_the_mist",
  },
];
