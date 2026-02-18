"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fira_Sans } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Handshake } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const boldonse = Fira_Sans({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const monserrat = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type SlideProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const slides: SlideProps[] = [
  { image: "/oranges-background.jpeg", title: "ESPECIALISTAS EN NARANJAS", description: "Naranjas frescas, jugosas y naturales", index: 0 },
  { image: "/image1.png", title: "100% Natural", description: "No chemicals, just nature", index: 1 },
  { image: "/image3.jpg", title: "Premium Quality", description: "Perfect for juice", index: 2 },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[60vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Slide({ image, title, description, index }: SlideProps) {
  const isFirst = index === 0;

  if (index === 0) {
    return (
      <section className="relative w-full h-full overflow-hidden flex items-center justify-center text-center pb-22">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover scale-105 brightness-90 saturate-[1]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />

        <div className="relative z-10 max-w-5xl px-6">
          {/* Title */}
          <h1
            className={`text-5xl sm:text-7xl md:text-8xl text-white  drop-shadow-xl tracking-wide ${boldonse.className}`}
          >
            {title}
          </h1>
          {/* Description */}
          <p
            className={`mt-6 text-xl md:text-3xl text-white/90 font-light max-w-xl mx-auto drop-shadow-md ${monserrat.className}`}
          >
            {description}
          </p>

          <div className="mt-10 flex justify-center">

            {/* Button */}
            <button className=" mt-20 group relative px-14 py-2.5 bg-[#6ca300] hover:bg-[#7dbd00] text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(108,163,0,0.5)] hover:shadow-[0_15px_25px_-5px_rgba(108,163,0,0.6)] transition-all duration-300 flex items-center gap-1 overflow-hidden active:scale-95">
              {/* White glow effect on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </span>
              <span className="text-large">UBÍCANOS</span>
            </button>
          </div>
        </div>
      </section>
    );



  }

  else if (index === 1 || index === 2) {
   return (
<section className="relative w-full min-h-[750px] overflow-hidden justify-center px-6 ">
      
      {/* 1. Background Image with warm golden overlay */}
      {/* Replace '/your-market-bg.jpg' with your actual image path */}
      <div className="absolute inset-0 w-full h-full">
         <Image
            src={image}
            alt="Wholesale Produce Market"
            fill
            priority
            className="object-cover"
         />
        {/* A warm, slightly golden dark overlay to make the foreground pop */}
        <div className="absolute inset-0 bg-[#3d2b1f]/30 mix-blend-multiply" />
      </div>


      {/* 2. Main Content Stack */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xl mt-20">
        
        {/* --- THE GOLD SEMI-CIRCLE HEADER WITH ICON --- */}
        {/* Using a rich gold gradient */}
        <div className="bg-gradient-to-b from-[#d4af37] to-[#b8860b] pt-10 pb-2 px-20 rounded-t-full shadow-[0_-4px_15px_rgba(184,134,11,0.3)] z-20 flex justify-center items-center relative border-t border-white/20">
            {/* Subtle inner shine effect */}
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white/20 to-transparent mix-blend-overlay"></div>
            {/* The Handshake Icon - White for sharp contrast against the gold */}
            <Handshake size={64} color="white" strokeWidth={1.25} className="drop-shadow-sm" />
        </div>

        {/* --- THE MAIN GLASS CARD --- */}
        <div className="bg-white/60 backdrop-blur-xl border-b border-x border-white/40 w-full px-8 pt-6 pb-6 md:px-12 md:pt-10 md:pb-28 shadow-2xl rounded-sm text-center flex flex-col items-center relative">
          
          {/* Heading - Using dark gold/brown tones for elegance */}
          <h1 className="text-[#8b5e34] text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-2 leading-none">
            MAYOREO <br />
            {/* Lighter, richer gold for contrast */}
            <span className="text-[#a67c00] drop-shadow-sm">DE PRODUCTOS FRESCOS</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#4a3c31] text-lg md:text-xl font-medium max-w-sm leading-relaxed mb-4 font-serif">
           Proveemos frutas y verduras frescas de las mas alta calidad a nivel nacional.
          </p>
        </div>
      </div>
    </section>
);

  }
  // return (

  //   <div className="relative w-full h-full">
  //     <Image src={image} alt={title} fill className="object-cover" priority />

  //     <div
  //       className={`absolute inset-0 flex flex-col justify-center text-white px-6
  //         ${isFirst ? "items-start text-left pl-12 md:pl-20" : "items-center text-center"}
  //       `}
  //     >
  //       <h1 className={`text-5xl md:text-6xl font-bold mb-4 mx-4 drop-shadow-lg ${libreBodoni.className}`}>{title}</h1>
  //       <p className="text-lg md:text-xl max-w-xl drop-shadow-md">{description}</p>
  //       <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
  //         Learn More
  //       </button>
  //     </div>
  //   </div>
  // );
}
