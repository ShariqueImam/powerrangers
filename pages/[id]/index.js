import React from "react";
import Play from "../../components/Play/Play";
import client from "../api/client";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/router";
const style = {
  wrapper: "",
};

const SingleGameDetails = (props) => {
  const router = useRouter();
  // getting the id from the route that is called
  const { id } = router.query;
  return (
    <div>
      <Navbar />
      <Play data={props.games} id={id} />
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
