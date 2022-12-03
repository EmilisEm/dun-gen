import React, { useContext } from "react";
import context from "../../userContext";
import style from "./GeneratorStyle.module.css";

const GeneratorSelect = () => {
  const { currentMenu, setCurrentMenu } = useContext(context);
  return (
    <div className={style.GeneratorSelect}>
      <button
        className={currentMenu === "maze" ? style.activeButton : ""}
        onClick={() => setCurrentMenu("maze")}
      >
        Maze generator
      </button>
      <button
        className={currentMenu === "char" ? style.activeButton : ""}
        onClick={() => setCurrentMenu("char")}
      >
        Character generator
      </button>
    </div>
  );
};

export default GeneratorSelect;
