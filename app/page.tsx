'use client'

import { useEffect, useState } from 'react'
import Image from "next/image";
import Logo from "@/public/globe.svg"
import HeroFruitMobile from "@/public/montoya-hero-mobile.png"
import HeroFruit from "@/public/montoya-hero.png"
import { Londrina_Solid } from "next/font/google";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const libreBodoni = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});



export default function Home() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div>
      <main >

        {/* <div className="block lg:hidden relative w-full aspect-square md:aspect-video">
          <Image
            src={HeroFruitMobile}
            alt="Fruit Hero Image"
            width={1600}
            height={900}
            className="w-full h-auto"
          /> */}

          {/* Mobile Version*/}
          {/* <div
            className={`absolute left-1/2 -translate-x-1/2 w-[90%] max-w-xl flex flex-col items-center justify-center top-[clamp(2rem,23vw,12rem)] 
              ${libreBodoni.className} transition-all duration-[1000ms] delay-200 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
              ${animate ? 'opacity-100 translate-y-0 scale-[1.02] blur-0' : 'opacity-0 -translate-y-6 scale-[0.98] blur-sm'}`}>
            <h1 className="text-green text-center drop-shadow-lg text-[clamp(2.6rem,7vw,7rem)] leading-tight">
              ESPECIALISTAS EN <br /> NARANJA PARA JUGO
            </h1>
          </div>
          <div className={`absolute bottom-[clamp(1rem,0vw,10rem)] left-1/2 -translate-x-1/2 w-[90%] max-w-xl flex flex-col items-center justify-center mt-16
            transition-all duration-[1000ms] delay-200 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h1 className={`text-green text-center drop-shadow-lg text-[clamp(1rem,5vw,4rem)] leading-tight ${libreBodoni.className}`}>
              Los más frescos cítricos y frutas para restaurantes y mayoristas en Mercado Gómez Campana.
            </h1>
          </div>
          <Link
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 group">
            <div className="relative flex flex-col items-center justify-center w-15 h-15 bg-green-500 rounded-full shadow-lg shadow-green-500/40
                   transition-all duration-300 hover:scale-110 hover:shadow-green-600/70 active:scale-95 animate-bounce-slow">
              <FaWhatsapp className="w-10 h-10 text-white drop-shadow-md z-10" />
                <span className="absolute inset-0 rounded-full bg-green-400/40 blur-xl animate-pulse-glow z-0"></span>
            </div>
          </Link>
        </div> */}

        {/* Desktop Version*/}
        <div className="hidden lg:block relative w-full">
          <Image
            src={HeroFruit}
            alt="Fruit Hero Image"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
          {/* Overlay */}

          {/* Text */}





          <div
            className={`mt-8 absolute top-1/2 left-12 -translate-y-1/2
  flex flex-col items-center justify-center text-center
  tracking-[0.07em]
`}
          >
            {/* HERO TITLE */}
            <h1
              className={`text-green font-bold leading-tight
    text-4xl md:text-[clamp(2.0rem,3.5vw,3.5rem)]   ${libreBodoni.className}`}
            >
              ESPECIALISTAS EN NARANJA
              <br />
              PARA JUGO
            </h1>

            {/* SUBTITLE */}
            <h2
              className={`text-green font-bold mt-5
    text-lg md:text-[clamp(0.8rem,2.2vw,2.5rem)]
    leading-relaxed   ${libreBodoni.className}`}
            >
              Los más frescos cítricos y frutas <br />
              para restaurantes y mayoristas <br />
              en Mercado Gómez Campana.
            </h2>

            {/* CTA */}
            <Link
              href="https://maps.app.goo.gl/FuadLtdrsjJ4H73E6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 group relative inline-flex items-center justify-center gap-3
    px-5 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white
    font-medium rounded-full border border-white/20
    shadow-lg shadow-orange-500/30 transition-all duration-300
    hover:shadow-orange-500/50 hover:-translate-y-0.5 active:scale-95
    overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

              <span className="relative flex flex-col items-center leading-tight">
                <span className="text-sm font-bold tracking-wide">Visítanos</span>
                <span className="text-[10px] uppercase tracking-[0.1em] opacity-90 font-black">
                  Mercado Gómez Campana ⚲
                </span>
              </span>
            </Link>
          </div>

        </div>
        <Image src={Logo} alt="Italian Trulli" width={800} height={800}>
        </Image>
        <Image src={Logo} alt="Italian Trulli" width={800} height={800}>
        </Image>
      </main>
    </div>
  );
} 
