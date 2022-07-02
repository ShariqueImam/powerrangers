import React from "react";
import SingleGameImg from "../SingleGame/SingleGameImg";

const style = {
  wrapper: "flex flex-wrap mx-auto items-center justify-center",
};

const GameGrid = ({ data }) => {
  return (
    <div className={style.wrapper}  style={{ fontFamily: 'Poppins, sans-serif' }}>
      {data && data.map((singleGame) => (
        <SingleGameImg
          thumbnail={singleGame.image}
          key={singleGame.id}
          id={singleGame.id}
          name={singleGame.name}
        />
      ))}
    </div>
  );
};

export default GameGrid;
