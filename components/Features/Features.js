import React from "react";
// the feature or icons for the home page
import { BiMouse } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
const style = {
  wrapper: " w-[100vw] my-16",
  featuresContainer: "w-[90%] md:w-[70%] flex mx-auto justify-around flex-col md:flex-row mx-auto",
  imgStyle: "",
  singleFeature:' my-4 flex flex-col items-center justify-center ',
  para:'text-gray-400 font-extrabold my-4 text-xl md:text-lg  t1 text-transparent ',
};
const Features = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className={style.featuresContainer}>
        <div className={style.singleFeature}>
          <BsKeyboard className="text-5xl text-gray-400 "/>
          <p className={style.para}>ACQUIRE LOCATION</p>
        </div>
        <div className={style.singleFeature}>
          <BiMouse className="text-5xl text-gray-400"/>
          <p className={style.para}>AIM THE TARGET</p>
        </div>
        <div className={style.singleFeature}>
          <FaHeadphonesAlt className="text-5xl text-gray-400"/>
          <p className={style.para}>FEEL THE HEAT</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
// style={{ fontFamily: 'Yeseva One, cursive' }}
// style={{ fontFamily: 'Poppins, sans-serif' }}