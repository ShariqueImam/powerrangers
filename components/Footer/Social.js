import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const style = {
  wrapper:
    "flex mx-auto items-center justify-center gap-8 md:gap-12 my-8 md:my-12",
  social:
    "text-gray-100 hover:text-[#ffc900] text-7xl md:text-xl hover:mx-4 transition-all duration-[300ms] cursor-pointer",
};
const Social = () => {
  return (
    <div className={style.wrapper}>
      <a
        aria-label="link to facebook account facebook"
        className={style.social}
        target="_black"
        href="http://www.goolge.com"
      >
        <BsFacebook className="text-2xl" />
      </a>
      <a
        aria-label="link to facebook account instagram"
        className={style.social}
        target="_black"
        href="http://www.goolge.com"
      >
        <BsInstagram className="text-2xl" />
      </a>
      <a
        aria-label="link to facebook account twitter"
        className={style.social}
        target="_black"
        href="http://www.goolge.com"
      >
        <BsTwitter className="text-2xl" />
      </a>
      <a
        aria-label="link to facebook account twitter"
        className={style.social}
        target="_black"
        href="http://www.goolge.com"
      >
        <AiFillYoutube className="text-2xl" />
      </a>
      <a
        aria-label="link to facebook account twitter"
        className={style.social}
        target="_black"
        href="http://www.goolge.com"
      >
        <FaDiscord className="text-2xl" />
      </a>
    </div>
  );
};
export default Social;
