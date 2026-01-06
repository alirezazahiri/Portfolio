"use client";

import { LayoutTextFlip } from "@/components/shared";
import { motion } from "motion/react";

export const HeroCaption = () => {
  return (
    <div>
      <motion.div className="text-base relative mx-4 my-4 flex flex-wrap items-center justify-center gap-1 text-center sm:mx-0 sm:mb-0">
        <LayoutTextFlip
          prefix="Front-End Engineer building "
          words={["scalable", "performance-driven", "responsive", "accessible"]}
          suffix=" web applications"
          className="text-base! font-medium text-secondary-foreground/70"
        />
      </motion.div>
    </div>
  );
};
