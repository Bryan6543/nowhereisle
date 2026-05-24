import Image from "next/image";

// components/sections/BehindTheFog.tsx
export default function BehindTheFog() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Behind the Fog</h2>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                01 — World Building
              </h3>
              <p className="text-gray-400">
                We begin with lore, mood boards, and soundscapes before writing
                a single line of code.
              </p>
            </div>
            <Image
              src={"/BehindTheFog/img-1.png"}
              width={10000}
              height={1000}
              alt="75"
              className="spect-video rounded-2xl h-120 w-auto object-cover object-bottom hover:opacity-95 hover:scale-105 transition-all duration-500"
            />
            {/* <div className="bg-zinc-900 aspect-video rounded-2xl" /> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h3 className="text-3xl font-semibold mb-4">
                02 — Artistic Obsession
              </h3>
              <p className="text-gray-400">
                Every frame, every particle, and every shadow is crafted with
                intention.
              </p>
            </div>
             <Image
              src={"/BehindTheFog/img-2.png"}
              width={10000}
              height={1000}
              alt="75"
              className="spect-video rounded-2xl h-80 w-auto object-contain object-center hover:opacity-95 hover:scale-105 transition-all duration-500"
            />
            {/* <div className="md:order-1 bg-zinc-900 aspect-video rounded-2xl" /> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                03 — Player Experience
              </h3>
              <p className="text-gray-400">
                We design for those who enjoy slow discovery, deep immersion,
                and emotional payoff.
              </p>
            </div>
             <Image
              src={"/BehindTheFog/img-3.png"}
              width={10000}
              height={1000}
              alt="75"
              className="spect-video rounded-2xl h-80 w-auto object-contain object-bottom hover:opacity-95 hover:scale-105 transition-all duration-500"
            />
            {/* <div className="bg-zinc-900 aspect-video rounded-2xl" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
