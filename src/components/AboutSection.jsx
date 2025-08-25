"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Expertise from "./Expertise";
import SkillsRange from "./SkillsRange";
import StatsSection from "./StatsSection";
import PortfolioSection from "./PortfolioSection";

export default function AboutSection() {
    const skillsRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);
    const [percentages, setPercentages] = useState([0, 0, 0]); 

    const skills = [
        { name: "Strength Training", percent: 85, color: "bg-gray-400" },
        { name: "Nutrition Skills", percent: 75, color: "bg-gray-900" },
        { name: "Cardio Conditioning", percent: 90, color: "bg-gray-400" },
        { name: "Weight Loss", percent: 80, color: "bg-gray-900" },
    ];

    const stats = [
        { name: "Calories Burnt", value: 356 },
        { name: "Hours Trained", value: 483 }, 
        { name: "Happy Clients", value: 57 }, 
        { name: "Personal Bests", value: 269 }
    ]

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setStartAnimation(true);

                        skills.forEach((skill, idx) => {
                            let start = 0;
                            const increment = skill.percent / 50; // Adjust speed
                            const interval = setInterval(() => {
                                start += increment;
                                setPercentages((prev) => {
                                const newArr = [...prev];
                                newArr[idx] = Math.min(Math.round(start), skill.percent);
                                return newArr;
                                });
                                if (start >= skill.percent) clearInterval(interval);
                            }, 30);
                        });
                    }, 500); // Delay before animation starts
                    observer.disconnect(); // Run only once
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="aboutSection" className="bg-white">
            <div className="p-10 pb-15 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 items-center">
                <Expertise />
                <SkillsRange 
                    skills={skills} 
                    skillsRef={skillsRef} 
                    startAnimation={startAnimation} 
                    percentages={percentages}
                />
            </div>
            <StatsSection stats={stats} />
            <PortfolioSection />
        </section>
    );
}
