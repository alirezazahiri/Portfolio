import { HeroSection } from "./hero";
import { TimelineSection } from "./timeline";
import { TechStackSection } from "./tech-stack";

export const LandingFeature = () => {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <div className="mt-10" />
      <TimelineSection />
    </>
  );
};
