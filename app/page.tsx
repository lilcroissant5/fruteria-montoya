import Image from "next/image";
import Logo from "@/public/globe.svg"
import HeroFruitMobile from "@/public/montoya-hero-mobile.png"
import HeroFruit from "@/public/montoya-hero.png"
import { Londrina_Solid } from "next/font/google";
import Link from "next/link";

const libreBodoni = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});


export default function Home() {
  return (
    <div>
      <main >
        <div className="block lg:hidden relative w-full aspect-square md:aspect-video">
          <Image
            src={HeroFruitMobile}
            alt="Fruit Hero Image"
            width={1600}
            height={900}
            className="w-full h-auto"
          />

          {/* Text */}
          <div className={`absolute left-1/2 -translate-x-1/2 w-[90%] max-w-xl flex flex-col items-center justify-center top-[clamp(2rem,20vw,12rem)] ${libreBodoni.className}`}>
            <h1 className="text-green text-center drop-shadow-lg text-[clamp(2rem,8vw,7rem)] leading-tight">
              ESPECIALISTAS EN <br />NARANJA PARA JUGO
            </h1>
          </div>
          <div
            className={`absolute bottom-10  left-1/2 -translate-x-1/2 w-[90%] max-w-xl
                        flex flex-col items-center justify-center mt-16
                        `}
          >
            <h1
              className={`text-green text-center drop-shadow-lg
                        text-[clamp(1rem,4vw,4rem)] leading-tight ${libreBodoni.className}`}
            >
              Los más frescos cítricos y frutas para restaurantes y mayoristas en Mercado Gómez Campana.
            </h1>
              <Link
                        href="https://wa.me/6671270782?text=Hola%20quiero%20información%20sobre%20sus%20productos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 group relative inline-flex items-center justify-center gap-3 px-15 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full border border-white/20 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                    >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                        <span className="relative flex flex-col items-center leading-tight">
                            <span className="text-sm font-bold tracking-wide">WhatsApp</span>
                            <span className="text-[10px] uppercase tracking-[0.1em] opacity-90 font-black">
                                ¡ORDENA AQUI!
                            </span>
                        </span>
                    </Link>
          </div>
          
        </div>

        {/**************************************************************************  Desktop / large screen */}
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
