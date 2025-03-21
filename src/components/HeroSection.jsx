import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="mt-20 px-16 flex items-center font-medium">
      {/* Left Section */}
      <div className="flex flex-col basis-1/2 w-full pr-8">
        <div className="flex justify-center items-center gap-1 bg-black3 text-gray-300 py-2 px-4 rounded-[100px] text-sm w-fit">
          <img src="./hi-icon.png" alt="Hi" className="w-8 h-8" />
          <p>Let's Save our Environment</p>
        </div>
        <h1 className="text-black2 font-bold text-6xl mt-[11px]">
          Optimize your eco reporting with{" "}
        </h1>
        <h2 className="text-white font-bold rounded-[42px] w-fit mt-[14px] text-6xl py-2 px-8 bg-orange-300 uppercase">
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
      <div className="flex-1 w-full">
        <img src="./hero-img.png" alt="Banner Img" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
