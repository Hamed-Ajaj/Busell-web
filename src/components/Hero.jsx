import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='w-full flex py-4 px-0 md:px-12 justify-center items-center'>
      <div className='gray-gradient rounded-tl-[75rem] rounded-tr-[75rem] w-full py-[8rem] nd:px-[9.5rem] flex flex-col justify-center items-center'>
          <div className='flex flex-col space-y-10'>
            <h1 className='text-center text-[#16161B] font-Poppins text-[1.85rem] md:text-[3rem] font-[500]'>
            Empower Your Business: <br /> Create and Sell with Busell 
            </h1>
            <p className='text-[#BEC0C7] font-Poppins text-[0.9rem] md:text-[1.125rem] text-center'>
            A collection of high-performing and well-designed Framer <br /> templates to set up your website
            </p>
          </div>
          <Link to="/product" className='primary-btn mt-12'>
            Brows Products
          </Link>
      </div>
    </section>
  )
}

export default Hero
