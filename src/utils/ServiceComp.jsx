import React from "react";

const ServiceComp = ({ head, desc }) => {
  return (
    <div className="flex flex-col text-black2 gap-10 bg-[#f5f8f8] rounded-[25px]  shadow-sm py-[35px] px-6">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold">{head}</h2>
        <p>{desc}</p>
      </div>
      <button className="py-[10px] px-[22px] text-green-700 bg-green-200 font-bold rounded-md hover:bg-green-400 w-fit">
        Learn More
      </button>
    </div>
  );
};

export default ServiceComp;
