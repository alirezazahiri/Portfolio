import {
  TypewriterEffect,
  WavyBackground,
} from "@/components/shared";
import { HERO_WORDS } from "./constants";
import { HeroCaption } from "./caption";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center h-120">
      <WavyBackground blur={6} canvasClassName="size-full">
        <div className="flex flex-col items-center justify-center h-full gap-12">
          <TypewriterEffect
            words={HERO_WORDS}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
          />
          <HeroCaption />
        </div>
      </WavyBackground>
    </div>
  );
};
