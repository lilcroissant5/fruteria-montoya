"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import Logo from "@/public/fruteria-montoya-logo.png";



export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }
}, [menuOpen]);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <header
            className={`drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)] fixed top-4 left-0 right-0 z-30 
                flex justify-center transition-transform duration-400 ${isVisible ? "translate-y-0" : "-translate-y-32"
                }`}
        >
            <nav className="flex items-center justify-between gap-8 px-4 pt-1 bg-green/60 backdrop-blur-md rounded-full w-[90%] max-w-full">
                <Link href="/" className="flex-shrink-0">
                    <div className="relative cursor-pointer flex items-center my-1 ml-2">
                        <img
                            src={Logo.src}
                            alt="Fruteria Montoya Logo"
                            className="w-[clamp(75px,12vw,100px)] h-auto"
                        />

                    </div>
                </Link>
                <div className="hidden lg:flex items-center justify-between gap-6">

                    <ul className="flex items-center gap-1.5 text-sm 2xl:text-base">
                        <NavLink href="/" isActive={pathname === "/"}>
                            INICIO
                        </NavLink>
                        <NavLink href="/productos" isActive={pathname === "/productos"}>
                            PRODUCTOS
                        </NavLink>
                        <NavLink href="/ordena" isActive={pathname === "/ordena"}>
                            ORDENA
                        </NavLink>
                        <NavLink href="/historia" isActive={pathname === "/historia"}>
                            HISTORIA
                        </NavLink>
                        <NavLink href="/contacto" isActive={pathname === "/contacto "}>
                            CONTACTO
                        </NavLink>
                    </ul>
                    <Link
                        href="https://wa.me/6671270782?text=Hola%20quiero%20información%20sobre%20sus%20productos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 px-5 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full border border-white/20 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
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
                <div
                    onClick={handleNav}
                    className="lg:hidden cursor-pointer z-70 text-white"
                >
                    {menuOpen ?
                        <AiOutlineClose size={25} />
                        :
                        <AiOutlineMenu size={25} />
                    }
                </div>
                <div
                    className={`min-[990px]:hidden fixed inset-0 w-full h-[80dvh] overflow-y-auto bg-green/95 backdrop-blur-lg z-60 flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl rounded-br-4xl
                            ${menuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                >
                    <ul className="mb-20 flex flex-col items-center gap-8 text-2xl font-bold">
                        <div onClick={handleNav}>
                            <NavLink href="/" isActive={pathname === "/"}>INICIO</NavLink>
                        </div>
                        <div onClick={handleNav}>
                            <NavLink href="/productos" isActive={pathname === "/productos"}>PRODUCTOS</NavLink>
                        </div>
                        <div onClick={handleNav}>
                            <NavLink href="/ordena" isActive={pathname === "/ordena"}>ORDENA</NavLink>
                        </div>
                        <div onClick={handleNav}>
                            <NavLink href="/historia" isActive={pathname === "/historia"}>HISTORIA</NavLink>
                        </div>
                        <div onClick={handleNav}>
                            <NavLink href="/contacto" isActive={pathname === "/contacto"}>CONTACTO</NavLink>
                        </div>
                        {/* SOCIAL ICONS CONTAINER */}
                        <div className="flex items-center gap-6 pt-8 mt-8">
                            <Link href="https://www.tiktok.com/@fruteramontoya?_r=1&_t=ZT-93Igj8NbT0H" target="_blank" className="hover:scale-110 transition-transform">
                                <FaTiktok size={30} className="text-white" />
                            </Link>
                            <Link href="https://facebook.com/share/1KQFwn3UxX/?mibextid=wwXlfr" target="_blank" className="hover:scale-110 transition-transform">
                                <FaFacebook size={30} className="text-white" />
                            </Link>
                            <Link href="https://instagram.com/fruteriamontoya" target="_blank" className="hover:scale-110 transition-transform">
                                <FaInstagram size={30} className="text-white" />
                            </Link>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
}