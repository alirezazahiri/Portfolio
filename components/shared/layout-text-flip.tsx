"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  prefix = "",
  words = [],
  suffix = "",
  duration = 3000,
  className = "",
  flipClassName = "",
}: {
  prefix?: string;
  suffix?: string;
  words: string[];
  duration?: number;
  className?: string;
  flipClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext-prefix"
        className={cn("font-bold tracking-tight", className)}
      >
        {prefix}
      </motion.span>

      <motion.span
        layout
        className={cn(
          "relative w-fit overflow-hidden rounded-md bg-background py-2 font-sans tracking-tight text-foreground",
          className,
          flipClassName
        )}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>

      <motion.span
        layoutId="subtext-suffix"
        className={cn("font-bold tracking-tight", className)}
      >
        {suffix}
      </motion.span>
    </>
  );
};
