import React, { useState } from "react";
import useWindowSize from "../../hooks/windowSize";
import DropDownMenu from "./DropDownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = (props) => {
  const screenWidth = useWindowSize();
  const style = {
    wrapper:
      "z-40 absolute md:relative text-gray-200 w-[100%] lg:w-[75%] mx-auto ",
    list: "cursor-pointer block py-2 px-4 text-gray-50 hover:text-gray-800 transform skew-x-[30deg] font-bold hover:text-gray-800 transition duration-[200ms] ",
    reservation: `ml-7 scale-[0.9] md:scale-[1] hover:scale-[0.9] px-2 md:px-6 py-2 md:py-2 bg-[#FFC900] text-gray-800 font-bold transform skew-x-[-30deg]  transition duration-[300ms] cursor-pointer ${
      screenWidth.width < 1024
        ? "bg-gray-900 text-[#F2ECDE]"
        : "bg-transparent text-gray-800"
    }`,
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSmallMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };
  const onScroll = (val) => {
    // props.onScroll(val)
  };
  const variantsContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        when: "beforeChildren", // make this animation to end before children animation occurs
      },
    },
  };
  return (
    <motion.div
      className={style.wrapper}
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
    >
      <nav className="border-[#FFC900] px-2 sm:px-4 rounded bg-gray-50 md:bg-transparent border-b-[0.1px] ">
        <div className="container flex justify-between items-center mx-auto flex-wrap">
          <a href="/" className="flex items-center scale-[1.1]">
            <img
              src="/logo1.webp"
              className="mr-3 h-12 w-24 md:w-auto scale-x-[1] scale-y-[0.8] sm:scale-[1]"
              alt="PR Logo"
            />
          </a>
          {/* issue */}
          <div className="hidden sm:flex">
            <div className=" flex items-center md:order-2 mr-0">
              <Link href="/contact">
                <div
                  className={style.reservation}
                  onClick={() => {
                    onScroll("booking");
                  }}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <p className="transform skew-x-[30deg]">Contact</p>
                </div>
              </Link>
              {/* the hamburger button */}
              <button
                aria-label="Button to toggle mobile menu"
                onClick={handleSmallMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className=" inline-flex items-center p-1 ml-0 text-xl text-gray-900  rounded-lg md:hidden hover:bg-gray-100 transtion duration-[300ms]"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                {isMenuOpen ? (
                  <ImCross
                    className={`${isMenuOpen && "flex"}  mx-2 text-[#FFC900]`}
                  />
                ) : (
                  <GiHamburgerMenu
                    className={`text-[#FFC900] mx-2 ${isMenuOpen && "hidden"}`}
                  />
                )}
              </button>
            </div>
            {/* content for small screens menu open */}
            <div
              className={`w-full ${
                isMenuOpen ? "flex" : "hidden"
              } items-center justify-center`}
            >
              <DropDownMenu />
            </div>
            <div
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
                <Link href="/">
                  <li className=" my-2 transform skew-x-[-30deg] hover:bg-[#FFC900] transition duration-[400ms]">
                    <p
                      aria-label="link of the navbar"
                      className={style.list}
                      aria-current="page"
                    >
                      Home
                    </p>
                  </li>
                </Link>
                <Link href="/allgames">
                  <li className=" my-2 transform skew-x-[-30deg] hover:bg-[#FFC900] transition duration-[400ms]">
                    <p aria-label="link of the navbar" className={style.list}>
                      All Games
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {/* new div */}
          <div className=" flex sm:hidden items-center md:order-2 mr-0">
            <Link href="/contact">
              <div
                className={style.reservation}
                onClick={() => {
                  onScroll("booking");
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <p className="transform skew-x-[30deg]">Contact</p>
              </div>
            </Link>
            {/* the hamburger button */}
            <button
              aria-label="Button to toggle mobile menu"
              onClick={handleSmallMenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className=" inline-flex items-center p-1 ml-0 text-xl text-gray-900  rounded-lg md:hidden hover:bg-gray-100 transtion duration-[300ms]"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <ImCross
                  className={`${isMenuOpen && "flex"}  mx-2 text-[#FFC900]`}
                />
              ) : (
                <GiHamburgerMenu
                  className={`text-[#FFC900] mx-2 ${isMenuOpen && "hidden"}`}
                />
              )}
            </button>
          </div>
          {/* content for small screens menu open */}
          <div
            className={`w-full py-6  ${
              isMenuOpen ? "flex" : "hidden"
            } items-center justify-center sm:hidden`}
          >
            <DropDownMenu onScroll={onScroll} />
          </div>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="hidden justify-between items-center w-full  md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
              <Link href="/">
                <li className=" my-2 transform skew-x-[-30deg] hover:bg-[#FFC900] transition duration-[400ms]">
                  <p
                    aria-label="link of the navbar"
                    className={style.list}
                    aria-current="page"
                  >
                    Home
                  </p>
                </li>
              </Link>
              <Link href="/allgames">
                <li className=" my-2 transform skew-x-[-30deg] hover:bg-[#FFC900] transition duration-[400ms]">
                  <p aria-label="link of the navbar" className={style.list}>
                    All Games
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
