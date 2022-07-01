import React from "react";
import Link from "next/link";
import  {urlForThumbnail} from '../../pages/api/image'
const style = {
  wrapper:
    "border-[1px] border-[#ffc900] cursor-pointer hover:bg-[#ffc900] hover:text-gray-900 transtion duration-[500ms] hover:scale-[1.1] w-[90%] md:w-[17%] lg:w-[20%] md:mx-3 lg:mx-2 scale-y-[1.2] my-9 md:my-12 flex text-center text-[#ffc900] flex-col p-2 py-4 rounded-md",
  img: "",
  para: "text-md md:text-lg md:text-md my-3",
};
const PlaySingleImg = (props) => {
  return (
    <Link href={`/${props.id}`}>
      <div className={style.wrapper}  style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* <img src={props.thumbnail} alt="" className={style.img} /> */}
        <img src={`${urlForThumbnail(props.thumbnail)}`} alt="game-image" className={style.img} />
        <p className={style.para} >{props.name}</p>
      </div>
    </Link>
  );
};

export default PlaySingleImg;
