import React from "react";
import Image from "next/image";
import {AiOutlineMail} from 'react-icons/ai'
const style = {
  wrapper:
    "md:my-8 lg:my-12 flex flex-col md:flex-row items-center justify-center  w-[75%] md:w-[80%] mx-auto",
  center: "w-full md:w-[65%] flex flex-col items-center justify-center my-6",
  contact: "w-full md:w-[65%] my-6 flex flex-col items-center jusitfy-center",
  ourAddress: "text-stone-400 text-sm md:text-md text-center",
  contactContent: "text-stone-400 text-sm md:text-md text-center",
  info: "text-stone-400 text-sm md:text-md text-center mt-5",
  heading: "text-[#EBB43D] text-md md:text-lg text-center my-6",
};

const MainFooter = () => {
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.center}>
        {/* logo */}
        <Image src="/logo.webp" height="100" width="120" alt="logo" />
        <h2 className={style.info}>
        Hey, I'm Ranger in power rangers online games. The free games
            without flash player. The Power Rangers games online are a great way
            to meet new people and have fun! Play More Games Here.
        </h2>
      </div>
      <div className={style.contact}>
        <h2 className={style.heading}>Contact Us</h2>
        <a href="mailto:replymebycontactus@gmail.com" className="flex items-center">
          <AiOutlineMail className="text-2xl text-[#ffc900] mx-auto mx-3"/>
          <h2 className={style.contactContent}>replymebycontactus@gmail.com</h2>
        </a>
      </div>
    </div>
  );
};

export default MainFooter;
// mailto:webmaster@example.com