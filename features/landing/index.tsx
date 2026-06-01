import { HeroSection } from "./hero";
import { TimelineSection } from "./timeline";
import { TechStackSection } from "./tech-stack";
import { RecommendationsSection } from "./recommendations";
import { ThoughtsSection } from "./thoughts";

export const LandingFeature = () => {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <div className="mt-10" />
      <TimelineSection />
      <RecommendationsSection />
      <ThoughtsSection />
    </>
  );
};
