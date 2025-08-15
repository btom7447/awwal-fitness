"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileMenu({ isOpen, onClose }) {
  const links = [
    { href: "#heroSection", label: "Home" },
    { href: "#aboutSection", label: "About" },
    { href: "#portfolioSection", label: "Portfolio" },
    { href: "#contactSection", label: "Contact" },
  ];

  const [active, setActive] = useState("");

  // Smooth scroll
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      onClose(); // Close menu after click
    }
  };

  // Detect active section
  useEffect(() => {
    const handleScrollPosition = () => {
      let currentSection = "";
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = link.href;
          }
        }
      });
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <nav
      className={`
        fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-10
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
      `}
    >
      <button
        className="text-white absolute top-10 right-10 md:hidden focus:outline-none"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={30} />
      </button>

      <ul className="flex flex-col gap-10 items-center">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`
              relative inline-block w-fit text-xl font-light uppercase text-white
              transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-[2px] after:bg-white after:origin-left
              after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
              ${active === link.href ? "after:scale-x-100" : ""}
            `}
          >
            {link.label}
          </a>
        ))}
      </ul>
    </nav>
  );
}
