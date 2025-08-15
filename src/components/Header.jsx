"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalScroll) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="p-5 flex justify-between items-center">
        <h3 className="text-2xl font-bold">Awwal Fitness</h3>

        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>

      {/* Scroll Progress Border */}
      <div className="h-[2px] bg-blue-400 transition-all duration-100 ease-linear" style={{ width: `${scrollWidth}%` }}></div>
    </header>
  );
}
