"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "World Building",
    description: "Immersive fantasy environments.",
  },
  {
    title: "Combat System",
    description: "Fast paced cinematic combat.",
  },
  {
    title: "Characters",
    description: "AAA quality hero characters.",
  },
  {
    title: "Exploration",
    description: "Massive open world adventures.",
  },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections =
        gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",

        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "+=3000",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="flex h-full w-[400vw]">
        {sections.map((item, index) => (
          <div
            key={index}
            className="panel flex h-screen w-screen flex-col items-center justify-center border-r border-red-500 bg-black text-white"
          >
            <h1 className="text-6xl font-bold uppercase text-red-500">
              {item.title}
            </h1>

            <p className="mt-6 max-w-xl text-center text-xl text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}