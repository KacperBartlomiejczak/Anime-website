import Link from "next/link";
export default function NavHeading() {
  return (
    <Link
      href="/"
      className="font-bold z-10 relative text-black hover:text-purple-900 transition-colors"
    >
      AniMax
    </Link>
  );
}
