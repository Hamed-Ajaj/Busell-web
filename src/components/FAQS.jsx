import { useState } from "react";
import { FaqData } from "../data/Data";
import FAQCard from "./FAQCard";

const FAQS = () => {

  return (
    <div className={`grid grid-cols-1 mb-24 px-8 grid-rows-${FaqData.length} overflow-hidden self-stretch gap-5  items-center  md:grid-cols-2 md:px-0 md:grid-rows-${FaqData.length/2}  md:justify-center `}>
      {FaqData.map((item) => (
        <FAQCard
          key={item.id}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default FAQS;
