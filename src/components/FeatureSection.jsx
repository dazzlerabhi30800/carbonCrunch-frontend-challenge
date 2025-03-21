import React from "react";
import SectionLabel from "../utils/SectionLabel";
import SectionHeading from "../utils/SectionHeading";
import { featureData } from "../data/data";
import FeatureComp from "../utils/FeatureComp";

const FeatureSection = () => {
  return (
    <section className="mt-[180px] flex flex-col gap-[57px] px-16">
      <div className="flex flex-col gap-4">
        <SectionLabel label="features" />
        <SectionHeading highlightText="Why" text="Carbon Crunch?" />
      </div>
      {/* Features Wrapper */}
      <div className="grid grid-cols-3 gap-[14.68px] bg-[#f5f5f8] p-[22px]">
        {featureData?.map((feature, index) => (
          <FeatureComp key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
