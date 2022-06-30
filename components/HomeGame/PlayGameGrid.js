import React from "react";
import PlaySingleImg from "../SingleGame/PlaySingleImg";

const style = {
  wrapper: "flex flex-wrap items-center justify-center",
};

const PlayGameGrid = ({ data }) => {
  return (
    <div className={style.wrapper}>
      {data.map((singleGame) => (
        <PlaySingleImg
          thumbnail={singleGame.image}
          key={singleGame.id}
          id={singleGame.id}
          name={singleGame.name}
        />
      ))}
    </div>
  );
};

export default PlayGameGrid;
