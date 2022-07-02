import React from "react";
import GameGrid from "./GameGrid";

const style = {
  wrapper: "flex flex-col w-[90%] md:w-[80%] mx-auto py-12 rounded-xl",
  heading: "text-4xl md:text-5xl text-[#ffc900] text-center mt-8",
  heading1: "text-3xl md:text-4xl text-[#ffc900] text-center mt-8",
  para: "text-gray-200 text-sm text-center my-8 w-[80%] md:w-[60%] mx-auto",
};

const HomeGame = ({ data }) => {
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Yeseva One, cursive" }}
    >
      {/* adding the heading */}
      <h2 className={style.heading}>Power Ranger Games Online</h2>
      <h2 className={style.heading1}>Game Gallery</h2>
      <p className={style.para} style={{ fontFamily: "Poppins, sans-serif" }}>
        The Power Rangers video games will put you in the thick of the action as
        you face off against terrifying foes. Super-powered teenagers are making
        headlines all around the world. Everywhere you look, you'll see this
        enduring franchise that first debuted back in 1993. Inspired by Japanese
        action films known as tokusatsu, Saban Entertainment's original series
        swept the world!{" "}
      </p>
      <GameGrid data={data} />
    </div>
  );
};

export default HomeGame;
