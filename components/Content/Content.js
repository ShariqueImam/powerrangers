import React from "react";
import QA from "./QA";
const style = {
  wrapper: "w-[95%] md:w-[70%] mx-auto",
  para: "text-[#ffc900] text-center mb-12",
  table: "border-2 border-gray-100  w-full",

  head: "text-[#ffc900] border-b-2 border-gray-100 border-r-2 p-2",
  row: "text-gray-100 text-center",
  a: " border-b-2 border-gray-100 border-r-2 p-3 ",
  below: "text-gray-100 text-center my-12",
};
const Content = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.para}>
        Here is list of some Power Rangers games free online without download
        and Power Rangers without flash player
      </p>
      {/* adding the table of the games */}
      <table className={style.table}>
        <tr className={style.row}>
          <th className={style.head}>Game Title</th>
          <th className={style.head}>Release Date</th>
          <th className={style.head}>Platform</th>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Morphin Legends</td>
          <td className={style.a}>2022</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers: Battle for the Grid</td>
          <td className={style.a}>2019</td>
          <td className={style.a}>
            PlayStation 4, Xbox One, Nintendo Switch, PC, Stadia.
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers: All Stars</td>
          <td className={style.a}>2018</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers: Legacy Wars</td>
          <td className={style.a}>2017</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Mighty Morphin Power Rangers: Mega Battle</td>
          <td className={style.a}>2017</td>
          <td className={style.a}>PlayStation 4, Xbox One</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Dino Charge Rumble</td>
          <td className={style.a}>2015</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Unite</td>
          <td className={style.a}>2015</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Dash</td>
          <td className={style.a}>2015</td>
          <td className={style.a}>iOS, Android</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Super Megaforce</td>
          <td className={style.a}>2014</td>
          <td className={style.a}>Nintendo 3DS</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Megaforce</td>
          <td className={style.a}>2013</td>
          <td className={style.a}>Nintendo 3DS</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Super Samurai</td>
          <td className={style.a}>2012</td>
          <td className={style.a}>Xbox 360</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Samurai</td>
          <td className={style.a}>2011</td>
          <td className={style.a}>Wii, Nintendo DS</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers: Super Legends</td>
          <td className={style.a}>2007</td>
          <td className={style.a}>
            Nintendo DS, PlayStation 2, Microsoft Windows
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers S.P.D</td>
          <td className={style.a}>2005</td>
          <td className={style.a}>Game Boy Advance</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Dino Thunder</td>
          <td className={style.a}>2004</td>
          <td className={style.a}>Game Boy Advance, GameCube, PlayStation 2</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Ninja Storm</td>
          <td className={style.a}>2003</td>
          <td className={style.a}>Game Boy Advance, Microsoft Windows</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Wild Force</td>
          <td className={style.a}>2002</td>
          <td className={style.a}>Game Boy Advance</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Time Force</td>
          <td className={style.a}>2001</td>
          <td className={style.a}>
            Game Boy Color, Game Boy Advance, PlayStation, Microsoft Windows
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Lightspeed Rescue</td>
          <td className={style.a}>2000</td>
          <td className={style.a}>
            Game Boy Color, Macintosh, Nintendo 64, PlayStation, Microsoft
            Windows
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Zeo vs. The Machine Empire</td>
          <td className={style.a}>1996</td>
          <td className={style.a}>
            Microsoft Windows, Macintosh, Bandai Pippin
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>
            Power Rangers Zeo: Full Tilt Battle Pinball
          </td>
          <td className={style.a}>1996</td>
          <td className={style.a}>PlayStation</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Power Rangers Zeo: Battle Racers</td>
          <td className={style.a}>1996</td>
          <td className={style.a}>Super Nintendo Entertainment System</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>
            Mighty Morphin Power Rangers: The Fighting Edition
          </td>
          <td className={style.a}>1995</td>
          <td className={style.a}>Super Nintendo Entertainment System</td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Mighty Morphin Power Rangers: The Movie</td>
          <td className={style.a}>1995</td>
          <td className={style.a}>
            Sega Genesis, Super Nintendo Entertainment System, Game Boy, Game
            Gear
          </td>
        </tr>
        <tr className={style.row}>
          <td className={style.a}>Mighty Morphin Power Rangers</td>
          <td className={style.a}>1994</td>
          <td className={style.a}>
            Sega Genesis, Super Nintendo Entertainment System, Game Boy, Game
            Gear, Sega CD
          </td>
        </tr>
      </table>
      <p className={style.below}>
        These 90s superstars are still going strong thanks to Hasbro, who is
        currently producing them! In spite of the group's nearly 40-year
        history, there is one thing that has stayed constant: its energetic
        energy, engaging music, and interesting narratives! Super Megaforce,
        Samurai, Dino Charge, and Ninja Steel are just a few of the many Power
        Rangers-themed films and shows. The story's legendary spirit is alive
        and well in each and every retelling, which lends a new flavour to the
        traditional storyline. For example, each series centres on a group of
        young people who are brought together and mentored by a single
        individual. In order to transform into strong heroes, they'll have to
        put in a lot of work!
      </p>
      <QA />
    </div>
  );
};

export default Content;
