import arrow from '../assets/icons/Vector 41.svg'
import {Card} from "../components"
import { MostPopular as data } from '../data/Data'
import { useNavigate } from 'react-router-dom'
const MostPopular = () => {
    const navigate = useNavigate()
  return (
    <section className='mb-14 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-4 md:gap-8 px-4 md:px-0'>
            <h1 className='text-black text-[1.85rem] text-start font-[500] md:text-[3rem] md:text-center'>Most Popular Downloads</h1>
            <p className='text-[#BEC0C7] text-start text-[0.9rem] font-[400] md:text-center md:text-[1.125rem]'>Browse through some of my Most Popular Products!</p>
        </div>
        <div className='flex flex-col gap-x-0 gap-y-8 p-8 justify-center items-start md:gap-x-4 md:flex-row '>
              {
                data.map((item) =>{
                    return(
                        <Card img={item.img} title={item.title} price={item.price} desc={item.desc} key={item.id}/>
                    )
                })
              }     
        </div>
        <div className='flex justify-center items-center'>
            <button className="align-md-btn  gap-x-4 flex items-center justify-center group" onClick={() => navigate("/product")}>
                Browse All Product <span className="arrow group-hover:invert group-hover:-rotate-90 transition duration-200"><img src={arrow} alt="" /></span>
            </button>
        </div>
    </section>
  )
}

export default MostPopular
