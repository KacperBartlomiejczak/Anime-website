"use client";
import Link from "next/link";

import { useNavStore } from "@/store/useNavStore";
interface NavLinkProps {
  title: string;
  href: string;
}
export default function NavLink({ title, href }: NavLinkProps) {
  const onClose = useNavStore((state) => state.close);
  return (
    <li>
      <Link
        href={href}
        onClick={onClose}
        className="relative py-2 px-1 text-black capitalize hover:text-purple-900 before:absolute before:h-0.5 before:bottom-0 before:left-0 before:w-full before:bg-purple-900 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out before:origin-center dark:text-white dark:hover:text-purple-500 dark:before:bg-purple-500 text-base md:text-lg lg:text-base"
      >
        {title}
      </Link>
    </li>
  );
}
