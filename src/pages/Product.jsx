
import search from '../assets/icons/tabler_search.svg'
import { useEffect, useState } from "react";
import { products } from "../data/Data";
import { Card } from '../components';
import { ScrollContext } from '../context/ScrollContext';
import { useContext } from 'react';
const Product = () => {
  const [searchValue,setSearchValue] = useState('')
  const [activeButton, setActiveButton] = useState(null);
  const { scrollToTop } = useContext(ScrollContext);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };
  const filteredItems = products?.filter((item) => {
    const titleIncludesSearch = item?.title?.toLowerCase().includes(searchValue.toLowerCase());
    const isActiveButton = activeButton ? item.category === activeButton : true;
    return searchValue?.toLowerCase() === '' ?isActiveButton:(isActiveButton && titleIncludesSearch)
  });
  

  useEffect(() =>{
    scrollToTop()
  },[])
  return (
    <section className="w-full mt-24 font-Poppins">
        <div className="w-full py-[1rem] px-[1rem] md:py-[3.6rem] md:px-[6.2rem] flex flex-col ">
            <div className="flex flex-col gap-y-6 md:items-center md:justify-center">
                <h1 className="text-black text-[2rem] font-[400] md:text-[3rem] md:font-[500] md:text-center">
                  Browse Stunning Products
                </h1>
                <p className="md:text-center text-[#BEC0C7] text-[1rem] md:text-[1.2rem] md:font-[400]">
                A collection of high-performing and well-designed Framer <br className="hidden md:block"/> templates to set up your website
                </p>
            </div>
            <div className="flex flex-col gap-y-6 md:gap-x-6 items-center justify-center md:flex-row mt-10">
              <div className="relative w-2/3 md:w-1/3 ">
                <img src={search}  alt="search icon " className="absolute top-6 left-6 "/>
                <input onChange={(e) => setSearchValue(e.target.value)}  type="text" placeholder="search product" className="bg-[#07070C] outline-none border-none text-white p-6 px-16 placeholder:text-[1rem] placeholder:font-[400] placeholder:text-white rounded-3xl w-full min-w-[10rem]" 
                />
              </div >
              <div className="grid grid-cols-2 justify-center items-center gap-y-4 sm:grid-cols-3 md:gap-y-0 columns-auto gap-x-5">
                <button onClick={() => handleButtonClick("template") } className={`${activeButton === "template"?"primary-btn-lg":"gray-btn-lg"} flex justify-center items-center w-auto`}>Template</button>
                <button onClick={() => handleButtonClick("resources")}  className={`${activeButton === "resources"?"primary-btn-lg":"gray-btn-lg"} w-auto flex justify-center items-center`}>Resources</button>
                <button onClick={() => handleButtonClick("articles")}  className={`${activeButton === "articles"?"primary-btn-lg":"gray-btn-lg"} w-auto flex justify-center items-center`}>Articles</button>
              </div>
            </div>
            <div className='grid mt-10 grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 content-center'>
            {filteredItems?.length === 0 && <h1 className="text-black text-[2rem] font-[400] md:text-[3rem] md:font-[500] md:text-center">No Products found</h1>}
            {filteredItems?.map((item) => {
              return (
                <Card key={item.id} {...item} />
              );
            })}

            </div>
        </div>
    </section>
  );
}

export default Product
