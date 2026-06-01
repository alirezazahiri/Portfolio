"use client";

import { Spotlight } from "@/components/shared";

export function ThoughtsSection() {
  return (
    <div className="h-160 w-full flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Keep In Touch ✨
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          For further discussions, feel free to reach me via email
        </p>
        <p className="mt-4 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
          You can also find me on social media
        </p>
      </div>
    </div>
  );
}
