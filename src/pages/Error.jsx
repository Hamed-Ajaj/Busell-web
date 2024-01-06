// Purpose: Error page component for the application.
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ScrollContext } from "../context/ScrollContext"
const Error = () => {
  const navigate = useNavigate()
  const { scrollToTop } = useContext(ScrollContext)
  scrollToTop()
  return (
    <section className="w-full h-full bg-black px-[1rem] py-[2rem] md:py-[3rem] md:px-[4rem] mt-16">
        <div className="flex flex-col gap-5 px-6 py-8 md:gap-12 md:py-12 md:px-16 justify-center items-center">
            <h1 className="text-white text-[3.5rem] font-[500]">404</h1>
            <h2 className="text-[#FFC107] text-[1.75rem] md:text-[2.5rem] font-[500]">Page Not Found</h2>
            <p className="text-white text-center max-w-[400px] text-[1rem] md:text-[1.125rem] font-[400]">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <button onClick={() => navigate("/")} className="secondary-btn mt-8">Go To Home Page</button>
        </div>
    </section>
  )
}

export default Error
