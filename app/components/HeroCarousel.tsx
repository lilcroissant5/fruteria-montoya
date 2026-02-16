"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Hurricane } from "next/font/google";
import { Montserrat } from "next/font/google";
import { MapPinIcon } from '@heroicons/react/24/solid'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const libreBodoni = Hurricane({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const monserrat = Montserrat({
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
  { image: "/gladys-hero.jpeg", title: "Especialistas en naranjas", description: "Naranjas frescas, jugosas y naturales", index: 0 },
  // { image: "/image2.jpg", title: "100% Natural", description: "No chemicals, just nature", index: 1 },
  // { image: "/image3.jpg", title: "Premium Quality", description: "Perfect for juice", index: 2 },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh]">
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
    <div className="relative w-full h-full">
      <Image src={image} alt={title} fill className="object-cover" priority />

      <div
        className={`absolute inset-0 flex-col text-white px-6
          items-start text-left `}
      >
        <h1 className={`text-6xl md:text-6xl font-bold mt-7 mr-5 drop-shadow-lg ${libreBodoni.className}`}>{title}</h1>
        <p className={`mt-6  pr-10 mr-12 text-md md:text-xl max-w-xl drop-shadow-md ${monserrat.className}`}>{description}</p>
<button className="mt-16 px-10 py-2 bg-white text-orange-600 font-semibold rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
  Ubícanos
</button>






      </div>
    </div>
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
