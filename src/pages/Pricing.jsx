import  { useContext, useState } from 'react'
import PricingCard from '../components/PricingCard'
import { ScrollContext } from '../context/ScrollContext'
const Pricing = () => {
  const [activeButton, setActiveButton] = useState('monthly')
  const { scrollToTop } = useContext(ScrollContext)
  scrollToTop()
  return (
    <section className='font-Poppins py-[1rem] px-[1rem] mt-[68px] flex flex-col self-stretch md:py-[3.125rem] md:px-[6.25rem] gap-[1.9rem] md:mt-20 bg-white h-full'>
      {/* title */}
      <div className='flex flex-col w-full gap-[1.8rem] justify-center md:items-center'>
        <h1 className='text-black text-[1.75rem] md:text-[3rem] font-[500] md:text-center'> 
          Join Membership Today and Gain <br className='hidden md:block'/> Access to All Products!
        </h1>
        <p className='max-w-[50.2rem] text-[#BEC0C7] text-[0.9rem] md:text-[1.125rem] font-[400] md:text-center'>
          Join Our Membership Today at a Discounted Price and get access to all Our Amazing Products and even gain access to Future Products For Free!
        </p>
      </div>
      {/* title end */}

      {/* buttons */}
      
      {/* buttons end */}

      {/*  cards */}
      <div className='flex flex-col self-stretch items-center justify-center gap-9'>
        <div className='flex  self-stretch gap-y-4 md:flex-row gap-x-4 sm:justify-center sm:items-center'>
          <button onClick={() => setActiveButton("monthly")} className={`${activeButton==="monthly"?"primary-btn-lg":"gray-btn-lg"} `}>
            Monthly
          </button>
          <button onClick={() => setActiveButton("yearly")} className={`${activeButton==="yearly"?"primary-btn-lg":"gray-btn-lg"}`}>
            Yearly
          </button>
        </div>
        <PricingCard items={activeButton}/>
      </div>
      {/* cards end */}

    </section>
  )
}

export default Pricing
