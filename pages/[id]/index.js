import React from "react";
import Play from "../../components/Play/Play";
import client from "../api/client";
import Navbar from "../../components/Navbar/Navbar";
const style = {
  wrapper: "",
};

const SingleGameDetails = (props) => {
  return (
    <div>
           <Navbar/>

      <Play data={props.games} />
    </div>
  );
};

export default SingleGameDetails;
export async function getServerSideProps(context) {
  const homeGames = await client.fetch(`*[_type == "homegames"]`);
  const allGames = await client.fetch(`*[_type == "allgames"]`);
  const games = [...homeGames, ...allGames];
  // Pass data to the page via props
  return { props: { games } };
}
