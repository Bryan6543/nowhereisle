// components/sections/Newsletter.tsx
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your actual newsletter logic here
  };

  return (
    <section className="py-28 bg-gradient-to-b from-black to-zinc-950 border-t border-red-950">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-6">Step Into the Mist</h2>
        <p className="text-gray-400 text-lg mb-10">
          Receive rare updates, behind-the-scenes lore, and early access to new worlds.
        </p>

        {submitted ? (
          <p className="text-red-400 text-xl">Thank you. Welcome to the Isle.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 flex-1 focus:border-red-600 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 px-10 py-4 rounded-2xl font-medium transition"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}