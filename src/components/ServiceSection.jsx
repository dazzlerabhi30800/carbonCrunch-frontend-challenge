import React from "react";
import SectionLabel from "../utils/SectionLabel";
import SectionHeading from "../utils/SectionHeading";
import { serviceData } from "../data/data";
import ServiceComp from "../utils/ServiceComp";

const ServiceSection = () => {
  return (
    <section className="flex flex-col mt-10 md:mt-[75px] mb-[50px] md:mb-[100px] px-8 md:px-16 gap-5">
      <div className="mx-auto flex flex-col gap-1">
        <SectionLabel label="our services" />
        <SectionHeading
          highlightText="What do"
          text="we do?"
          highlightClass="text-black2"
          textClass="text-orange-400"
        />
      </div>
      <div className="flex flex-col  md:flex-row gap-10 md:gap-2 items-center ">
        <div className="basis-1/2 flex">
          <img src="./service-img.png" alt="Service Img" className="w-full" />
        </div>
        {/* Services Wrapper */}
        <div className="relative flex flex-col gap-[17px] flex-1 w-full">
          {serviceData?.map((data, index) => (
            <ServiceComp key={index} {...data} />
          ))}
          {/* Navigation Button */}
          <button className="bg-[#fff1da] hover:bg-amber-200 rounded-[50%] py-2 px-3 text-black2 absolute -bottom-4 text-xl left-1/2 -translate-x-1/2 shadow-md transition duration-200 hover:scale-120">
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
