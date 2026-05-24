"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// Register the GSAP plugin safely for Next.js SSR
if (typeof window !== 'undefined') {
  gsap.registerPlugin(DrawSVGPlugin);
}

const ForestBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Target all paths intended for the drawing animation
    const paths = svgRef.current.querySelectorAll('.animated-line');
    const glowingOrbs = svgRef.current.querySelectorAll('.glow-orb');

    // Create the master timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    // 1. Animate the lines drawing themselves out
    tl.fromTo(
      paths,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: 2.5,
        stagger: 0.15,
      }
    );

    // 2. Fade in the red glowing focal elements gently afterward
    tl.fromTo(
      glowingOrbs,
      { opacity: 0, scale: 0 },
      {
        opacity: 0.8,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        transformOrigin: 'center',
      },
      '-=1.5' // Overlap with line drawing
    );

    // Optional: Subtle looping idle pulse for the red energy nodes
    gsap.to(glowingOrbs, {
      opacity: 0.4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#0a0f0d] overflow-hidden -z-10">
      <svg
        ref={svgRef}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-60"
      >
        {/* Ambient Dark Forest Vignette/Glow Base */}
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a0808" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0f0d" stopOpacity="1" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        <rect width="1440" height="900" fill="url(#bgGlow)" />

        {/* Abstract Forest Tunnel / Vignette Lines */}
        <g stroke="#2a3a30" strokeWidth="2" strokeLinecap="round" opacity="0.4">
          <path className="animated-line" d="M-50,950 Q200,500 400,450 T900,400 T1490,950" />
          <path className="animated-line" d="M-50,800 Q250,400 500,420 T1000,380 T1490,800" />
          <path className="animated-line" d="M-50,600 Q300,300 600,380 T1100,300 T1490,600" />
        </g>

        {/* Winding Forest Path / Deep Wood Vectors */}
        <g stroke="#3a4f40" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          {/* Left Arching Trees */}
          <path className="animated-line" d="M150,950 C100,600 250,300 550,250" />
          <path className="animated-line" d="M50,950 C-20,500 150,200 450,150" />
          
          {/* Right Arching Trees */}
          <path className="animated-line" d="M1290,950 C1340,600 1190,300 890,250" />
          <path className="animated-line" d="M1390,950 C1460,500 1290,200 990,150" />
          
          {/* Central Path Horizon lines */}
          <path className="animated-line" d="M650,450 Q720,430 790,450" />
          <path className="animated-line" d="M600,490 Q720,465 840,490" />
          <path className="animated-line" d="M520,550 Q720,510 920,550" />
          <path className="animated-line" d="M400,650 Q720,580 1040,650" />
        </g>

        {/* Abstract Red Magical Orbs (Replacing the blue glows from earlier) */}
        <g fill="#ff3333" filter="url(#glow)">
          <circle className="glow-orb" cx="350" cy="380" r="8" />
          <circle className="glow-orb" cx="420" cy="520" r="5" />
          <circle className="glow-orb" cx="1020" cy="320" r="10" />
          <circle className="glow-orb" cx="1100" cy="480" r="6" />
          <circle className="glow-orb" cx="720" cy="390" r="4" />
        </g>
      </svg>
    </div>
  );
};

export default ForestBackground;