import { create } from "zustand";
import { persist } from "zustand/middleware";

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
