import React from "react";
import PlayHeader from "../Header/PlayHeader";
import { useRouter } from "next/router";
import PlayTheGame from "./PlayTheGame";
import { NextSeo } from "next-seo"; 
import client from "../../pages/api/client";
const style = {
  wrapper: "bg-[#F5F4F4] flex flex-col ",
  gameContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-white my-16",
  smallHeading:
    " text-4xl md:text-5xl max-w-fit mx-auto py-2 text-[#ffc900] my-6",
    singleGameContainer: "flex items-center",
  para: "text-stone-600 text-sm md:text-sm my-2 md:my-4 hover:text-stone-900",
};


const Play = ({data,id}) => {
// const router = useRouter()
// getting the id from the route that is called
// const { id } = router.query
const gameData  = data.filter(item => item.id == id)
  return (
    <div className={style.wrapper}>
       <NextSeo
        title={`Play ${gameData[0].name} Game`}
        description="Then with a short description here"
      />{" "}
      <PlayHeader headingText={`${gameData[0].name }`} />
      <div className={style.gameContainer}>
        <h2
          className={style.smallHeading}
        >
           {gameData[0].metaname}
        </h2>
        <div className={style.singleGameContainer}>
        <PlayTheGame gameData={gameData} similarGameData={data}/>
        </div>
      </div>
    </div>
  );
};

export default Play;

