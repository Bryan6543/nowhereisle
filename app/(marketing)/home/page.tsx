import Hero from "./compartments/Hero";
import UpcomingGame from "./compartments/UpcomingGame";
import WorkingWithUs from "./compartments/WorkingWithUs";
import FAQ from "./compartments/FAQ";
import Newsletter from "./compartments/NewsLetter";
import StudioIntroduction from "./compartments/StudioIntroduction";
import BehindTheFog from "../../components/BehindTheFog";

function page() {
  return (
    <main className="relative">
      {/* <div className="min-h-screen w-full bg-black relative overflow-hidden z-100"> */}
      {/* Crimson Spotlight Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(239, 68, 68, 0.12) 0%,
          rgba(239, 68, 68, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />
      <Hero />
      <StudioIntroduction />
      <UpcomingGame />

      <WorkingWithUs className="z-100" />
      <BehindTheFog />
      <Newsletter />
      <FAQ />
      {/* </div> */}
    </main>
  );
}

export default page;
