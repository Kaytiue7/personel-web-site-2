'use client';

import { useState, useEffect, useRef } from "react";
import { VscListSelection } from "react-icons/vsc";

export default function Header() {
  const [sideBarVisiblity, setSideBarVisibility] = useState(false);
  

  const sideBarRef = useRef<HTMLDivElement>(null); 
  const sideBarToggleRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setSideBarVisibility(!sideBarVisiblity);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node) &&
        sideBarToggleRef.current &&
        !sideBarToggleRef.current.contains(event.target as Node)
      ) {
        setSideBarVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row items-center text-white justify-between bg-primary-blue w-full px-6 py-4 h-[6lvh]">
        <VscListSelection
          
          className="text-4xl cursor-pointer"
          onClick={toggleSideBar}
          ref={sideBarToggleRef}
        />
        <h1 className="text-2xl">Volkan Gümüş</h1>
      </div>

      {/* Sidebar */}
      <div
        ref={sideBarRef} 
        className={`fixed top-0 left-0 h-full bg-white shadow-xl shadow-black text-black transition-transform duration-300 ${
          sideBarVisiblity ? "translate-x-0" : "-translate-x-full"
        }`
    
          
    }
      >
        <div className="flex flex-col items-start justify-start h-full px-14 py-22">
          <h2 className="text-6xl font-semibold">Menu</h2>
          <nav className="flex flex-col mt-8 space-y-4">
            <a href="#" className="text-xl">• Main Page</a>
            <a href="#" className="text-xl">• Portfolio</a>
            <a href="#" className="text-xl">• Expertise</a>
            <a href="#" className="text-xl">• Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
}
