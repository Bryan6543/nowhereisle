"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const Herobody = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const heroBlack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.2,
          duration: 30,
          ease: "none",
          repeat: -1,
          yoyo: false,
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4 },
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=1",
        )
        .fromTo(
          ".line",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            stagger: 0.25,
            duration: 1.1,
          },
          "-=0.9",
        )
        .fromTo(
          Herobody.current,
          { y: 0, x: 0 },
          { y: -500, x: -800, scale: 0, duration: 1.2, opacity: 0 },
        )
        .fromTo(heroBlack.current, { opacity: 1 }, { opacity: 0, duration: 1 });
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className="h-screen w-full relative bg-black overflow-hidden"
    >
      <div
        ref={heroBlack}
        className="bg-black w-full h-full absolute z-30"
      ></div>
      {/* Crimson Shadow Background with Top Glow */}
      <div className="absolute bottom-20 left-20 z-20 flex flex-col gap-5">
        <h2 className="text-5xl font-bold">Sigil Tactics: Lost Maylon</h2>
        <p className="max-w-200 font-display">
          A brutal squad turn-based tactics RPG about leading a doomed
          Inquisition expedition into corrupted territory to reclaim the Lost
          Holy Capital of Maylon.
        </p>
        <div className="flex gap-6 opacity-50">
          <button>WISHLIST</button>
          <button>STEAM</button>
          <button>Game</button>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
        }}
      />
      {/* Hero Image */}
      <Image
        ref={imageRef}
        src={"/final_1.png"}
        width={10000}
        height={10000}
        quality={75}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* <div className="absolute bg-black/40 inset-0 w-full h-full object-cover " /> */}
      {/* Hero Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Trailer1.mp4"
        loop
        autoPlay
        muted
        playsInline
        width={1920}
        height={1080}
      /> */}
      <div
        ref={Herobody}
        className="relative h-screen justify-center z-50 gap-20 items-center flex flex-col  bg-cover"
      >
        <Image
          ref={logoRef}
          src={"/logo.png"}
          alt=""
          width={1000}
          height={1000}
          quality={75}
          className="w-80 z-30"
        />
        <h1
          ref={titleRef}
          className="text-center text-7xl flex flex-col gap-6 z-30 font-headmain"
        >
          NOWHERE ISLE
          <span className="text-4xl font-extralight tracking-[20px]">
            STUDIO
          </span>
        </h1>
      </div>
      {/* Decorative Lines (optional) */}
      <div ref={linesRef} className="flex gap-8 mt-8">
        <div className="line h-px w-20 bg-white/60 origin-left" />
        <div className="line h-px w-20 bg-white/60 origin-right" />
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60 text-sm tracking-widest">
          SCROLL
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
