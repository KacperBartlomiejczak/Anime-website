"use client";
import classes from "./nav.module.css";
import { useNavStore } from "@/store/useNavStore";

export default function NavHamburger() {
  const toggle = useNavStore((state) => state.toggle);

  return (
    <button
      onClick={toggle}
      className={`w-10 h-10 flex flex-col items-end gap-1 p-1 justify-center hamburger ${classes.hamburger} z-10 relative`}
    >
      <span className={classes.hamburgerInner}></span>
      <span className={classes.hamburgerInner}></span>
      <span className={classes.hamburgerInner}></span>
    </button>
  );
}
