import React, { useState } from "react";
import AllGamesHeader from "../Header/AllGamesHeader";
import GameGrid from "../HomeGame/GameGrid";
import SearchBar from "./SearchBar";
import client from "../../pages/api/client";
import stringSimilarity from "string-similarity";
const style = {
  wrapper: "bg-[#F5F4F4] flex flex-col ",
  allGamesContainer: "w-[90%] md:w-[80%] mx-auto py-12 rounded-xl",
  allGame: "cursor-pointer text-[#ffc900] mx-auto border-b-2 border-[#ffc900] text-xl",
};

const AllGames = ({ data }) => {
  const [a, setA] = useState([]);
  const handleSearch = (searchValue) => {
    let ids = [];
    for (let g of data) {
      g.keyword.map((a) => {
        let d = stringSimilarity.compareTwoStrings(searchValue, a);
        if (d > 0.99) {
          ids = [...ids, g];
        }
      });
    }
    setA(ids);
  };
  const handleClick = () => {
    setA(data);
  };
  return (
    <div className={style.wrapper}>
      <AllGamesHeader headingText="ALL GAMES" />
      <SearchBar onSearch={handleSearch} />
      <h2 onClick={handleClick} className={style.allGame}>
        All Games
      </h2>
      <div className={style.allGamesContainer}>
        <GameGrid data={a.length > 0 ? a : data} />
      </div>
    </div>
  );
};

export default AllGames;
