import { useTheme } from "next-themes";
import { useIsMounted } from "./use-is-mounted";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return {
    mounted,
    toggleTheme,
    theme,
  };
};
