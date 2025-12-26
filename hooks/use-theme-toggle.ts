import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    mounted,
    toggleTheme,
    theme,
  };
};
