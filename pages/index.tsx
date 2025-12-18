import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      
      {/* Optimized background gradient */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_360px_at_50%_120px,#3e3e3e,transparent)]
          sm:bg-[radial-gradient(circle_420px_at_50%_160px,#3e3e3e,transparent)]
          md:bg-[radial-gradient(circle_520px_at_50%_220px,#3e3e3e,transparent)]
        "
      />

      {/* Fixed navbar */}
      <Navbar />

      {/* Hero Content */}
      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          text-center
          text-white
          px-4
          pt-28
          sm:pt-32
          md:justify-center
          gap-4
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Welcome to Iron Gym
        </h1>

        <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-300">
          Train hard. Stay consistent. Manage your gym fees easily.
        </p>

        {/* Compact CTA (NOT shadcn button) */}
        <Link href="/pay-fees">
          <button
            className="
              mt-4
              rounded-full
              bg-green-600
              hover:bg-green-700
              px-7
              py-3
              text-sm
              sm:text-base
              font-semibold
              transition-colors
            "
          >
            Pay Fees
          </button>
        </Link>
      </main>
    </div>
  );
}
