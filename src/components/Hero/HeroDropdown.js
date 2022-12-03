import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import style from "./HeroStyle.module.css";

const HeroDropdown = () => {
  const scrollToGen = () => {
    const element = document.getElementById("generator");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button className={style.HeroDropdown} onClick={scrollToGen}>
      <FontAwesomeIcon icon={faCaretSquareDown} />
    </button>
  );
};

export default HeroDropdown;
