import React, { useEffect, useState } from "react";
import Button from "./Button";
import { heroData } from "../data/data";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [actualIndex, setActualIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransition) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isTransition]);

  useEffect(() => {
    if (isTransition) {
      const timeout = setTimeout(() => {
        setIsTransition(false);
        setActualIndex(index);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTransition]);

  const nextSlide = () => {
    if (!isTransition) {
      setIsTransition(true);
      setIndex((prev) => (prev + 1 > 3 ? 0 : prev + 1));
    }
  };

  const handleIndex = (index) => {
    if (!isTransition) {
      setIsTransition(true);
      setIndex((prev) => (prev = index));
    }
  };

  return (
    <section className="mt-20 px-8 md:px-16 flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 items-center font-medium overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:basis-1/2 w-full md:pr-8">
          <div
            className={`flex relative justify-center items-center gap-1 bg-black3 text-gray-300 py-2 px-4 rounded-[100px] text-sm w-fit transition duration-500 linear
             ${isTransition ? "-translate-y-[500px]" : "translate-y-0"}
           `}
          >
            <img src="./hi-icon.png" alt="Hi" className="w-8 h-8" />
            <p>Let's Save our Environment</p>
          </div>
          <h1
            className={`text-black2 font-bold text-3xl sm:text-4xl md:text-6xl mt-[11px] transition duration-500 linear ${
              isTransition
                ? "-translate-x-[300px] opacity-0 rotate-x-180"
                : "translate-x-0 opacity-100"
            }`}
          >
            Optimize your eco reporting with{" "}
          </h1>
          <h2
            className={`flex flex-wrap gap-4 text-white font-bold rounded-[42px] w-fit mt-[14px] text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl py-2 px-8 bg-orange-300 uppercase transition duration-500 linear ${
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
            isTransition ? "slide-up" : "slide-down"
          }`}
        >
          <img
            src={heroData[actualIndex].img}
            alt="Banner Img"
            className="w-full object-cover rounded-md h-[350px] sm:h-[400px] lg:h-[500px]"
          />
        </div>
      </div>
      {/* Navigation Button */}
      <div className="flex gap-4 justify-center mt-5">
        {new Array(heroData.length).fill(0).map((_, i) => (
          <button
            disabled={isTransition}
            onClick={() => handleIndex(i)}
            key={i}
            className={`w-4 h-4 rounded-[50%] border ${
              i === index ? "bg-black2 border-transparent" : "border-black1"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
