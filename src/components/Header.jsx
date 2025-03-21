import React, { useState } from "react";
import { links } from "../data/data";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <header className="flex items-center justify-between pt-3 px-4 sm:px-6 md:pt-6 lg:pt-12 lg:px-10 xl:pt-[58px] xl:px-14">
      {/* Logo */}
      <div className="flex items-center gap-[6px] text-sm lg:text-base xl:text-lg">
        <img
          src="./logo.png"
          alt="Carboncrunch"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
        />
        <p>Carboncrunch</p>
      </div>
      <button
        onClick={() => setShowNavbar((prev) => !prev)}
        className="text-xl md:hidden text-black1 hover:text-black z-30"
      >
        {showNavbar ? (
          <i className="fa-solid fa-times"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <nav
        className={`transition duration-400 linear ${
          showNavbar ? "translate-x-0" : "translate-x-[500px]"
        } flex flex-col md:translate-x-0 md:transition-none  md:flex-row fixed top-0 right-0 h-screen md:h-auto w-3/4 md:w-fit md:static md:top-auto md:right-0 bg-slate-200 md:bg-transparent z-20 md:justify-between gap-14 md:gap-12 lg:gap-24 xl:gap-32 py-10 px-5 md:p-0`}
      >
        <ul className="flex flex-col gap-7 text-sm lg:text-base lg:gap-9 xl:gap-11 md:flex-row items-center font-medium">
          {links?.map((item, index) => (
            <li key={index} className="hover:text-slate-500 hover:underline">
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center text-xs md:text-sm lg:text-base  items-center gap-4 [&_button]:py-[9px]  [&_button]:rounded-md [&_button]:hover:brightness-[0.9]">
          <button className="bg-green-200 px-8 md:px-4 lg:px-8 text-green-600">
            Login
          </button>
          <button className="bg-green-500 text-black font-bold px-4 md:px-2 lg:px-4 whitespace-nowrap">
            Book Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
