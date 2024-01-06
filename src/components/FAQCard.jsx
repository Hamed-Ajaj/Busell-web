import { useState } from "react";
import plus from "../assets/icons/Group 6.png";

const FAQCard = ({  title, desc, id }) => {
  const [open, setOpen] = useState(false);
  return (
      <section className="faq-card py-[1.3rem] max-w-[600px] px-4 md:px-8  rounded-[1.25rem] border border-[#5D5D5D]">
        <div className="flex items-center justify-start gap-x-7">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={plus} alt="Toggle" className={`${open ?"rotate-[45deg]":"rotate-0"} transition-all duration-100`}/>
          </button>
          <h1 className="text-black text-[0.8rem] font-[500] md:text-[1.5rem] ">{title}</h1>
        </div>
        {open && (
          <div>
            <p className="text-[#C2C2C2] text-[0.85rem] font-[400] mt-2">{desc}</p>
          </div>
        )}
      </section>
  );
};

export default FAQCard;
