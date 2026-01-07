"use client";

import { animate } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { CardSkeletonContainer } from "@/components/ui";
import { Sparkles } from "@/components/shared/sparkles";
import { useIsMounted } from "@/hooks";
import { TECH_STACK_ITEMS } from "./constants";
import { AnimatedTooltip } from "@/components/shared";

export const TechStackSection = () => {
  const mounted = useIsMounted();

  const sequence = Array.from({ length: TECH_STACK_ITEMS.length }).map(
    (_, index) => [
      `.circle-${index + 1}`,
      {
        scale: [1, 1.1, 1],
        transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
      },
      { duration: 0.8 },
    ]
  );

  useEffect(() => {
    const res = animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 0.5,
    });
    () => {
      res.stop();
    };
  }, []);

  return (
    <CardSkeletonContainer className="max-w-2xl mx-auto relative top-5">
      <div className="p-8 md:h-30 relative flex items-center justify-center">
        <div className="flex flex-row justify-center items-center gap-2 flex-wrap">
          {TECH_STACK_ITEMS.map((item, index) => (
            <AnimatedTooltip
              name={item.name}
              designation={item.description}
              key={item.name}
              className="rounded-full w-fit"
            >
              <div
                className={cn(
                  `rounded-full flex items-center justify-center bg-primary/20
      shadow-[0px_0px_8px_0px_primary/20_inset,0px_32px_24px_-16px_primary/40]
      `,
                  `circle-${index + 1}`
                )}
                style={{ width: `${item.size}rem`, height: `${item.size}rem` }}
              >
                <item.icon className="size-7/12 dark:text-white text-black pointer-events-none" />
              </div>
            </AnimatedTooltip>
          ))}
        </div>

        <div className="hidden md:block h-25 w-px absolute m-auto z-40 bg-linear-to-b from-transparent via-cyan-500 to-transparent animate-move">
          <div className="h-30 w-10 top-1/2 -translate-y-1/2 absolute -left-10">
            {mounted && <Sparkles />}
          </div>
        </div>
      </div>
    </CardSkeletonContainer>
  );
};
