"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect } from "react";

type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (v: "light" | "dark") => void;
};

export const useThemeStore = create(
  persist<ThemeState>(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        set({ theme: newTheme });
      },
      setTheme: (v) => set({ theme: v }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default function useThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return children;
}
