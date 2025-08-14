"use client";

import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import React, { useState, useRef, useEffect, useCallback } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const achievementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slidesImage = [
  { id: 1, title: "First Goal for Barcelona", imgSrc: "/images/first.jpeg" },
  { id: 2, title: "Messi with Ballon d'Or", imgSrc: "/images/balandor.jpeg" },
  { id: 3, title: "Copa del Rey victory", imgSrc: "/images/copa.jpeg" },
  { id: 4, title: "Iconic celebration", imgSrc: "/images/madrid.jpeg" },
  { id: 5, title: "La Liga victory", imgSrc: "/images/laliga.jpeg" },
  { id: 6, title: "His first hat-trick", imgSrc: "/images/hatrick.jpeg" },
  { id: 7, title: "Legendary trio in football", imgSrc: "/images/three.jpeg" },
  { id: 8, title: "World Cup victory", imgSrc: "/images/world.jpeg" },
  { id: 9, title: "Copa America victory", imgSrc: "/images/america.jpeg" },
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetSlides = useCallback(() => {
    slidesRef.current.forEach((slide) => {
      if (slide) {
        gsap.to(slide, { flex: 1, duration: 0.5, ease: "power2.out" });
        slide.classList.remove("active");
      }
    });
  }, []);

  const activateSlide = useCallback(
    (index: number) => {
      resetSlides();
      const slide = slidesRef.current[index];
      if (slide) {
        slide.classList.add("active");
        gsap.to(slide, { flex: 5, duration: 0.8, ease: "power2.out" });
        gsap.fromTo(
          slide.querySelector("img"),
          { scale: 1.05 },
          { scale: 1, duration: 1.2, ease: "power2.out" }
        );
        gsap.fromTo(
          slide.querySelector(".caption"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
        );
      }
      setCurrent(index);
    },
    [resetSlides]
  );

  useEffect(() => {
    activateSlide(current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slidesImage.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activateSlide, current]);

  const handleSlideClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    activateSlide(index);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slidesImage.length - 1 ? 0 : prev + 1));
    }, 6000);
  };

  return (
    <main className={`${inter.className}`}>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/messi-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-white text-center top-1/2 transform -translate-y-1/2 px-4">
          <h1 className="text-6xl font-bold">From Rosario to the world.</h1>
          <p className="font-semibold">Journey of glory.</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen p-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col h-full">
          <div className="mb-6 text-center">
            <h2 className="font-bold text-3xl mb-2">Major Achievements</h2>
            <p className="text-lg">The trophies that define a legendary career.</p>
          </div>

          {/* First Row */}
          <div className="flex flex-wrap flex-1 gap-6">
            <motion.div
              className="w-full lg:flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">🏆</span>
                <h3 className="font-bold text-lg">FIFA World Cup</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">2022</p>
              <p className="text-base">Captain of Argentina's World Cup-winning team in Qatar.</p>
            </motion.div>

            <motion.div
              className="w-full lg:flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">🎖️</span>
                <h3 className="font-bold text-lg">Ballon d'Or Awards</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">8 times</p>
              <p className="text-base">2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023.</p>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-6 mt-8">
            <motion.div
              className="flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">🏆</span>
                <h3 className="font-bold text-lg">Champions League</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">4 times</p>
              <p className="text-base">2006, 2009, 2011, 2015 with Barça.</p>
            </motion.div>

            <motion.div
              className="flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">🏆</span>
                <h3 className="font-bold text-lg">La Liga Titles</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">10 times</p>
              <p className="text-base">2005-2006, 2008-2013, 2014-2016, 2017-2019</p>
            </motion.div>
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap gap-6 mt-8">
            <motion.div
              className="flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 text-2xl">🏆</span>
                <h3 className="font-bold text-lg">Copa America</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">2021, 2024</p>
              <p className="text-base">First major international trophy with Argentina.</p>
            </motion.div>

            <motion.div
              className="flex-1 p-4 border border-gray-700 rounded"
              variants={achievementVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-200 text-2xl">⚽</span>
                <h3 className="font-bold text-lg">All-time Top Scorer</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">Barcelona & Argentina</p>
              <p className="text-base">Top goal scorer in club and national history.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Iconic Moments Section */}
      <section
        id="iconic"
        className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-16"
      >
        {/* Header */}
        <h2 className="font-bold text-3xl mb-8 text-white text-center">
          Iconic Moments
        </h2>

        {/* Accordion Slider */}
        <div className="relative flex w-[85vw] max-w-7xl gap-2 overflow-hidden rounded-lg">
          {slidesImage.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => {
                if (el) slidesRef.current[index] = el;
              }}
              onClick={() => handleSlideClick(index)}
              className="flex-1 cursor-pointer relative overflow-hidden rounded-lg transition-all duration-500 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
            >
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
              />
              <div className="caption absolute bottom-4 left-4 text-white opacity-0">
                <h3 className="font-bold text-xl">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
