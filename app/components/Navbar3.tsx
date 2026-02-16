"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/public/fruteria-montoya-logo.png";

export default function Navbar3() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Main Container */}
      <div className="w-full bg-[#3F4F3C] px-5 py-3 flex items-center justify-between shadow-lg">
        
        {/* Logo + Text */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="Frutería Montoya Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#6C8C4E] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition active:scale-95"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-24 w-[90%] max-w-md bg-white rounded-xl shadow-xl p-6 space-y-4 text-[#3F4F3C] font-medium">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Products</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
