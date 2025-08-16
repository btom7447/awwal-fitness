"use client";

import { useState } from "react";
import portfolioData from "../../public/data/portfolioData.json"

export default function PortfolioDisplay() {
    // default active = first service
    const [activeService, setActiveService] = useState(portfolioData[0].id);

    const currentService = portfolioData.find(
        (service) => service.id === activeService
    );

    return (
        <div className="w-full p-10 lg:p-20">
            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
                {portfolioData.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`
                            relative inline-block w-fit text-xl font-extralight uppercase transition-colors duration-300 cursor-pointer
                            ${activeService === service.id ? "text-white after:w-full after:bg-white" : "text-white "}
                            after:content-[''] after:block after:w-0 after:h-[1px] 
                            after:bg-current after:transition-all after:duration-200
                            hover:after:w-full
                        `}
                    >
                        {service.service}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10">
                {currentService?.portfolio.map((item) => (
                    <div
                        key={item.id}
                        className="p-5 bg-black text-white border border-white"
                    >
                        {/* Before / After */}
                        <div className="grid grid-cols-2 gap-1">
                            <img
                                src={item.before_photos}
                                alt={`${item.client} before`}
                                className="w-full h-40 object-cover"
                            />
                            <img
                                src={item.after_photos}
                                alt={`${item.client} after`}
                                className="w-full h-40 object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="p-4 space-y-2">
                            <h3 className="text-xl font-semibold">
                                {item.client}, {item.age}
                            </h3>
                            <p className="text-sm text-gray-500">{item.goal}</p>
                            <p className="text-sm">
                                <span className="font-medium">Weight:</span>{" "}
                                {item.weight}
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Program:</span>{" "}
                                {item.program_type}
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Duration:</span>{" "}
                                {item.duration}
                            </p>

                            {/* Wins */}
                            <ul className="list-disc list-inside text-sm text-green-600 mt-3 space-y-1">
                                {item.wins.map((win, i) => (
                                    <li key={i}>{win}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
