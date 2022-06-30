import React from "react";
import GameGrid from "./GameGrid";

const style = {
  wrapper:
    "flex flex-col w-[90%] md:w-[80%] mx-auto py-12 rounded-xl",
  heading: "text-4xl md:text-5xl text-[#ffc900] text-center",
  para: "text-gray-200 text-sm text-center my-8 w-[80%] md:w-[60%] mx-auto",
};


const HomeGame = ({data}) => {
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Yeseva One, cursive" }}
    >
      {/* adding the heading */}
      <h2 className={style.heading}>Game Gallery</h2>
      <p className={style.para} style={{ fontFamily: "Poppins, sans-serif" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus
        consequatur ipsum qui repellat delectus officia dicta maxime libero
        corrupti eum aspernatur corporis{" "}
      </p>
      <GameGrid data={data}/>
    </div>
  );
};

export default HomeGame;
