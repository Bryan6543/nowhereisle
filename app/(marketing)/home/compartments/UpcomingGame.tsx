"use client";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SiSteam, SiPcgamingwiki, SiKickstarter, SiKick } from "@icons-pack/react-simple-icons";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin);
}

export default function UpcomingGame() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/homecarousel/img-1.png",
    "/homecarousel/img-2.png",
    "/homecarousel/img-3.png",
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current || !svgRef.current) return;

      // 1. Background ScrollTrigger Animation
      gsap.fromTo(
        sectionRef.current,
        { background: "black" },
        {
          background: "none",
          duration: 0.5,
          ease: "power4.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      const paths = svgRef.current.querySelectorAll(".animated-line");
      const glowingOrbs = svgRef.current.querySelectorAll(".glow-orb");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 100%",
          // markers: true,
          toggleActions: "play reverse play reverse",
          scrub: 1,
        },
      });

      scrollTl
        .fromTo(
          paths,
          { drawSVG: "0%" },
          {
            drawSVG: "100%",
            stagger: 0.1,
            ease: "none",
            duration: 5,
            delay: 2,
          },
        )
        .fromTo(
          glowingOrbs,
          { opacity: 0, scale: 0 },
          {
            opacity: 0.8,
            scale: 1,
            stagger: 0.05,
            transformOrigin: "center",
            ease: "power1.out",
          },
          "-=0.5", // Start displaying orbs slightly before lines finish drawing
        );

      // 3. Independent Infinite Idle Loop (Runs independently of scroll once visible)
      gsap.to(glowingOrbs, {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="w-full min-h-screen py-20 h-fit text-6xl relative text-center flex justify-center items-center flex-col">
      <div
        ref={sectionRef}
        className="absolute bg-blac transition-all duration-500 z-20 w-full h-full "
      ></div>

      <div className="flex-col z-40 w-full h-full flex justify-center items-center ">
        <h1 className="font-bold capitalize">A World in the Making</h1>
        <p className="text-base pt-2">
          Crafting immersive gameplay experiences with stylized visuals and deep
          narrative design.
        </p>
      </div>
      <div className="sm:w-[60%] m-auto z-20 py-20 h-full overflow-hidden px-2">
        <div className="flex flex-col sm:flex-row gap-20 justify-between h-full w-full">
          {/* Text Area */}
          <div className="h-full flex flex-col gap-10 sm:w-1/3">
            <h1 className="text-center text-5xl sm:text-left">Sigil Tactics: Lost Maylon</h1>
            <div className="flex gap-5  justify-center sm:justify-start">
              {/* PC */}
              <SiSteam size={35}  />
              <SiKickstarter size={35} className="opacity-50" />

              {/* <Image
                src={"/"}
                alt=""
                width={100}
                height={100}
                className="w-10 h-10 border border-white rounded-xl"
              />
              {/* Steam */}
              {/* <Image
                src={"/"}
                alt=""
                width={100}
                height={100}
                className="w-10 h-10 border border-white rounded-xl"
              />  */}
            </div>
            <p className="font-display text-base sm:text-left opacity-70 font-bold">
              Lead the seventh doomed Inquisition expedition into corrupted
              territory and fight to reclaim the Lost Holy Capital of Maylon.
            </p>
            <div className="text-lg flex gap-5 m-auto">
              <button className="border py-3 px-5 border-white p-2 hover:bg-red-800/80 hover:text-white transition-all duration-500 cursor-pointer rounded-xl">
                See Game
              </button>
              {/* <button className="borde border-white p-2 hover:bg-red-800/80 hover:text-white transition-all duration-500 cursor-pointer rounded-xl">
                See All
              </button> */}
            </div>
          </div>

          {/* Image Area */}
          <div className="flex gap-2 h-full sm:w-2/3 shadow-sm">
            <Carousel
              className="w-full h-full"
              orientation="horizontal"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent className="h-full">
                {images.map((src, index) => (
                  <CarouselItem key={index} className="h-full w-full">
                    <Image
                      src={src}
                      alt=""
                      width={10000}
                      height={10000}
                      quality={75}
                      className="object-contain h-full"
                    />
                  </CarouselItem>
                ))}
                {/* <CarouselItem>
                  <Image
                    src={"/background-image-1.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="object-contain h-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={"/background-image-3.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="object-contain h-full"
                  />
                </CarouselItem> */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Enlarge */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)} // Click outside to close
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full px-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <Carousel
              className="w-full"
              opts={{ startIndex: selectedIndex, loop: true }}
            >
              <CarouselContent>
                {images.map((src, idx) => (
                  <CarouselItem key={idx}>
                    <div className="relative">
                      <Image
                        src={src}
                        alt={`Game screenshot ${idx + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-xl"
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 text-white hover:bg-white/20" />
              <CarouselNext className="right-4 text-white hover:bg-white/20" />
            </Carousel>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-4 -right-4 bg-black text-white rounded-full p-3 hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
