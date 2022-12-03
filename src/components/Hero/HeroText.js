import React from "react";
import style from "./HeroStyle.module.css";

const HeroText = () => {
  return (
    <div className={style.HeroText}>
      <h2>
        Generate a maze for your{" "}
        <span style={{ fontStyle: "italic" }}>crappy</span> game in a few easy
        steps
      </h2>
      <p>
        Use some wacky mathematicians wacky formula to help generate a maze for
        your personal use...
      </p>
    </div>
  );
};

export default HeroText;
