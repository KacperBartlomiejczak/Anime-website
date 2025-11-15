import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <Link href="#">AniMax</Link>
        <ul>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="#">News</Link>
          </li>
          <li>
            <Link href="#">Categories</Link>
          </li>
          <li>
            <input type="text" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
