import Link from "next/link";
export function NavBar() {
  return (
    <nav className="flex max-w-xl gap-4">
      <Link href="/">
        <a className="text-violet-light-500 font-bold hover:text-pink-light-500">Home</a>
      </Link>
      <Link href="/ContactMe">
        <a className="text-violet-light-500 font-bold hover:text-pink-light-500">Contact me</a>
      </Link>
    </nav>
  );
}
