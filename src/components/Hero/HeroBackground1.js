import React from "react";
import style from "./HeroStyle.module.css";

import image from "../../images/man1.png";

const HeroBackground1 = () => {
  return <img src={image} className={style.HeroBackground1}></img>;
};

export default HeroBackground1;
