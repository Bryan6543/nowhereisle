"use client";

import Image from "next/image";
import { useState } from "react";

const artworks = [
  "/artworks/at/a-1.png",
  "/artworks/at/a-2.png",
  "/artworks/at/a-3.png",
  "/artworks/at/a-4.png",
  "/artworks/at/a-5.png",
  "/artworks/at/a-6.png",
  "/artworks/at/a-7.png",
  "/artworks/at/a-8.png",
  "/artworks/at/a-9.png",
  "/artworks/at/a-10.png",
  "/artworks/at/a-11.png",
  "/artworks/at/a-12.gif",
  "/artworks/at/a-13.gif",
  "/artworks/at/a-14.png",
  "/artworks/at/a-15.png",
  "/artworks/at/a-16.png",
  "/artworks/at/a-17.png",
  "/artworks/at/a-18.png",
  "/artworks/at/a-19.png",
  "/artworks/at/a-20.png",
];

export default function Artworks() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? artworks.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === artworks.length - 1 ? 0 : selectedIndex + 1);
  };

  // Handle clicking outside the image
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Artworks</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((src, i) => (
            <div
              key={i}
              onClick={() => openModal(i)}
              className="aspect-square relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Artwork ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 object-top-left"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm tracking-widest border border-white/50 px-6 py-2 rounded-full">
                  VIEW FULL
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={handleBackdropClick}   // ← Click outside to close
        >
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center p-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-5xl hover:text-red-400 transition z-50"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 text-white text-5xl hover:text-red-400 transition z-50 hidden md:block"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-6 text-white text-5xl hover:text-red-400 transition z-50 hidden md:block"
            >
              →
            </button>

            {/* Image Container */}
            <div 
              className="relative max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={artworks[selectedIndex]}
                alt={`Artwork ${selectedIndex + 1}`}
                width={1400}
                height={900}
                className="max-h-[90vh] w-auto object-contain rounded-xl shadow-2xl"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-8 text-white/70 text-sm tracking-widest">
              {selectedIndex + 1} / {artworks.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}