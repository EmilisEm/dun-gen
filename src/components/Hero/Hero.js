import React from "react";
import HeroBackground1 from "./HeroBackground1";
import HeroBackground2 from "./HeroBackground2";
import HeroDropdown from "./HeroDropdown";
import style from "./HeroStyle.module.css";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className={style.Hero}>
      <HeroText />
      <HeroDropdown />
      <HeroBackground1 />
      <HeroBackground2 />
    </div>
  );
};

export default Hero;
