"use client";

import { Button } from "@/components/ui";
import { useIsMounted, useThemeToggle } from "@/hooks";
import { MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { toggleTheme, theme } = useThemeToggle();
  const mounted = useIsMounted();

  return (
    <header className="sticky top-0 z-(--header-z-index) flex min-h-(--header-height) w-full shrink-0 justify-center border-b border-dashed backdrop-blur-sm bg-background/20">
      <div className="bg-background/20 absolute inset-0 mx-auto flex min-h-full w-full max-w-[1400px] items-center border-dashed min-[1400px]:border-x min-[1800px]:max-w-[1536px]">
        <div className="flex w-full items-center justify-between px-4 max-lg:gap-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity outline-none"
          >
            <div className="flex items-center justify-center gap-2.5 max-[550px]:[&_span]:hidden">
              <div className="size-8 relative flex items-center justify-center bg-black border-white/30 dark:border rounded-full">
                <Image
                  src="/assets/az-logo.png"
                  alt="Alireza Zahiri Logo"
                  width={32}
                  height={32}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Alireza Zahiri</span>
            </div>
          </Link>
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="cursor-pointer"
            >
              {mounted &&
                (theme === "dark" ? (
                  <SunIcon className="size-4" />
                ) : (
                  <MoonIcon className="size-4" />
                ))}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
