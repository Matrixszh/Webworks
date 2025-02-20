"use client";
import React, { useState, useEffect, useRef } from "react";

interface Slide {
  id: string;
  collaborator: string;
  imageUrl: string;
  link: string; // New property for the link
}

interface SlideshowProps {
  autoPlayInterval?: number;
}

const slides: Slide[] = [
  { id: "01", collaborator: "Workshop", imageUrl: "/workshop.png", link: "https://goldminingforpreforeclosures.com/" },
  { id: "02", collaborator: "EliteSpaces", imageUrl: "/ee.png", link: "https://elitespaces.org/" },
  { id: "03", collaborator: "CreativeFunding", imageUrl: "/cf.png", link: "https://creative-funding.vercel.app/" },
  { id: "04", collaborator: "360MarketingSolutions", imageUrl: "/360.png", link: "https://www.360marketingsolutions.co.in/" }, //choose better image
  { id: "05", collaborator: "AcostaExteriors", imageUrl: "/ae.png", link: "https://acostaexteriors.com/" },
  { id: "06", collaborator: "Potfolio", imageUrl: "/portfolio.png", link: "https://nitapsharma.com/" },
];

const SponsorsSlideshow: React.FC<SlideshowProps> = ({
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [autoPlayInterval]);

  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8" id="projects">
      {/* Marquee Section */}
      <div className="overflow-hidden bg-transparent py-14 sm:py-14 md:py-16 lg:py-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  Projects
                </span>
                <span className="text-[#9E0CCA] text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  .
                </span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Slideshow Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-lg shadow-lg bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out 
            ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full" // Ensure the link takes up the full size of the container
            >
              <img
                src={slide.imageUrl}
                alt={`Collaboration with ${slide.collaborator}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </a>
            <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-white text-xs sm:text-sm md:text-xl lg:text-2xl font-semibold tracking-tighter bg-black px-4 py-2">
              {slide.collaborator}
            </h2>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideChange(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
            ${
              currentSlide === idx
                ? "bg-[#9e0cca] w-3 h-3"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorsSlideshow;