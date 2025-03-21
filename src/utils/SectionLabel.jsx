import React from "react";

const SectionLabel = ({ label, classes }) => {
  return (
    <div
      className={`text-green-500 uppercase py-[10px] px-[37.5px] ${classes}`}
    >
      <p className="text-lg md:text-xl font-bold">{label}</p>
    </div>
  );
};

export default SectionLabel;
