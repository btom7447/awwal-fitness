"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import ServicesGrid from "./ServicesGrid";

export default function HeroSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });
    }, []);

    return (
        <section
            id="heroSection"
            className="bg-black"
        >
            <div className="p-10 lg:p-20 grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
                {/* Left side text */}
                <div>
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="text-white font-bold leading-relaxed text-5xl md:text-7xl mb-5"
                    >
                        Hello, I'm <br />
                        Balogun Awwal
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-xl text-gray-400"
                    >
                        Your Trusted Fitness Coach – Helping You Burn Fat, Build Muscle & Own
                        Your Transformation
                    </p>
                </div>

                {/* Right side image & social */}
                <div
                    className="relative w-full h-110 md:h-[80dvh] z-0"
                    data-aos="fade-left"
                    data-aos-delay="400"
                >
                    <Image
                        src="/images/hero-image.jpg"
                        alt="Awwal Fitness Logo"
                        fill
                        className="object-cover mb-10"
                    />

                    <div
                        className="absolute right-0 bottom-40 xl:bottom-50 2xl:bottom-40 flex items-center space-x-5 p-5 bg-gray-900 text-white"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <div className="hover:text-blue-400 hover:cursor-pointer">
                            <Facebook size={20} strokeWidth={1} />
                        </div>
                        <div className="hover:text-blue-400 hover:cursor-pointer">
                            <Instagram size={20} strokeWidth={1} />
                        </div>
                        <div className="hover:text-blue-400 hover:cursor-pointer">
                            <Twitter size={20} strokeWidth={1} />
                        </div>
                    </div>

                    <div
                        className="absolute right-0 bottom-10 p-5 bg-gray-900"
                        data-aos="fade-left"
                        data-aos-delay="800"
                    >
                        <p className="text-xl text-white uppercase">My Moto</p>
                        <h6 className="text-3xl text-white font-bold">
                            Work Hard, Rest Harder
                        </h6>
                    </div>
                </div>
            </div>
            <ServicesGrid />
        </section>
    );
}
