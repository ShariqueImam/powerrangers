import React from "react";
import Link from "next/link";

const style = {
  wrapper:
    "bg-[#] flex flex-col mx-auto items-center justify-center py-1 md:py-4",
  list: "block my-4 py-2 px-2 md:px-4 font-sm md:text-sm text-gray-100 font-bold hover:text-[#ffc900]  transition duration-[300ms] hover:mx-4 transition-all duration-[400ms]",
  signatureContent: "text-gray-100 text-xs md:text-sm text-gray-400 py-2",
};
const Signature = () => {
  return (
    <div className={style.wrapper}>
      <ul
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="py-0 md:py-0 flex text-xs md:text-md tracking-wider "
      >
        <Link href="/">
          <li>
            <a
              aria-label="Home"
              href="#"
              className={style.list}
              aria-current="page"
            >
              Home
            </a>
          </li>
        </Link>
        <Link href="/allgames">
          <li>
            <a aria-label="About" href="#" className={style.list}>
              All Games
            </a>
          </li>
        </Link>

        <Link href="/contact">
          <li>
            <a aria-label="Contact" href="#" className={style.list}>
              Contact
            </a>
          </li>
        </Link>
      </ul>

      <div
        className={style.signatureContent}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        &#169; PowerRangerGames 2022,All copyrights reserved to original content. Designed by{" "}
        <span className="text-[#ffc900]">Sharique </span>
      </div>
    </div>
  );
};

export default Signature;
