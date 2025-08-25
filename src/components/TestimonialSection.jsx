"use client";

import { useState, useRef, useEffect } from "react";
import reviewsData from "../../public/data/reviewsData.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const splideRef = useRef(null);

    // keep Splide in sync when clicking thumbnail
    useEffect(() => {
        if (splideRef.current) {
            splideRef.current.go(activeIndex);
        }
    }, [activeIndex]);

    return (
        <section
            id="testimonialSection"
            className="bg-white p-10 lg:p-20"
        >
            <h2
                className="text-black font-bold leading-relaxed text-3xl md:text-7xl mb-10"
                data-aos="fade-right"
            >
                Reviews from you
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
                {/* Thumbnail grid */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-2">
                    {reviewsData.map((review, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="focus:outline-none w-full h-full cursor-pointer"
                        >
                            <img
                                src={`/reviews/${review.image}`}
                                alt={review.name}
                                className={`w-full h-full object-cover rounded-none transition duration-300 ${
                                activeIndex === index
                                    ? "grayscale-0"
                                    : "grayscale opacity-50 hover:opacity-100"
                                }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="lg:col-span-2">
                    <Splide
                        ref={splideRef}
                        options={{
                            type: "loop",
                            autoplay: true,
                            interval: 5000,
                            arrows: false,
                            pagination: false,
                            perPage: 1,
                        }}
                        onMoved={(splide, newIndex) => setActiveIndex(newIndex)}
                        className="w-full"
                    >
                        {reviewsData.map((review, index) => (
                            <SplideSlide key={index}>
                                <div className="">
                                    <p className="mb-10 text-2xl font-light text-gray-700 italic">{review.review}</p>
                                    <p className="text-lg text-gray-500">{review.title}</p>
                                    <h3 className="text-2xl font-bold capitalize text-gray-900">
                                        {review.name}
                                    </h3>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
}
