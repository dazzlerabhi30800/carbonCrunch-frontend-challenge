import React from "react";
import { hugData } from "../data/data";

const Hug = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[35px] px-8 md:px-16 mt-28 md:mt-40">
      {hugData?.map((data, index) => (
        // Hug Comp
        <div
          key={index}
          className={`flex flex-col md:basis-initial py-[9px] px-[14px] rounded-xl ${data.bgClass} shadow-md flex-1`}
        >
          <h3
            className={`text-[30px] sm:text-[40px] md:text-[53px] font-bold ${data.labelClass}`}
          >
            {data.label}
          </h3>
          <p className={`${data.infoClass} text-xs sm:text-sm md:text-base`}>
            {data.info}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Hug;
