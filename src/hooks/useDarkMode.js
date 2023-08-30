import { useEffect } from "react";
import { useLocalStorage } from "./useStorage";

export default function useDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useLocalStorage(
    "useDarkMode",
    prefersDarkMode
  );
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
