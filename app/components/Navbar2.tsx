"use client"

import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "@/public/fruteria-montoya-logo.png";

export default function Navbar2() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const greenBarHeight = 70; // Height of your green bar

            // 1. Behavior at the very top
            if (currentScrollY <= greenBarHeight) {
                setIsFixed(false);
                setIsVisible(true);
            } 
            // 2. Scrolling Up: Make it fixed and slide it down
            else if (currentScrollY < lastScrollY) {
                setIsFixed(true);
                setIsVisible(true);
            } 
            // 3. Scrolling Down: Hide it
            else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="relative">
            {/* Green Bar - Scrolls away naturally */}
            <div className="bg-[#98b551] text-black text-sm px-4 py-3 flex justify-center h-[70px] items-center">
                <p className="leading-relaxed text-center">
                    Especialistas en naranja para jugo. Frescura diaria y precios especiales para mayoristas. 
                    <button className="inline-block border-2 border-black-900 px-3 py-0.75 font-medium whitespace-nowrap ml-2 mt-0.5 align-middle">
                        Contáctanos
                    </button>
                </p>
            </div>

            {/* Gray Navbar */}
            <nav 
                className={`
                    bg-[#ebe8e8] px-4 flex items-center justify-between w-full z-50 h-[70px]
                    transition-transform duration-500 ease-in-out
                    ${isFixed ? "fixed top-0 left-0 shadow-md" : "relative"}
                    ${isVisible ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <img src={Logo.src} alt="Logo" className="w-22 my-1.5 object-contain" />

                <button
                    aria-label="Open menu"
                    className="text-black text-3xl"
                >
                    <AiOutlineMenu />
                </button>
            </nav>
        </div>
    );
}