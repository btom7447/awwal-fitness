"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection({ stats }) {
    const statsRef = useRef(null);
    const [animatedValues, setAnimatedValues] = useState(
        stats.map(() => 0)
    ); // Initialize all counts to 0
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();

                    // Animate each stat
                    stats.forEach((stat, idx) => {
                        let current = 0;
                        const increment = Math.ceil(stat.value / 50); // adjust speed
                        const interval = setInterval(() => {
                            current += increment;
                            setAnimatedValues((prev) => {
                                const updated = [...prev];
                                updated[idx] = Math.min(current, stat.value);
                                return updated;
                            });
                        if (current >= stat.value) clearInterval(interval);
                        }, 30);
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) observer.observe(statsRef.current);

        return () => observer.disconnect();
    }, [stats]);

    return (
        <div
            ref={statsRef}
            className="p-15 lg:p-20 relative h-fit lg:h-[50dvh] w-full bg-cover bg-top bg-fixed flex justify-center items-center"
            style={{ backgroundImage: "url('/images/stats-background.jpg')" }}
            aria-labelledby="stat-metrics"
        >
            <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <h2 className="text-white font-bold text-7xl">
                            {animatedValues[idx]}
                        </h2>
                        <p className="text-white text-xl uppercase text-center font-extralight">
                            {stat.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
