import React, { useEffect, useState } from "react";
import Features from "./../components/Features/Features";
import Home from "./../components/Home/Home";
import HomeGame from "../components/HomeGame/HomeGame";
import client from "./api/client";
import Newsletter from "../components/Newsletter/Newsletter";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
const App = (props) => {
  return (
    <div className="flex flex-col">
            <Navbar/>

      <Home />
      <HomeGame data={props.homeGames} />
      <Content  />
      <Features />
      <Newsletter />
    </div>
  );
};

export default App;



export async function getServerSideProps(context) {
  const homeGames = await client.fetch(`*[_type == "homegames"]`);
  return { props: { homeGames } }
}