"use client";

import Link from "next/link";

import { useNavStore } from "@/store/useNavStore";

import NavLink from "./navLink";
import Nav from "./nav";

export default function NavLinks() {
  const isOpen = useNavStore((state) => state.isOpen);

  return (
    <ul
      className={` w-screen h-screen flex flex-col justify-center items-center gap-4 bg-white fixed top-0 left-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out dark:bg-blue-950 lg:relative lg:w-auto lg:h-auto lg:flex-row lg:translate-x-0 lg:bg-transparent`}
    >
      <NavLink title="explore" href="/explore" />
      <NavLink title="anime" href="/anime" />
      <NavLink title="our blog" href="/blog" />
      <NavLink title="saved" href="/saved" />
    </ul>
  );
}
