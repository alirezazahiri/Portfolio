"use client";
import { cn, debounce } from "@/lib/utils";
import { useEffect, useRef, useMemo, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

const defaultColors = [
  "#a8b6fb50",
  "#818cf950",
  "#6468f050",
  "#4f46e550",
  "#443bc950",
];

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  canvasClassName,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  canvasClassName?: string;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const wRef = useRef(0);
  const hRef = useRef(0);
  const ntRef = useRef(0);
  const animationIdRef = useRef(0);
  const noiseRef = useRef(createNoise3D());

  const getSpeed = useCallback(
    () => (speed === "slow" ? 0.001 : 0.002),
    [speed],
  );

  const waveColors = useMemo(() => colors ?? defaultColors, [colors]);

  const setSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    wRef.current = w;
    hRef.current = h;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
    }
  }, []);

  const handleResize = useMemo(
    () =>
      debounce(() => {
        setSize();
      }, 150),
    [setSize],
  );

  const drawWave = useCallback(
    (n: number) => {
      const ctx = ctxRef.current;
      const w = wRef.current;
      const h = hRef.current;
      if (!ctx) return;
      ntRef.current += getSpeed();
      const step = Math.max(5, Math.round(w / 200));
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += step) {
          const y = noiseRef.current(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [getSpeed, waveColors, waveWidth],
  );

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;
    const bgColor = window
      .getComputedStyle(canvas)
      .getPropertyValue("--background");
    ctx.fillStyle = bgColor;
    ctx.globalAlpha = waveOpacity ?? 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  }, [drawWave, waveOpacity]);

  useEffect(() => {
    setSize();
    window.addEventListener("resize", handleResize);
    const visibilityHandler = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationIdRef.current);
      } else {
        render();
      }
    };
    document.addEventListener("visibilitychange", visibilityHandler);
    render();
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", visibilityHandler);
    };
  }, [setSize, handleResize, render]);

  return (
    <div
      className={cn(
        "h-full flex flex-col items-center justify-center",
        containerClassName,
      )}
    >
      <canvas
        className={cn("absolute inset-0 z-0", canvasClassName)}
        ref={canvasRef}
        style={{ filter: `blur(${blur}px)` }}
      />
      <div className={cn("relative z-1", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
