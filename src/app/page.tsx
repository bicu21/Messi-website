"use client";

import { Inter } from "next/font/google";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import React, { useState, useRef, useEffect, useCallback } from "react";
import TestimonyCarousel from '../components/TestimonyCarousel'
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
    <main className={inter.className}>
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

      
      <section id="achievements" className="min-h-screen p-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col h-full">
          <div className="mb-6 text-center">
            <h2 className="font-bold text-3xl mb-2">Major Achievements</h2>
            <p className="text-lg">The trophies that define a legendary career.</p>
          </div>

        
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

      
      <section
        id="iconic"
        className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-16"
      >
        
        <h2 className="font-bold text-3xl mb-8 text-white text-center">
          Iconic Moments
        </h2>

      
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


       <section
        id="testimonial"
        className=" relative flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-16"
      >
      
        <h2 className="font-bold text-3xl mb-8 text-white text-center">
          Testimony
        </h2>
        <p className="text-white mb-2 ">What others say about the goat from legends coaches and peers</p>
      <TestimonyCarousel />
      </section>
      
      <section
        id="testimonial"
        className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-16"
      >
       
        <h2 className="font-bold text-3xl mb-8 text-white text-center">
          Timeline
        </h2>
        <p className="text-white mb-2 ">Key times in Messi's incredible journey.</p>
        <Timeline/>
     
      </section>
      <section
  id="testimonial"
  className="relative bg-gray-900 px-6 py-16 min-h-screen"
>
  <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
  
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-white h-full flex flex-col">
      <h2 className="font-extrabold text-4xl mb-6 text-white text-center md:text-left">
        Personal Information
      </h2>
      <p className="text-yellow-50 mb-6 text-center md:text-left">
        Get to know the man behind the legend
      </p>
      <div className="space-y-3 text-yellow-100 text-lg flex-1">
        <p>
          <span className="font-semibold">Nickname:</span> La Pulga (The Flea)
        </p>
        <p>
          <span className="font-semibold">Height:</span> 1.70 m (5 ft 7 in)
        </p>
        <p>
          <span className="font-semibold">Position:</span> Right Winger / Attacking Midfielder / False 9
        </p>
        <p>
          <span className="font-semibold">Preferred Foot:</span> Left
        </p>
        <p>
          <span className="font-semibold">Wife:</span> Antonela Roccuzzo (married 2017)
        </p>
        <p>
          <span className="font-semibold">Children:</span> Thiago, Mateo, Ciro
        </p>
        <p>
          <span className="font-semibold">Hometown:</span> Rosario, Santa Fe, Argentina
        </p>
      </div>
    </div>

    <div className="bg-gray-800 p-6 rounded-xl shadow-2xl text-yellow-100 flex flex-col justify-center">
      <img
        src="images/family.jpg"
        alt="Lionel Messi"
        className="w-full h-auto object-cover rounded-md mb-6 shadow-lg"
      />
      <p className="text-lg leading-relaxed">
        Messi married his childhood sweetheart Antonela Roccuzzo in 2017. They have three sons: Thiago (born 2012), Mateo (born 2015), and Ciro (born 2018). Despite his global fame, Messi remains deeply connected to his roots in Rosario, Argentina.
      </p>
    </div>
  </div>

  
  <div className="max-w-7xl mx-auto mt-12 bg-gray-800 p-6 rounded-xl shadow-lg text-yellow-100 text-lg">
    <h3 className="text-2xl font-bold mb-4 text-white">Why I Created This Website</h3>
    <p className="leading-relaxed whitespace-pre-line">
      {`I created this website because Lionel Messi has been more than just a footballer to me he has been part of my life, my childhood, and my happiness for more than ten years. I grew up with his name on my jerseys, his stickers in my collection, his picture on my notebooks, and his story in my heart. I have worried for him in the biggest matches, sometimes so much that it was hard for me to even breathe like when Argentina played against France in unforgettable battles that tested every fan’s heart. I felt his sadness when defeats came, as if they were my own, and I carried the weight of his struggles alongside him. But those difficult moments made the victories even more magical. I was overwhelmed with joy when he finally lifted the World Cup, when he conquered the Champions League, when he triumphed against PSG, and when he gave Argentina the long-awaited Copa América victory. Each of those moments felt like personal celebrations, as if my own dreams had come true. Messi’s brilliance has shown me how beautiful football truly is; his feet turned the game into art and made my childhood unforgettable. No one can ever replace him in my heart, and no one will ever receive my support the way he has. This website is my tribute to the greatest of all time, the one who made me fall in love with football forever.`}
    </p>
  </div>
</section>
<section className="footer">
        <Footer/>

</section>
</main>
  );
}
