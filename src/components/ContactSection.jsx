"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactCaption from "./ContactCaption";
import ContactForm from "./ContactForm";

export default function ContactSection() {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });
    }, []);

    return (
        <section id="contactSection" className="bg-white ">
            <div className="p-10 pb-15 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 items-center">
                <ContactCaption />
                <ContactForm />
            </div>
        </section>
    )
}