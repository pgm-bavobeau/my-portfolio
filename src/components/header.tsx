import Link from "next/link";

export default function Header() {
  return (
    <header className="">
        <h1 className="">Header</h1>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
    </header>
  );
}
