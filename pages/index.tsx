import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

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
    min-h-screen
    flex
    items-center
    px-4
    pt-28
    sm:pt-32
  "
      >
        <div
          className="
      mx-auto
      w-full
      max-w-7xl
      flex
      flex-col
      gap-10
      md:flex-row
      md:items-center
    "
        >
          {/* LEFT: Intro + CTA */}
          <div
            className="
        flex
        flex-col
        items-center
        text-center
        md:items-start
        md:text-left
        md:w-1/2
        text-white
      "
          >
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-wider">
              Welcome to Iron Gym
            </h1>

            <p className="mt-4 max-w-md text-sm sm:text-base md:text-lg text-gray-300">
              Manage your gym fees easily.
            </p>

            <Link href="/pay-fees">
              <button
                className="
            mt-6
            rounded-full
             bg-linear-to-r
             from-rose-500
             to-rose-600
            hover:bg-rose-700
            shadow-lg shadow-rose-600/20
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
          </div>

          {/* RIGHT: Image */}
          <div
            className="
    flex
    justify-center
    md:w-1/2
  "
          >
            <Image
              src={require("@/logos/body.png")}
              alt="Iron Gym Body"
              priority
              className="
      w-full
      max-w-xs
      sm:max-w-sm
      md:max-w-md
      object-contain
    "
            />
          </div>
        </div>
      </main>
    </div>
  );
}
