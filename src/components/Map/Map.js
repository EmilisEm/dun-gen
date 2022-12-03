import React, { useContext } from "react";
import style from "./MapSytle.module.css";

import tile1 from "../../images/tile1.png";
import tile2 from "../../images/tile2.png";
import tile3 from "../../images/tile3.png";
import tile4 from "../../images/tile4.png";
import wall from "../../images/wall.png";
import man from "../../images/man1.png";
import context from "../../userContext";

const tiles = [tile1, tile2, tile3, tile4, wall];

const dummyMap = [
  [0, 4, 1, 4, 2],
  [3, 0, 1, 1, 3],
  [0, 4, 3, 1, 2],
  [2, 0, 1, 1, 2],
  [0, 3, 1, 1, 3],
];

const Map = ({ width }) => {
  // Makes async call to server to generate maze
  // Gets back 2d array widthXwidth or character
  // To be added later. Now staticly loops through all elements untill map is full

  const { currentMenu } = useContext(context);
  return (
    <div className={style.Map} id="map">
      <h2>{currentMenu === "maze" ? "Map of your maze" : "Your character"}</h2>
      {currentMenu === "maze" ? (
        <div
          className={style.DungMap}
          style={{ gridTemplateColumns: `repeat(${width ? width : 1}, 1fr)` }}
        >
          {dummyMap.map((mapRow) => {
            return mapRow.map((cell) => {
              return <img className={style.MapTile} src={tiles[cell]} />;
            });
          })}
        </div>
      ) : (
        <img className={style.CharacterDisplay} src={man} />
      )}
      <button className={style.Button}>Download</button>
    </div>
  );
};

export default Map;
