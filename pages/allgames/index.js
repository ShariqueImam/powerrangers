import React from "react";
import AllGames from "../../components/AllGames/AllGames";
import client from "../api/client";
import { NextSeo } from "next-seo";
const All = (props) => {
  return (
    <div>
      <NextSeo
        title={`All Power Ranger Games`}
        description="All cool power ranger games"
      />{" "}
      <AllGames data={props.allGames} />
    </div>
  );
};

export default All;

export async function getServerSideProps(context) {
  const allGames = await client.fetch(`*[_type == "allgames"]`);
  return { props: { allGames } };
}
