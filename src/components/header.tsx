import Link from "next/link";
import Container from "@/components/container";

export default function Header() {
  return (
    <Container props="fixed inset-x-0">
      <header className="flex justify-between py-9 text-lg text-white font-medium">
        <Link className="" href={"/"}>Bavo Beaumon</Link>
        <div className="flex flex-row gap-24">
          <Link className="" href={"/"}>Home</Link>
          <Link className="" href={"/about"}>Over mij</Link>
          <Link className="" href={"/projects"}>Projecten</Link>
          <Link className="" href={"/contact"}>Contact</Link>
        </div>
      </header>
    </Container>
  );
}
