import { monthlyData, yearlyData } from "../data/Data"
const PricingCard = ({items}) => {
  const data = items==="monthly"?monthlyData:yearlyData
  return (
    <div className="flex flex-wrap justify-center gap-y-10 lg:flex-row  md:gap-9 p-4 lg:p-12 self-stretch items-center">
      {
        data.map((item, index) => {
          return (
            <div key={index} className='flex mb-10 max-w-[24.6rem]  md:flex-1 w-full flex-col gap-[1.9rem] p-[1.75rem] border border-[#5D5D5D] rounded-[2.5rem] '>
              <div className="flex flex-col space-y-5">
                <h1 className='text-black text-[1.5rem] md:text-[2rem] font-[500] text-start'> 
                  {item.title}
                </h1>
                <p className="text-black text-[1.5rem] font-[500] text-start">{item.price}</p>
              </div>
              <div className="flex flex-col gap-y-6">
                <ul className="flex flex-col gap-y-2">
                  {
                    item?.desc?.map((paragraph) => {
                      return(
                        <li key={index} className="styled flex gap-x-4 basis-full flex-1">
                            <span>📌</span>
                            <p className="flex items-center">{paragraph}</p>
                        </li>
                      )
                    }) 
                  }
                </ul>
                <button className="flex self-stretch bg-[#16161B] justify-center items-center py-5 px-16 text-white rounded-[6.2rem] border border-black transition duration-200">Get Started</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PricingCard
