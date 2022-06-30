import React from "react";
import Link from "next/link";
const style = {
  wrapper:
    "bg-gray-500 flex flex-col text-md md:text-md tracking-wider mx-auto",
  list: "cursor-pointer mx-auto block my-2 py-2 px-2 text-center   font-bold text-[#FFC900] transition duration-[400ms] ",
  contact:
    "cursor-pointer mx-auto block my-2 py-2 px-8 text-center text-gray-800 font-bold bg-[#FFC900] transition duration-[400ms] border-2 border-[#FFC900]",
};
const DropDownMenu = (props) => {
  // const onScroll = (val) => {
  //   props.onScroll(val);
  // };
const handleClick =()=>{}
  return (
    <ul clasName={style.wrapper} style={{ fontFamily: "Poppins, sans-serif" }}>
      <Link href="/">
        <li
          onClick={() => {
            handleClick();
          }}
        >
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
        <li
          onClick={() => {
            handleClick();
          }}
        >
          <p aria-label="link of the navbar" className={style.list}>
            All games
          </p>
        </li>
      </Link>
      <Link href="/contact">
        <li
          onClick={() => {
            handleClick();
          }}
        >
          <p aria-label="link of the navbar" className={style.contact}>
            Contact
          </p>
        </li>
      </Link>
    </ul>
  );
};

export default DropDownMenu;
