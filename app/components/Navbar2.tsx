"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import Logo from "@/public/fruteria-montoya-logo.png";



export default function Navbar2() {


 

    return (
        <div>
            <div className="bg-[#98b551] text-black text-sm px-4 py-3 flex justify-center">
  <p className="leading-relaxed text-center">
    Especialistas en naranja para jugo. Frescura diaria y precios especiales para mayoristas. 
    <button className="inline-block border-2 border-black-900 px-3 py-0.75 font-medium whitespace-nowrap ml-2 mt-0.5 align-middle">
      Contáctanos
    </button>
  </p>
</div>
         <div className="bg-[#C85A2A] px-4 py-4 flex items-center justify-between">
        <div className="text-white font-extrabold tracking-wide leading-none">
          <span className="block text-xl">FRUTERIA</span>

        </div>

        <button
          aria-label="Open menu"
          className="text-white text-3xl"
        >
          <AiOutlineMenu />
        </button>
      </div>
      </div>
    )
}