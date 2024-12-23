import { CTA, Explore, FAQS, Hero } from "../components";
import Brows from "../components/Brows";
import MostPopular from "../components/MostPopular";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

const Home = () => {
  const { scrollToTop } = useContext(ScrollContext);
  scrollToTop();
  return (
    <div className="w-full mt-24  md:px-24 sm:px-12 px-4 overflow-x-hidden bg-white">
      <Hero />
      <Brows />
      <MostPopular />
      <Explore />
      <FAQS />
      <CTA />
    </div>
  );
};

export default Home;
