import { useForm } from "react-hook-form"

const NewLetter = () => {
  const form = useForm({
    defaultValues:{
      email:""
    }
  }
  )
  const{register,handleSubmit,formState,reset} = form
  const {errors} = formState
  const onSubmit = (data) => {
    reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-white text-[2.125rem] font-[500]">Join Our Community</h1>
        <div className="flex gap-4">
          <input type="email" className={`border ${(errors?.email?.message)?"border-red-600":"border-none"} outline-none rounded-l-xl bg-[#202025] px-2 py-4 w-[18.75rem] text-[1.125rem] text-[#C2C2C2] placeholder-[#C2C2C2] placeholder-opacity-50`} {...register("email",{
            required:"Please Enter Your Email",
            pattern:{
              value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              message:"Please Enter A Valid Email"
            }
          })} placeholder="Enter Your Email" />
          <button type="submit" className="bg-white  rounded-r-xl px-4 py-2 flex items-center justify-center -ml-4">Subscribe</button>
        </div>
        <p className="text-red-600 -mt-4">{errors?.email?.message}</p>

      </form>
    </>
  )
}

export default NewLetter
