import React from "react";

const SectionHeading = ({ highlightText, text, highlightClass, textClass }) => {
  return (
    <h4
      className={`text-[64px] font-bold  ${
        textClass ? textClass : "text-black2"
      }`}
    >
      <span
        className={`${
          highlightClass ? highlightClass : "text-orange-400"
        } mr-3 `}
      >
        {highlightText}
      </span>
      {text}
    </h4>
  );
};

export default SectionHeading;
