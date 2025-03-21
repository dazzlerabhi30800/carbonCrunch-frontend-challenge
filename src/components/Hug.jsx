import React from "react";
import { hugData } from "../data/data";

const Hug = () => {
  return (
    <section className="flex gap-[35px] px-16 mt-40">
      {hugData?.map((data, index) => (
        // Hug Comp
        <div
          key={index}
          className={`flex flex-col py-[9px] px-[14px] rounded-xl ${data.bgClass} shadow-md flex-1 w-full`}
        >
          <h3 className={`text-[53px] font-bold ${data.labelClass}`}>
            {data.label}
          </h3>
          <p className={`${data.infoClass}`}>{data.info}</p>
        </div>
      ))}
    </section>
  );
};

export default Hug;
