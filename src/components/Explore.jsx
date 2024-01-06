import { Link } from "react-router-dom"


const Explore = () => {
  return (
    <article className="bg-[#16161B] justify-start items-start px-[2.5rem] mb-24 py-[6rem] flex flex-col md:justify-center md:items-center md:rounded-[6.25rem] gap-[-13rem]">
        <div className="flex flex-col gap-y-10">
            <h1 className="text-start text-white text-[2rem] md:text-[3rem] font-[500]">
                Products are Thoughtfully Created <br /> with User Experience in Mind
            </h1>
            <p className="text-start text-[#C2C2C2] font-[500] text-[0.9rem] md:text-[1.125rem] ">We are passionate about creating high-quality Framer templates that are visually <br /> appealing, highly functional, and easy to use. </p>
        </div>
        <Link to="/product" className="secondary-btn mt-12">Explore Product</Link>
    </article>
  )
}

export default Explore
