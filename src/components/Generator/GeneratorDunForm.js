import React, { useContext } from "react";
import context from "../../userContext";
import style from "./GeneratorStyle.module.css";

const GeneratorDunForm = () => {
  const { mapWidth, setMapWidth, dunName, setDunName, dunSeed, setDunSeed } =
    useContext(context);

  const randomSeed = () => {
    setDunSeed(Math.floor(Math.random() * 10000));
  };

  const setWidth = (e) => {
    let a = e.target.value;
    if (isNaN(a[a.length - 1]) && a !== "") {
      return;
    } else {
      if (a > 15) {
        a = 15;
      }
      a ? setMapWidth(a) : setMapWidth("");
    }
  };
  const setSeed = (e) => {
    let a = e.target.value;
    if (isNaN(a[a.length - 1]) && a !== "") {
      return;
    } else {
      a ? setDunSeed(a) : setDunSeed("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMapWidth("");
    setDunSeed("");
    setDunName("");
    const element = document.getElementById("map");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      className={style.GeneratorDunForm}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className={style.formControl}>
        <label>Dungeon title</label>
        <input
          type="text"
          required
          value={dunName}
          onChange={(e) => {
            setDunName(e.target.value);
          }}
        />
      </div>

      <div className={style.formControl}>
        <label>Dungeon seed</label>
        <input
          type="text"
          required
          value={dunSeed}
          onChange={(e) => {
            setSeed(e);
          }}
        />
        <button
          type="button"
          onClick={() => {
            randomSeed();
          }}
        >
          Randomise
        </button>
      </div>

      <div className={style.formControl}>
        <label>Dungeon width</label>
        <input
          type="text"
          required
          value={mapWidth}
          onChange={(e) => {
            setWidth(e);
          }}
        />
      </div>

      <button type="submit">Generate maze</button>
    </form>
  );
};

export default GeneratorDunForm;
