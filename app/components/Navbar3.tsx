"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/public/fruteria-montoya-logo.png";

export default function Navbar3() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100]">
      {/* THE GRADIENT: It starts deep green and fades to transparent */}
      <div className="absolute inset-0 h-32 bg-gradient-to-b from-[#1e291b]/90 to-transparent pointer-events-none" />

      {/* THE CONTENT */}
      <div className="relative w-full px-8 py-4 flex items-center justify-between">
        
        {/* LOGO: Set to the left with more breathing room */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Frutería Montoya Logo"
            width={100}
            height={100}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* MENU TOGGLE: We put it in a "Boutique" box to make it look expensive */}
        <button
          onClick={() => setOpen(!open)}
          className="relative group flex items-center gap-3 px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white transition-all hover:bg-white/20 active:scale-95 shadow-xl"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase hidden sm:block">Menu</span>
          <div className="flex flex-col gap-1">
            <div className={`h-[2px] w-5 bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`h-[2px] w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <div className={`h-[2px] w-5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU: Full screen blur overlay */}
      <div 
        className={`fixed inset-0 bg-[#1e291b]/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <AiOutlineClose size={32} />
        </button>
        
        <div className="h-full flex flex-col items-center justify-center gap-10">
           {['Inicio', 'Productos', 'Contacto'].map((item) => (
             <a 
               key={item}
               href="#" 
               className="text-white text-4xl font-black tracking-tighter hover:text-[#6ca300] transition-colors uppercase"
             >
               {item}
             </a>
           ))}
        </div>
      </div>
    </nav>
  );
}