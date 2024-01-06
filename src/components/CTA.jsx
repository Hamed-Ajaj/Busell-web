import arrow from "../assets/icons/Vector 41.svg"
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <article className='w-full mb-24'>
        <div className='flex flex-col justify-between rounded-none space-y-8 items-start py-[2rem] px-[2.5rem] gap-[0.65rem] w-full bg-black  border-white md:rounded-[1.25rem] md:flex-row'>
            <div className='flex flex-col gap-y-5'>
              <h1 className='text-white text-[2rem] font-[500]'>Still Need Help?</h1>
              <p className='text-[#fff] text-[1.125rem] font-[400]'>Can't find the answer here?  Message us for help!</p>
            </div>
            <Link to={"/contact"} className='secondary-btn group flex gap-x-4'>Shoot Us A Message! <img src={arrow} alt="arrow" className="group-hover:invert duration-200"/></Link>
        </div>
    </article>
  )
}

export default CTA
