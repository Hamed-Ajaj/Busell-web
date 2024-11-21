import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "./CustomLink";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const width = window.addEventListener("resize", () => {
      if (document.body.clientWidth > 768) setMenu(false);
    });
    return () => {
      window.removeEventListener("resize", width);
    };
  }, [menu, setMenu]);

  return (
    <nav className="fixed right-0 top-0 bg-white z-10 w-full flex flex-row justify-between px-4 md:px-12 py-6">
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Busell</h1>
        </Link>
      </div>
      <NavLinks />
      <div className="lg:hidden items-center space-x-8 justify-center flex">
        <HamburgerMenuBtn menu={menu} setMenu={setMenu} />
      </div>

      {menu && <MobileNavLinks setMenu={setMenu} />}
    </nav>
  );
};

function NavLinks() {
  return (
    <div className="hidden lg:flex space-x-12 justify-center items-center">
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/contact">Contact</CustomLink>
      <CustomLink href="/pricing">Pricing</CustomLink>
      <CustomLink href="/product">Products</CustomLink>
    </div>
  );
}

function MobileNavLinks({ setMenu }) {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 py-8 text-center absolute top-16 right-0 w-full bg-white rounded-b-lg z-50"
      onClick={() => setMenu(false)}
    >
      <CustomLink href="/">Home</CustomLink>
      <CustomLink href="/contact">Contact</CustomLink>
      <CustomLink href="/pricing">Pricing</CustomLink>
      <CustomLink href="/product">Products</CustomLink>
    </div>
  );
}
function HamburgerMenuBtn({ menu, setMenu }) {
  return (
    <button className="flex lg:hidden" onClick={() => setMenu(!menu)}>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H24V2H0V0ZM0 8H24V10H0V8ZM0 16H24V18H0V16Z"
          fill="#16161B"
        />
      </svg>
    </button>
  );
}

export default Navbar;
