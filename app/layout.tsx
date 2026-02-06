import type { Metadata } from "next";
import { Mako } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";

const robotoFlex = Mako({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fruteria Montoya",
  description: "Frutería Montoya en Culiacán, Sinaloa. Ofrecemos frutas de temporada al mayoreo y menudeo en el Mercado de Abastos. ¡Servicio a domicilio disponible!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoFlex.className}>
      <body>
       <Navbar2 /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
