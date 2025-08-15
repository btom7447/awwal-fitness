"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
    const links = [
        { href: "#heroSection", label: "Home" },
        { href: "#aboutSection", label: "About" },
        { href: "#portfolioSection", label: "Portfolio" },
        { href: "#contactSection", label: "Contact" },
    ];

    const [active, setActive] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

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

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrollTop / docHeight) * 100);
        };

        window.addEventListener("scroll", handleScrollPosition);
        return () => window.removeEventListener("scroll", handleScrollPosition);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Scroll Progress Bar - now flush to right edge */}
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gray-700">
                <div
                    className="bg-blue-400 transition-all duration-150"
                    style={{ height: `${scrollProgress}%` }}
                />
            </div>

            <Image
                src="/images/awwal-logo.png"
                width={100}
                height={50}
                alt="Awwal Fitness Logo"
                className="object-contain mb-15"
            />

            <nav className="flex flex-col gap-10">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className={`
                            relative inline-block w-fit text-xl font-light uppercase transition-colors duration-300
                            ${active === link.href ? "text-white" : "text-white"}
                            after:content-[''] after:block after:w-0 after:h-[1px] 
                            after:bg-current after:transition-all after:duration-200
                            hover:after:w-full
                            ${active === link.href ? "after:w-full after:bg-white" : ""}
                        `}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}
