"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WorkingWithUsProps {
  className?: string;
}

export default function WorkingWithUs({ className }: WorkingWithUsProps) {
  const [isActive, setIsActive] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.to(sectionRef.current, {
        // backgroundColor: "#1f1f1f",
        // background:
        // "radial-gradient(circle farthest-corner at center, #350000 10%, #650000 60%, #0a0404 95%)",
        // "radial-gradient(circle at center, #4a1c1c 0%, #2a0f0f 40%, #1a0a0a 70%,
        // #0f0505 100%)", // "linear-gradient(180deg, #1a1a1a 0%, #2a0f0f 10%, #1a0a0a 100%)",
        // ("darkred"),
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 70%",
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 70%",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.7",
        )
        .fromTo(
          linesRef.current,
          { scaleX: 0, opacity: 0, y: 100 },
          {
            scaleX: 1,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=1",
        );

      const leftImages = gsap.utils.toArray(".left-side-image");
      gsap.fromTo(
        leftImages,
        { rotate: 0, x: 0 },
        {
          x: -400,
          opacity: 1,
          rotate: -10,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
            toggleActions: "play none none none",
            // markers: true,
            invalidateOnRefresh: true,
          },
        },
      );

      const rightImages = gsap.utils.toArray(".right-side-image");
      gsap.fromTo(
        rightImages,
        { rotate: 0, x: 0 },
        {
          x: 400,
          opacity: 1,
          rotate: 10,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "Top 100%",
            end: "bottom 100%",
            scrub: 1,
            toggleActions: "play none none none",
            // markers: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );
  return (
    // Parent Container
    <section
      ref={sectionRef}
      className={cn(
        " h-screen overflow-hidden w-full relative py-20",
        className,
      )}
    >
      {/* Left side Sliders */}
      <div className="absolute left-0 z-30 flex flex-col items-end gap-2 h-full w-1/2 p-2 *:transition-all *:duration-500">
        <Image
          src={"/conceptArts/ca-1.png"}
          alt=""
          width={1000}
          height={1000}
          className="left-side-image w-96 h-67 shadow-2xl hover:shadow-amber-100 border"
        />
        <Image
          src={"/conceptArts/ca-2.png"}
          alt=""
          width={1000}
          height={1000}
          className="left-side-image w-96 h-67 shadow-2xl"
        />
        <Image
          src={"/conceptArts/ca-3.png"}
          alt=""
          width={1000}
          height={1000}
          className="left-side-image w-96 h-67 shadow-2xl"
        />
      </div>
      {/* Right Side Slider */}
      <div className="absolute right-0 z-30 flex flex-col items-start gap-2 h-full w-1/2 p-2 *:transition-all *:duration-500">
        <Image
          src={"/conceptArts/corrupt_wolf.png"}
          alt=""
          width={1000}
          height={1000}
          className="right-side-image w-96 h-67 shadow-2xl"
        />
        <Image
          src={"/conceptArts/ca-5.png"}
          alt=""
          width={1000}
          height={1000}
          className="right-side-image w-96 h-67 shadow-2xl"
        />
        <Image
          src={"/conceptArts/ca-4.png"}
          alt=""
          width={1000}
          height={1000}
          className="right-side-image w-96 h-67 shadow-2xl"
        />
      </div>

      {/* Chidren Container */}
      <div className="z-40 w-[80%] m-auto flex flex-col justify-center items-center h-full text-center gap-10">
        {/* Line top */}
        <div ref={linesRef} className="flex flex-col items-center z-10">
          <div className="w-10 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
          <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
        </div>
        {/* Text Area */}
        <div className="flex justify-center items-center flex-col gap-5">
          <h1
            ref={titleRef}
            className="text-7xl font-bold leading-24 font-head"
          >
            FROM CONCEPT <br /> TO REALITY
          </h1>
          <p ref={subtitleRef} className="max-w-[70%] font-body">
            What does it take to be an NoWhere Isler? True Passion, imagination,
            and the ability to thrive in a fast and exciting studio
          </p>
          <div
            ref={buttonRef}
            className="flex z-90 gap-2 items-center relative cursor-pointer hover:opacity-70 hover:font-black transition-all duration-500 py-2"
            onClick={() => setIsActive(!isActive)}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <p className="font-bold capitalize font-hea">View Our ArtWork</p>
            <div className="relative pb-0.5">
              <div
                className={`absolute h-0.5 transition-all duration-800 bg-linear-to-t from-transparent via-white to-transparent 
                    ${isActive ? "w-40 -translate-y-5 -translate-x-42 rotate-0" : "w-2.5 -translate-y-0.5 rotate-200"}`}
              />
              <div
                className={`absolute h-0.5 transition-all duration-500 bg-linear-to-t from-transparent via-white to-transparent
                      ${isActive ? "w-40 translate-y-5 -translate-x-42 rotate-0" : "w-2.5 translate-y-0.5 -rotate-200"}`}
              />
            </div>
          </div>
        </div>
        {/* Line Bottom */}
        <div ref={linesRef} className="flex flex-col items-center z-10">
          <div className="w-0.5 h-25 bg-linear-to-r from-transparent via-white to-transparent" />
          <div className="w-15 h-0.5 bg-linear-to-t from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
