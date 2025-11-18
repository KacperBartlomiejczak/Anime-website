"use client";
import Link from "next/link";
import { Search, User, Sun, Moon } from "lucide-react";
import NavHamburger from "./navHamburger";
import { useThemeStore } from "@/store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";
import NavItemsList from "./navItemList";

export default function NavItems() {
  const { theme, toggleTheme } = useThemeStore();

  const classes = `text-black hover:text-purple-900 transition-colors dark:text-white dark:hover:text-purple-500`;

  return (
    <ul className="flex items-center justify-center gap-2 z-10 relative">
      <NavItemsList>
        <button className="cursor-pointer">
          <Search className={classes} />
        </button>
      </NavItemsList>
      <NavItemsList>
        <Link href="/profile">
          <User className={classes} />
        </Link>
      </NavItemsList>
      <NavItemsList>
        <button onClick={toggleTheme} className="relative cursor-pointer">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className={classes} />
              ) : (
                <Moon className={classes} />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </NavItemsList>
      <NavItemsList>
        <NavHamburger />
      </NavItemsList>
    </ul>
  );
}
