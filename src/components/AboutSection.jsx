"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });
    }, []);

    return (
        <section id="aboutSection">
            <div className="p-15 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2
                        data-aos="fade-right"
                        data-aos-delay="0"
                        className="text-black font-bold leading-relaxed text-5xl md:text-7xl mb-5"
                    >
                        My Fields of Expertise
                    </h2>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="text-2xl text-gray-400"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rem repellat error ratione deserunt incidunt iusto consequatur, laboriosam maxime beatae veritatis deleniti. Aliquid harum magnam error. Debitis corporis accusantium architecto.
                    </p>
                    <button type="button"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        Watch Videos
                    </button>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}