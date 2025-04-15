'use client';

import { useEffect, useState } from "react";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Main from "@/app/components/main";
import Portfolio from "@/app/components/portfolio";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowHeader(true); // en üstteyken göster
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true); // yukarı kaydırılıyorsa göster
      } else {
        setShowHeader(false); // aşağı kaydırılıyorsa gizle
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-6 pt-[80px]"> 
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <Header />
      </div>

      <Main />
      <Portfolio />

      <footer className="flex self-center justify-center w-full pt-14">
        <Footer />
      </footer>
    </div>
  );
}
