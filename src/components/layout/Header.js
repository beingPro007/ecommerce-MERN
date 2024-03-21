import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-2xl font-semibold text-primary" href="">
        UTU PizzaLund
      </Link>
      
      <nav className="flex items-center gap-8 font-semibold text-grey-400">
        <Link href={""} className="transition-all duration-200 ease-in-out hover:text-primary">Home</Link>
        <Link href={""} className="transition-all duration-200 ease-in-out hover:text-primary">Menu</Link>
        <Link href={""} className="transition-all duration-200 ease-in-out hover:text-primary">About</Link>
        <Link href={""} className="transition-all duration-200 ease-in-out hover:text-primary">Contact</Link>
        <Link
          href={""}
          className="px-6 py-2 text-white transition-all duration-200 ease-in-out rounded-full hover:scale-95 bg-primary"
        >
          Login
        </Link>
      </nav>
      
    </header>
  );
}
 