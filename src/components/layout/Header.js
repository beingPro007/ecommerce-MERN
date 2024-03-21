import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="font-semibold text-primary 2xl" href="">
        ST Pizza
      </Link>
      <nav className="flex items-center gap-8 font-semibold text-grey-400">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>About</Link>
        <Link
          href={""}
          className="px-6 py-2 text-white rounded-full bg-primary"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
