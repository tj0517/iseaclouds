"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { Menu as MenuIcon, X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full bg-gray-400 text-amber-50 flex flex-row items-center justify-between py-1.5 px-4 relative ${poppins.className}`}
    >
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-row gap-6 text-amber-50 font-light xl:text-xl items-center">
        <Link href="/">Home</Link>
        <Link href="/projects/baltica2-wind">Projects</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/news">News</Link>
        <Link href="/offer">Offer</Link>
        <Link href="/about_us">About us</Link>
        <Link href="/contact">Contact us</Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </button>
      </div>

      {/* Dropdown menu with animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-400 flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-50 
          transition-all duration-300 origin-top
          ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/projects/baltica2-wind" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
        <Link href="/news" onClick={() => setIsOpen(false)}>News</Link>
        <Link href="/offer" onClick={() => setIsOpen(false)}>Offer</Link>
        <Link href="/about_us" onClick={() => setIsOpen(false)}>About us</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact us</Link>
      </div>
    </div>
  );
}
