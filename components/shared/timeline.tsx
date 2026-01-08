"use client";
import { useIsMounted } from "@/hooks";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import React, { useRef, useMemo } from "react";

export interface TimelineEntry {
  key: string;
  title: string;
  content: React.ReactNode;
  placement?: "start" | "end";
}

const TimelineDot = React.memo(
  ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const primaryOpacity = useTransform(
      scrollYProgress,
      [0, 0.1, 0.9, 1],
      [0, 1, 1, 0]
    );

    const glowOpacity = useTransform(
      scrollYProgress,
      [0, 0.1, 0.9, 1],
      [0, 0.8, 0.8, 0]
    );

    const scale = useTransform(
      scrollYProgress,
      [0, 0.1, 0.9, 1],
      [1.25, 1.5, 1.5, 1.25]
    );

    return (
      <motion.div
        style={{ scale }}
        className="relative size-2.5 will-change-transform"
      >
        <div className="absolute inset-0 rounded-full bg-muted" />

        <motion.div
          style={{ opacity: primaryOpacity }}
          className="absolute inset-0 rounded-full bg-primary will-change-[opacity]"
        />

        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute -inset-1 rounded-full bg-accent/50 blur-sm will-change-[opacity]"
        />
      </motion.div>
    );
  }
);

TimelineDot.displayName = "TimelineDot";

const useItemScrollProgress = (
  itemRef: React.RefObject<HTMLDivElement | null>
) => {
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 25%", "end 0"],
  });
  return scrollYProgress;
};

const TimelineItem = React.memo(
  ({
    item,
    itemRef,
    mounted,
  }: {
    item: TimelineEntry;
    itemRef: React.RefObject<HTMLDivElement | null>;
    mounted: boolean;
  }) => {
    const scrollYProgress = useItemScrollProgress(itemRef);

    return (
      <div ref={itemRef}>
        <motion.div
          initial={{
            opacity: 0,
            translateY: 100,
            translateX: item.placement === "end" ? 100 : -100,
          }}
          whileInView={{ opacity: 1, translateY: 0, translateX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            "flex md:flex-col justify-start pt-10 md:pt-40 md:gap-10 w-full pr-10 sm:pr-0 md:max-w-[calc(50%-var(--spacing)*8)] xl:max-w-lg will-change-[transform,opacity]",
            item.placement === "end" ? "lg:ms-auto" : "lg:ms-0"
          )}
        >
          <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500">
            {item.title}
          </h3>

          <div className="relative pl-10 pr-4 md:px-0">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
              {item.title}
            </h3>
            {item.content}
          </div>
        </motion.div>
        <div className="sticky flex flex-col md:flex-row z-10 items-center top-30 self-start lg:w-full lg:mx-auto">
          <div className="absolute left-3 md:-left-7 lg:left-1/2 lg:-translate-x-1/2 rounded-full bg-background flex items-center justify-center">
            {mounted && <TimelineDot scrollYProgress={scrollYProgress} />}
          </div>
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const mounted = useIsMounted();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemRefs = useMemo(
    () => data.map(() => React.createRef<HTMLDivElement>()),
    [data.length]
  );

  return (
    <div className="w-full bg-background font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 md:px-10">
        {data.map((item, index) => (
          <TimelineItem
            key={item.key}
            item={item}
            itemRef={itemRefs[index]}
            mounted={mounted}
          />
        ))}
        <div className="bg-linear-to-b from-transparent via-muted to-transparent from-8% via-97% absolute lg:left-1/2 lg:-translate-x-1/2 left-3 -top-1 w-3 h-full rounded-b-md" />
        <div className="absolute top-32 inset-x-0 size-full rounded-md">
          <div className="sticky lg:left-1/2 lg:-translate-x-1/2 left-3 bg-linear-to-t from-primary via-blue-500 to-transparent from-0% via-10% top-0 h-[300px] w-3 rounded-b-md" />
        </div>
      </div>
    </div>
  );
};
