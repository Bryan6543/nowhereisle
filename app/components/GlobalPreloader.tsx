"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const messages = [
  "Initializing Engine...",
  "Loading Assets...",
  "Compiling Shaders...",
  "Syncing World State...",
  "Mounting Systems...",
  "Calibrating Physics...",
  "Rendering Environment...",
  "Decrypting Data Streams...",
];

export default function GlobalPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // PROGRESS SIMULATION
    let p = 0;

    const interval = setInterval(() => {
      p += Math.random() * 8;

      if (p >= 100) p = 100;

      setProgress(p);

      if (p === 100) {
        clearInterval(interval);

        gsap.to(".preloader", {
          opacity: 0,
          duration: 1,
          delay: 0.4,
          onComplete: () => setLoading(false),
        });
      }
    }, 120);

    // MESSAGE ROTATION
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 900);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader fixed inset-0 z-[9999] bg-black text-red-400 flex items-center justify-center font-mono overflow-hidden">
      
      {/* subtle animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)]" />

      <div className="relative text-center space-y-6">

        {/* LOGO */}
        <img
          src="/logo.png"
          className="w-28 mx-auto opacity-90"
        />

        {/* DYNAMIC SYSTEM MESSAGE */}
        <div className="h-6 overflow-hidden">
          <p
            key={messageIndex}
            className="text-xs tracking-[0.3em] uppercase animate-fade"
          >
            {messages[messageIndex]}
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-72 h-[2px] bg-red-950 relative overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PERCENT */}
        <p className="text-xs tracking-widest">
          {progress.toFixed(0)}%
        </p>

      </div>
    </div>
  );
}