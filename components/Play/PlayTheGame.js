import React, { useRef, useLayoutEffect } from "react";
import useWindowSize from "../../hooks/windowSize";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import axios from "axios";
import PlayGameGrid from "../HomeGame/PlayGameGrid";
import { DatasetJsonLd } from "next-seo";
const tokenWithWriteAccess =
  "skQMjV6Hnuxm8Kdb3AeslehiTTW4TxW0WLSiaKOQEExGTokWbKZ4PwDynNFV0eZUJoPeLr89BJeR1fh6nX857Srjrzq2ssiyrD3uyBrPXCTvPchN2z46edP4PZxvxLHL377swnWdgY9GJsfC5DxvRKKcPEjxQiQocQQWRkrUPkzv3GFqMPyt";
const style = {
  wrapper: "flex mx-auto my-6 flex-col items-center w-[100%]",
  para: "text-gray-600 w-[95%] w-[85%] lg:w-[70%] md:text-left mx-auto md:my-8 my-12  text-center px-6 md:px-8 p-8 border-2 border-[#ffc900] rounded-lg",
  gameNameHeading: "text-2xl md:text-4xl text-[#ffc900] mt-6 mx-6 text-center",
  otherGameGrid:
    "text-2xl md:text-4xl text-[#ffc900] mt-16 mx-auto text-center my-2",
  description: "mt-6 w-[100%] md:w-[100%]",
  likeContainer:
    "flex max-w-fit px-2 md:px-4 md:py-1 flex-col items-center mx-auto md:mx-24",
  likeText:
    "text-sm md:text-xl mx-2 md:mx-4 mt-2 transform text-[#ffc900] my-3",
};
const PlayTheGame = ({ gameData, similarGameData }) => {
  const { width } = useWindowSize();
  const elRef = useRef();
  useLayoutEffect(() => {
    if (elRef.current && gameData.length > 0) {
      elRef.current.firstElementChild.style.height = `${
        width > 750 && width < 1000 ? "400px" : width > 1000 ? "520px" : "350px"
      } `;
      elRef.current.firstElementChild.style.width = `${
        width > 750 && width < 1000 ? "650px" : width > 1000 ? "750px" : "350px"
      }`;
    }
  });
  const [isLike, setIsLike] = React.useState(false);
  const handleLike = () => {
    setIsLike((prev) => !prev);
  };
  const [r, setR] = React.useState(0);
  const handleRatingChange = (rating) => {
    setR(rating);
    sendRating(rating);
  };
  const sendRating = async (rating) => {
    const { data } = await axios.post(
      `https://x6jorgpn.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
      {
        mutations: [
          {
            patch: {
              query: `*[_type == '${gameData[0]._type}' && id == '${gameData[0].id}']`,
              insert: {
                after: "rating[-1]",
                items: [`${rating}`],
              },
            },
          },
        ],
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
  };
  let sum =0
  let ta = gameData[0].rating;
  for (let b of ta) {
    sum += +b;
  }
  let a =sum/ta.length;
  return (
    <div className={style.wrapper}>
      <div
        ref={elRef}
        className="border-2 border-[#ffc900]"
        dangerouslySetInnerHTML={{
          __html: gameData.length > 0 ? gameData[0].gamecode : "",
        }}
      />
      {/* adding the description */}
      <div className={style.description}>
        <div className={style.likeContainer}>
          {/* <p className={style.likeText}>{gameData[0].likes}</p>
          {isLike ? (
            <AiFillLike
              className="text-3xl md:text-4xl text-gray-800 cursor-pointer hover:scale-[1.2] transition duration-[400ms] transform skew-x-[30deg] pt-2 md:pt-0"
              onClick={handleLike}
            />
          ) : (
            <AiOutlineLike
              className="text-3xl md:text-4xl text-gray-800  cursor-pointer hover:scale-[1.2] transition duration-[400ms] transform skew-x-[30deg] pt-2 md:pt-0"
              onClick={handleLike}
            />
          )} */}
          <p className={style.likeText}>Rate {gameData[0].name}</p>
          <StarRatings
            rating={r}
            numberOfStars={5}
            starRatedColor="#ffc900"
            starEmptyColor="gray"
            changeRating={handleRatingChange}
            name="rating"
            starHoverColor="#ffc900"
            starDimension="35px"
          />
          <p className="text-sm text-[#ffc900] my-2">
            {a.toFixed(2)} out of 5. By {ta.length} people
          </p>
        </div>

        <h2 className={style.gameNameHeading}>Play {gameData[0].name} Game</h2>
        <h2 className={style.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          non unde, quod inventore quaerat vero aliquid, dolorem maiores
          pariatur sit dolore atque amet autem earum nesciunt reprehenderit
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          non unde, quod inventore quaerat vero aliquid, dolorem maiores
          pariatur sit dolore atque amet autem earum nesciunt reprehenderit
          recusandae. Explicabo, voluptate!Lorem
        </h2>
      </div>
      <div>
        <h2 className={style.otherGameGrid}>Similar Games</h2>
        <PlayGameGrid data={similarGameData.slice(0, 4)} />
      </div>
    </div>
  );
};

export default PlayTheGame;
