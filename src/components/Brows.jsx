import vector from '../assets/icons/Vector.png'
import coding from '../assets/icons/coding.svg'
import Font from '../assets/icons/ci_font.svg'
import stroke from "../assets/imgs/stroke.svg"
const Brows = () => {
  return (
    <article className="flex flex-col w-full px-8 py-12 md:pt-28 md:pb-20 md:px-16 mt-16 relative bg-[#07070C] md:rounded-[6.1rem] font-Poppins gap-y-16 mb-28" >
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-0'  />
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-2'  />
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-4'  />
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-6'  />
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-8'  />
        <img src={stroke} className='stroke absolute -top-[9.5rem] right-10'  />
      <div className="flex flex-col space-y-8 justify-center items-center">
            <h1 className="text-white text-center text-[2rem] md:text-[3rem] font-[500]">
                Browse by Categories
            </h1>
            <p className="text-center text-[#BEC0C7] text-[1.125rem] font-[400]">
                Browse through some of my Most Popular Products!
            </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-8 w-full justify-center items-center">
            <div className="flex flex-2 flex-col bg-white rounded-[2.5rem] justify-center items-start p-[1.25rem] gap-10 shadow-md shadow-[#C2C2C2]">
                <div className="bg-[#000] rounded-full flex justify-center items-center w-[3.1rem] h-[3.1rem] p-3 ">
                    <img src={vector} alt="template" className="w-6 h-6"/>
                </div>
                <div>
                    <h1 className='text-black text-[1.5rem] font-[700] mb-5'>Templates</h1>
                    <p className='text-[#C2C2C2] font-[400] text-[1.125rem]'>Choose from 100s of High Quality Templates for <br /> Framer.</p>
                </div>

            </div >
            <div className="flex flex-2 flex-col bg-white rounded-[2.5rem] justify-center p-[1.25rem]  items-start gap-10 shadow-md shadow-[#C2C2C2]">
            <div className="bg-[#000] rounded-full flex justify-center items-center w-[3.1rem] h-[3.1rem] p-3 ">
                    <img src={Font} alt="template" className="w-6 h-6"/>
                </div>
                <div>
                    <h1 className='text-black text-[1.5rem] font-[700] mb-5'>Font</h1>
                    <p className='text-[#C2C2C2] font-[400] text-[1.125rem]'>Choose from 100s of High Quality Templates for <br /> Framer.</p>
                </div>
            </div>
            <div className="flex flex-2 flex-col bg-white rounded-[2.5rem] justify-center p-[1.25rem] items-start gap-10 shadow-md shadow-[#C2C2C2]">
                <div className="bg-[#000] rounded-full flex justify-center items-center w-[3.1rem] h-[3.1rem] p-3 ">
                    <img src={coding} alt="template" className="w-6 h-6"/>
                </div>
                <div>
                    <h1 className='text-black text-[1.5rem] font-[700] mb-5'>Coding</h1>
                    <p className='text-[#C2C2C2] font-[400] text-[1.125rem]'>Choose from 100s of High Quality Templates for <br /> Framer.</p>
                </div>
            </div>
      </div>
      <div></div>
    </article>
  )
}

export default Brows
