"use client";
import Link from "next/link";
import { Search, User, Sun, Moon } from "lucide-react";
import NavHamburger from "./navHamburger";
import { useThemeStore } from "@/store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

export default function NavItems() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <ul className="flex items-center justify-center gap-2 z-10 relative">
      <li>
        <button className="cursor-pointer">
          <Search className="text-black hover:text-purple-900 transition-colors" />
        </button>
      </li>
      <li>
        <Link href="/profile">
          <User className="text-black hover:text-purple-900 transition-colors" />
        </Link>
      </li>
      <li>
        <button onClick={toggleTheme} className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className="text-black" />
              ) : (
                <Moon className="text-black" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </li>
      <li>
        <NavHamburger />
      </li>
    </ul>
  );
}
