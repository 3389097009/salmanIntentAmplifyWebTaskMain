import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";

export const MenuLinks = [
  {
    id: 1,
    name: "Blogs",
    link: "/blogscomp",
  },
  {
    id: 2,
    name: "White Papers",
    link: "/#Services",
  },
  {
    id: 3,
    name: "Podcasts",
    link: "/podcastpage",
  },
  {
    id: 4,
    name: "Infographics",
    link: "/InfographicsPage",
  },
  {
    id: 5,
    name: "About",
    link: "/#services",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  const handleGetInTouch = () => {
    navigate('/ContactUs');
  };
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300"
    >
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="" className="w-5" />
            <span className="text-2xl sm:text-3xl font-semibold">
              Intent Creations
            </span>
          </Link>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <button onClick={handleGetInTouch} className="primary-btn">Get in Touch</button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
