"use client";

import { AnimatedTestimonials } from "@/components/shared";
import { RECOMMENDATIONS } from "./constants";
import { useIsMounted } from "@/hooks";

export const RecommendationsSection = () => {
  const mounted = useIsMounted();

  if (!mounted) return <div className="h-80"></div>;

  return <AnimatedTestimonials testimonials={RECOMMENDATIONS} />;
};
