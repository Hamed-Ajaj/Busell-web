import { CTA, Explore, FAQS, Hero } from "../components"
import Brows from "../components/Brows"
import MostPopular from "../components/MostPopular"


const Home = () => {
  return (
    <div className="w-full mt-24 px-0 md:px-24 overflow-x-hidden bg-white">
      <Hero />
      <Brows />
      <MostPopular />
      <Explore />
      <FAQS />
      <CTA />
    </div>
  )
}

export default Home
