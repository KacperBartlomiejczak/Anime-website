import Link from "next/link";
export default function NavHeading() {
  return (
    <Link
      href="/"
      className="font-bold z-10 relative text-black hover:text-purple-900 transition-colors dark:text-white dark:hover:text-purple-500"
    >
      AniMax
    </Link>
  );
}
