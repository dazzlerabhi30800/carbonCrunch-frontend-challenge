import React from "react";

const Button = ({ label, classes }) => {
  return (
    <button
      className={`py-[6px] md:py-[9px] text-base md:text-xl font-bold px-4 min-w-28 ${classes}`}
    >
      {label}
    </button>
  );
};

export default Button;
