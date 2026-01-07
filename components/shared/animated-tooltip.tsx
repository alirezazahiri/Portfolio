"use client";

import React, {
  useState,
  useRef,
  Children,
  useEffectEvent,
  useEffect,
} from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedTooltipProps = {
  name: string;
  designation: string;
  children: React.ReactNode;
  className?: string;
};

export const AnimatedTooltip = ({
  name,
  designation,
  children,
  className,
}: AnimatedTooltipProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const rotate = useSpring(
    useTransform(x, [-(width || 0), width || 0], [-width * 0.45, width * 0.45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-(width || 0), width || 0], [-width / 2, width / 2]),
    springConfig
  );

  const handleMouseMove = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  const onLoaded = useEffectEvent(() => {
    if (handleRef.current) {
      const w = parseFloat(getComputedStyle(handleRef.current).width);
      setWidth(w);
    }
  });

  useEffect(() => {
    onLoaded();
  }, []);

  return (
    <div
      className="relative w-fit rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-sidebar px-4 py-2 text-xs shadow-xl"
          >
            <div className="absolute inset-x-1/2 -translate-x-1/2 -bottom-px z-30 h-0.5 w-[40%] bg-linear-to-r from-transparent via-primary to-transparent" />
            <div className="relative z-30 text-base font-bold text-foreground">
              {name}
            </div>
            <div className="text-xs text-foreground/80">{designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onMouseMove={handleMouseMove}
        ref={handleRef}
        className={cn("transition duration-500", className)}
      >
        {children}
      </div>
    </div>
  );
};
