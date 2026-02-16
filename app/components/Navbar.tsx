"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Nosotros", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Ofertas", href: "#" },
  { label: "Contacto", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-green-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Frutería Montoya"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-semibold text-lg">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-yellow-300 text-green-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-400 transition">
              Contacto
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-green-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-semibold text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-300 transition"
              >
                {item.label}
              </a>
            </li>
          ))}

          <button className="bg-yellow-300 text-green-900 font-bold px-6 py-2 rounded-full">
            Contacto
          </button>
        </ul>
      </div>
    </nav>
  );
}
