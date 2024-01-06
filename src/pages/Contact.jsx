import phone from "../assets/icons/fluent_call-16-filled.svg"
import mail from "../assets/icons/fluent_mail-20-filled.svg"
import { useForm } from "react-hook-form"
const Contact = () => {
  const { register, handleSubmit, formState: { errors } , reset} = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = () => {
    reset()
  }
  return (
    <section className="mt-20 flex flex-col px-12 py-12 gap-8 justify-center items-center">
        <div className="flex w-full mb-10 md:mb-0  md:py-12 flex-col space-y-16 md:space-y-10 justify-center items-center sm:items-start sm:justify-start md:items-start md:justify-start">

            <h1 className="text-black text-[2rem] font-[500] text-center md:self-start md:text-start md:text-[3rem]">
              Need Any help? <br /> We're Here For You.
            </h1>

          <div className="flex flex-col gap-y-10 md:flex-row  md:gap-x-16 justify-center items-center">
            <div className="flex self-start flex-row max-w-[242px] gap-x-8 md:justify-center md:items-center">
              <div className="flex justify-start items-start bg-black w-14 h-14 cursor-pointer p-[0.9rem] rounded-full">
                  <img src={phone} alt="phone" className=" flex w-full self-start" />
              </div>
              <p className="text-black text-[1.125rem] font-[400]">Call Us <br /> +961 12345678</p>
            </div>
            <div className="flex self-start flex-row max-w-[242px] gap-x-8 md:justify-center md:items-center">
                <div className="flex items-center justify-center bg-black w-14 h-14 cursor-pointer  rounded-full">
                    <img src={mail} alt="mail" className="w-full " />
                </div>
                <p className="text-black text-[1.125rem] font-[400]">Send Us On Email <br /> hamed@gmail.com</p>
            </div>
          </div>
        </div>
        {/* title end */}

        {/*form Things  */}
        <div className="flex justify-center md:justify-center lg:justify-between md:mt-12 flex-col md:flex-row items-center w-full gap-[2.5rem]">
          <div className="flex flex-col gap-y-10 sm:self-start md:self-start md:w-1/2">
            <h1 className="text-black text-[2rem] font-[500] md:text-[3rem]">Get In Touch!</h1>
            <p className="text-[1.125rem] text-[#C2C2C2] font-[400] ">Need  Any Help? Send us a message using the form <br /> below and we'll get back to you promptly!</p>
          </div>
          <div className="w-full sm:w-full  md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="flex justify-center items-center flex-col min-w-[300px] max-w-[500px] gap-y-5">
                <input type="text"  id="name" placeholder="Name" className={` w-full h-14 px-5 rounded-full border-[1px] ${errors.name?"border-red-500":"border-[#C2C2C2]"} outline-none`}
                {...register("name", {
                  required:"Name is required",
                })}
                />
                <p className="text-red-600">{errors?.name?.message}</p>
                <input type="email" name="email" id="email" placeholder="Email" className="w-full h-14 px-5 rounded-full border-[1px] border-[#C2C2C2] outline-none" 
                {...register("email", {
                  required:"Email is required",
                  pattern:{
                    value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    message:"Please Enter A Valid Email"
                  }
                  
                })}
                />
                <p className="text-red-600">{errors?.email?.message}</p>
                <textarea name="message" id="message"  placeholder="Message" className="w-full resize-none h-40 px-5 py-4 rounded-3xl border-[1px] border-[#C2C2C2] outline-none" {...register("message")}></textarea>
                <button type="submit" className="w-full flex justify-center items-center h-14 bg-black text-white text-[1.125rem] font-[500] rounded-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
        {/* end form Things */}
    </section>
  )
}

export default Contact
