import React, { useEffect, useState } from "react";
import Button from "./Button";

const HeroSection = () => {
  // const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isTransition) {
  //       nextSlide();
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [index, isTransition]);

  // useEffect(() => {
  //   if (isTransition) {
  //     const timeout = setTimeout(() => {
  //       setIsTransition(false);
  //     }, 1200);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isTransition]);

  // const nextSlide = () => {
  //   if (!isTransition) {
  //     setIsTransition(true);
  //     setIndex((prev) => (prev + 1 > 3 ? 0 : prev + 1));
  //   }
  // };

  return (
    <section className="mt-20 px-16 flex items-center font-medium overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col basis-1/2 w-full pr-8">
        <div
          className={`flex relative justify-center items-center gap-1 bg-black3 text-gray-300 py-2 px-4 rounded-[100px] text-sm w-fit transition duration-500 linear
             ${isTransition ? "-translate-y-[500px]" : "translate-y-0"}
           `}
        >
          <img src="./hi-icon.png" alt="Hi" className="w-8 h-8" />
          <p>Let's Save our Environment</p>
        </div>
        <h1
          className={`text-black2 font-bold text-6xl mt-[11px] transition duration-500 linear ${
            isTransition
              ? "-translate-x-[300px] opacity-0 rotate-x-180"
              : "translate-x-0 opacity-100"
          }`}
        >
          Optimize your eco reporting with{" "}
        </h1>
        <h2
          className={`text-white font-bold rounded-[42px] w-fit mt-[14px] text-6xl py-2 px-8 bg-orange-300 uppercase transition duration-500 linear ${
            isTransition
              ? "-translate-x-[200px] opacity-0"
              : "translate-x-0 opacity-100"
          } `}
        >
          carbon crunch
        </h2>
        <p className="font-medium w-[95%] text-black2 text-2xl mt-4 mb-11">
          <span className="text-green-600 mr-2">95%</span>
          Accurate Carbon Calculations Trusted by Industry Leaders
        </p>
        <div className="flex items-center gap-4">
          <Button
            label="Free Calculator"
            classes="bg-transparent text-green-500 hover:text-green-300"
          />

          <Button
            label="Book Demo"
            classes="bg-green-600 text-black1 rounded-md hover:bg-green-400"
          />
        </div>
      </div>
      {/* Right Section */}
      <div
        className={`flex-1 w-full transition duration-800 linear ${
          // isTransition ? "-translate-y-[120%]" : "translate-y-0 linear"
          isTransition ? "slide-up" : "slide-down"
        }`}
      >
        <img src="./hero-img.png" alt="Banner Img" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
