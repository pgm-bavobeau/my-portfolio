"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    // TODO: add glassmorphism effect to header
    <header
      className={`fixed inset-x-0 z-10 py-9 bg-blue-100 transition-all duration-700 ease-in-out ${!scrolled && "container mx-auto mt-4 rounded-3xl"} ${scrolled && "bg-opacity-95 backdrop-blur shadow-sm"}`}
    >
      <Container
        props={`flex justify-between text-xl text-blue-800 font-bold transition-all duration-500 ease-in-out px-4`}
        container={scrolled}
      >
        <Link className={`text-3xl`} href={"/"}>
          Bavo Beaumon
        </Link>
        <div className="flex flex-row gap-24">
          <Link className="" href={"/"}>
            Home
          </Link>
          <Link className="" href={"/about"}>
            Over mij
          </Link>
          <Link className="" href={"/projects"}>
            Projecten
          </Link>
          <Link className="" href={"/contact"}>
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
