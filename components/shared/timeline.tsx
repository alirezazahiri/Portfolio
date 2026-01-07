"use client";
import { useIsMounted } from "@/hooks";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useEffectEvent, useRef, useState } from "react";

export interface TimelineEntry {
  key: string;
  title: string;
  content: React.ReactNode;
  placement?: "start" | "end";
}

const TimelineDot = ({
  itemRef,
}: {
  itemRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 40%", "end 0"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["var(--muted)", "var(--primary)", "var(--primary)", "var(--muted)"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [1.25, 1.5, 1.5, 1.25]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [
      "0 0 0 0 var(--accent)",
      "0 0 10px 2px var(--accent)",
      "0 0 10px 2px var(--accent)",
      "0 0 0 0 var(--accent)",
    ]
  );

  return (
    <motion.div
      style={{
        backgroundColor,
        scale,
        boxShadow,
        transition: "ease-in-out",
      }}
      className="size-2.5 rounded-full"
    />
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const mounted = useIsMounted();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const itemRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    data.map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, [ref.current]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-background font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={item.key} ref={itemRefs.current[index]}>
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
                "flex md:flex-col justify-start pt-10 md:pt-40 md:gap-10 w-full pr-10 sm:pr-0 md:max-w-[calc(50%-var(--spacing)*8)] xl:max-w-lg",
                item.placement === "end" ? "md:ms-auto" : "md:ms-0"
              )}
            >
              <h3 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>

              <div className="relative pl-20 pr-4 md:px-0">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.div>
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-30 self-start max-w-xs lg:max-w-sm md:w-full md:mx-auto">
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 rounded-full bg-background flex items-center justify-center">
                {mounted && <TimelineDot itemRef={itemRefs.current[index]} />}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 md:-translate-x-1/2 left-4 top-0 overflow-hidden w-3 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-background to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <div className="h-full absolute inset-x-0 top-0 rounded-full bg-muted/50" />
        </div>
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 md:-translate-x-1/2 left-4 top-0 overflow-hidden w-2 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-background to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 rounded-full bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10%"
          />
        </div>
      </div>
    </div>
  );
};
