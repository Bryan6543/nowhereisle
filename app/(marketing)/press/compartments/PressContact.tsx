import React from "react";

export default function PressContact() {
  return (
    <section className="bg-zinc-950 border border-zinc-800 rounded-2xl p-12 text-center">
      <h2 className="text-4xl font-bold mb-6">Press & Media Contact</h2>
      <p className="text-gray-400 mb-8">
        For interviews, previews, or any press-related inquiries:
      </p>
      <a
        href="mailto:press@nowhereisle.com"
        className="text-2xl text-red-400 hover:text-red-300 transition underline"
      >
        support@nowhereisle.com
      </a>
    </section>
  );
}
