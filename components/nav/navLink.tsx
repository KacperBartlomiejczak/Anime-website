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
      <Link href={href} onClick={onClose} className="text-black capitalize">
        {title}
      </Link>
    </li>
  );
}
