import React from "react";

const FeatureComp = ({ img, head, desc }) => {
  return (
    <div className="bg-white p-[22.05px] rounded-[11.05px] flex flex-col gap-[22.5px] h-[273.5px] w-full">
      <img src={img} alt={head} className="h-[55.05px] w-[55.05px]" />
      <div className="flex flex-col gap-[14.68px]">
        <h4 className="text-black1 font-bold">{head}</h4>
        <p className="text-black2">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureComp;
