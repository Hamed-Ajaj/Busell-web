import { Link } from "react-router-dom"


const Card = ({img,title,price,desc,id}) => {
  return (
    <div className='flex flex-2 flex-col justify-center p-[1.25rem] items-center gap-[0.65rem] border border-[#BEC0C7] rounded-2xl '>
                <div className='w-full relative'>
                    <img src={img} alt={title} className='w-full duration-200 hover:scale-90'/>
                    <div className='absolute flex items-center justify-center top-4 right-5 py-2 px-4 bg-white hover:bg-black group duration-200 rounded-3xl'>
                        <span className='text-black group-hover:text-white'>{price}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 justify-center w-full relative'>
                    <h1 className='flex items-center md:items-start text-[#07070C] text-[1.5rem] font-[500]'>{title}</h1>
                    <p className='flex items-center md:items-start text-[#BEC0C7] font-[400] '>{desc}</p>
                </div>
                <div className='flex space-x-2 sm:space-x-5 mt-8'>
                    <button className="align-md-btn">
                        <Link to={`/product/${id}`}>View Product</Link> 
                    </button>
                    <button className="align-md-btn">
                        View Demo 
                    </button>
                </div>
      </div>
  )
}

export default Card
