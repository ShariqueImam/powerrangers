import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import SplitTextToChars from "./Split";
import { GiGamepad } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import useWindowSize from '../../hooks/windowSize'
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
const variantsBtnContainer = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren", // make this animation to end before children animation occurs
    },
  },
};

const style = {
  wrapper:
    "text-[#FFC900] text-xl w-[70%] mx-auto mt-24 md:mt-20 flex flex-col md:flex-row z-0",
  right: "w-[99%] md:w-[50%] flex justify-center flex-col mx-auto",
  mainHeading:
    " text-2xl md:text-6xl lg:text-6xl text-center md:text-left tracking-wide",
  para: "text-gray-100 text-xs md:text-sm text-center md:text-left tracking-wide my-6",
  btn: " cursor-pointer skew-x-[-30deg] flex items-center justify-center bg-[#ffc900] text-gray-900 py-2 md:py-3 w-[50%] md:w-[30%] text-center hover:translate-x-[15px] transition duration-[400ms] mx-auto md:mx-0 my-4",
  left: "my-8 md:my-2 w-[99%] md:w-[50%] flex items-center justify-center",
};

const Home = () => {
  const screen = useWindowSize()
  const TextStyled = styled.p`
    font-size: calc(${screen.width>900 ? '3.5px' : '23px'} + (64 - 32) * ((100vw - 320px) / (1600 - 320)));
    font-family: poppins;
    font-weight: 500;
    margin: 0;
    color: #ffc900;
  `;
  const wavyTextRef = useRef(null);

  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(
      chars,
      {
        duration: 0.06,
        opacity: 0,
        scale: 1,
        delay: 0.5,
        y: -40,
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        ease: "inOut",
        stagger: 0.025,
      },
      "+=0"
    );
  }, []);
  return (
    <motion.div
      className={style.wrapper}
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
    >
      {/* right side of the home */}
      <div
        className={style.right}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className={style.mainHeading}>
          <FaQuoteLeft className="" />
          <TextStyled ref={wavyTextRef} className="ml-4 my-2">
            Hey, I'm Ranger in power rangers online games. The free games
            without flash player. The Power Rangers games online are a great way
            to meet new people and have fun! Play More Games Here.
          </TextStyled>
        </div>
        <p className={style.para}>
          Fans of all ages fell in love with the over-the-top special effects,
          energetic music and bright costumes. As the owner of the franchise has
          changed, so has this strong crew of heroes.
        </p>
        <motion.div
          variants={variantsBtnContainer}
          initial="hidden"
          animate="visible"
        >
          <Link href="/allgames">
            <div className={style.btn}>
              <p className=" transform skew-x-[30deg]">PLAY</p>
              <GiGamepad className="text-3xl mx-1  transform skew-x-[30deg]" />
            </div>
          </Link>
        </motion.div>
      </div>
      <div className={style.left}>
        <img
          src="https://res.cloudinary.com/shariqcloud/image/upload/v1656341385/Power%20Rangers/slider_img_bg_pbwtxw.webp"
          alt=""
          srcset=""
        />
      </div>
    </motion.div>
  );
};

export default Home;
