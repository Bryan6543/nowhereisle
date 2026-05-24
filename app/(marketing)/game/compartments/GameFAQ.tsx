"use client";

import { useState } from "react";

type GameFAQItem = {
  question: string;
  answer: string;
};

const gamefaqs: GameFAQItem[] = [
  {
    question: "What is Sigil Tactics: Lost Maylon?",
    answer:
      "A brutal squad-based turn-based tactics RPG about leading a doomed Inquisition expedition into corrupted territory to reclaim the Lost Holy Capital of Maylon.",
  },
  {
    question: "What platform is it coming to?",
    answer: "PC.",
  },
  {
    question: "Is it single-player?",
    answer: "Yes.",
  },
  {
    question: "Is there a release date?",
    answer: "Coming Soon.",
  },
  {
    question: "Is there a demo?",
    answer: "To be announced.",
  },
  {
    question: "Can I wishlist it?",
    answer: "Wishlist links will be added when the Steam page is available.",
  },
  {
    question: "Is there a trailer?",
    answer: "A trailer will be added when ready.",
  },
];

export default function GameFAQ() {
  const [openStudioIndex, setOpenStudioINdex] = useState<number | null>(null);
  const [openGameIndex, setOpenGameINdex] = useState<number | null>(null);

  const toggleStudioFAQ = (index: number) => {
    setOpenStudioINdex(openStudioIndex === index ? null : index);
  };

  const toggleGameFAQ = (index: number) => {
    setOpenGameINdex(openGameIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Rose Spotlight Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(244, 63, 94, 0.12) 0%,
          rgba(244, 63, 94, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />

      <div className="min-h-screen sm:h-screen">
        <div className="w-[70%] m-auto flex flex-col sm:flex-row items-center justify-between h-full gap-20 sm:gap-0">
          <div className="">
            <h1 className="font-head font-bold text-7xl scale-y-150">FAQ</h1>
          </div>
          <div className="flex sm:gap-10 justify-center sm:justify-end">
            {/* Game FAQs */}
            <div className="sm:w-3/6 flex flex-col gap-4">
              <h2 className="text-xl">Game FAQs</h2>
              {gamefaqs.map((gamefaq, index) => (
                <div
                  onClick={() => toggleGameFAQ(index)}
                  // oq
                  className="cursor-pointer hover:bg-white/5 transition-all duration-300 py-2 flex flex-col gap-4 px-5 bg-white/2"
                >
                  <hr />
                  <div
                    className="flex justify-between gap-5"
                    // aria-expanded={openIndex === index}
                  >
                    <h3 className="font-head font-bold">{gamefaq.question}</h3>
                    <p>{openGameIndex === index ? " - " : " + "}</p>
                  </div>

                  <div
                    className={`w-5/6 overflow-hidden transition-all duration-500 ${openGameIndex === index ? "max-h-96 mt-4" : "max-h-0"}`}
                  >
                    <p className="font-body text-sm opacity-85">
                      {gamefaq.answer}
                    </p>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
