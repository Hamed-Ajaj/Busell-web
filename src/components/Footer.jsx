import { Link } from "react-router-dom"
import NewLetter from "./NewLetter"
const Footer = () => {
  return (
    <footer className='w-full flex flex-col py-6 bg-black md:py-[3.125rem] md:px-[6.25rem]  justify-center items-center overflow-x-hidden'>
      {/* container */}
        <div className="flex flex-col justify-center items-center self-stretch md:gap-9 md:py-[3.44rem] md:px-[2.5rem] w-full">
            <div className="flex flex-wrap justify-center items-center flex-col md:flex-row md:justify-between">
              <div className="flex flex-col items-center justify-center md:items-start gap-10">
                <h1 className="text-white text-[2.2rem] font-[500] ">
                  Busell
                </h1>
                <ul className="flex gap-x-8 items-center justify-center">
                  <li>
                    <Link to='/' className="text-[1.125rem] text-white font-[400]">Home</Link>
                  </li>
                  <li>
                    <Link to='/about' className="text-[1.125rem] text-white font-[400]">Template</Link>
                  </li>
                  <li>
                    <Link to='/contact' className="text-[1.125rem] text-white font-[400]">Resources</Link>
                  </li>
                  <li>
                    <Link to='/blog' className="text-[1.125rem] text-white font-[400]">Articles</Link>
                  </li>
                </ul>
                <button className="secondary-btn flex items-center  justify-center md:self-start">Get Templates</button>
              </div>
              <div className="w-auto flex justify-center items-center flex-col md:ml-40">
                <NewLetter />
              </div>
            </div>
            {/* copy rights */}
            <div className="flex justify-center items-center text-white text-[1.125rem] py-[1.25rem] mt-12">
              <p>© 2024 All Rights Reserved. Designed by <span className="text-[#FFC107]">Hamed Ajaj</span></p>
            </div>
        </div>
      {/* container */}
    </footer>
  )
}

export default Footer
