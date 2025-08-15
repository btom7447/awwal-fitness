"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PlusIcon } from "lucide-react";

export default function ServicesGrid() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });
    }, []);

    const services = [
        { name: "Strength Training", image: "/images/strength-training.jpg" },
        { name: "Mobility Training", image: "/images/mobility-training.jpg" },
        { name: "Weight Loss", image: "/images/weight-loss.jpg" },
        { name: "Cardio Exercises", image: "/images/cardio-exercises.jpg" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((serv, idx) => (
                <div
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                    data-aos-duration="600"
                    className="h-80 bg-black overflow-hidden group hover:cursor-pointer relative"
                >
                    {/* Overlay fade-out */}
                    <div
                        className="absolute inset-0 bg-black/70 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                        aria-hidden="true"
                    ></div>

                    {/* Service image */}
                    <img
                        src={serv.image}
                        alt={serv.name}
                        className="w-full h-80 object-cover"
                    />

                    {/* Caption with right-to-left expansion */}
                    <div className="absolute bottom-1/2 left-1/2 
                            -translate-x-1/2 translate-y-1/2 w-full flex justify-center">
                        <div
                            className="bg-black text-white font-semibold text-center p-5 flex items-center space-x-3 
                            origin-right scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-500 ease-in-out"
                        >
                            <PlusIcon size={20} strokeWidth={1} />
                            <h6 className="text-xl text-white font-light">{serv.name}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
