"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fira_Sans } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { MapPinIcon } from '@heroicons/react/24/solid'
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
  { image: "/image2.jpg", title: "100% Natural", description: "No chemicals, just nature", index: 1 },
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
              <span className="text-large tracking-tight">UBÍCANOS</span>
            </button>
          </div>
        </div>
      </section>
    );



  }

  else if (index === 1 || index === 2) {
   return (
  <section className="relative w-full h-[90vh] min-h-[650px] overflow-hidden flex items-center justify-center text-center px-6">

    {/* Background Image */}
    <Image
      src={image}
      alt={title}
      fill
      priority
      className="object-cover brightness-[0.65] saturate-[1.15]"
    />

    {/* Soft Vignette Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

    {/* Glass Card */}
<div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
  
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-8 md:px-14 md:py-16 shadow-2xl rounded-3xl text-center">
    <h1
      className={`text-3xl md:text-6xl font-black leading-tight text-white ${boldonse.className}`}
    >
      Precios Especiales
      <span className={`text-xl block mt-1 text-white ${monserrat.className}`}>
        Para Restaurantes y Mayoristas
      </span>
    </h1>
  </div>

  {/* Button */}
  <button className="mt-12 group relative px-14 py-3 bg-orange hover:bg-[#7dbd00] text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(108,163,0,0.5)] hover:shadow-[0_15px_25px_-5px_rgba(108,163,0,0.6)] transition-all duration-300 flex items-center gap-2 overflow-hidden active:scale-95">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    <span className="relative z-10">WhatsApp</span>
  </button>

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
