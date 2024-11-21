// ProductDetails.js
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/Data";

const ProductDetails = () => {
  const { scrollToTop } = useContext(ScrollContext);
  scrollToTop();
  const { proId } = useParams();
  const product = products.find((item) => item.id === parseInt(proId));

  if (!product) {
    // Handle case where product is not found
    return <div>Product not found</div>;
  }

  // const { title, desc, img, price } = product;

  return (
    <article className="mt-24 px-[1.5rem] py-[1.5rem] flex flex-col  justify-center items-center gap-[2rem] lg:px-[6.2rem] lg:py-3.2rem font-Poppins">
      <h1 className="text-center text-[2rem] font-[500] mlg:text-[4rem] text-black mlg:font-[600]">
        This section is not ready for now <br />
        Coming Soon!
      </h1>
      <Link
        to={"/product"}
        className="text-[1rem] mlg:text-[1.5rem] underline underline-offset-4 hover:text-gray-500 duration-100"
      >
        Go Back
      </Link>
      <div className="flex w-full flex-col gap-y-6 md:flex-row md:gap-x-6 ">
        <div className="w-1/2"></div>
      </div>
    </article>
  );
};

export default ProductDetails;
