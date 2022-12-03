import React from "react";
import style from "./NavStyle.module.css";

const NavLink = () => {
  return (
    <div className={style.NavLink}>
      DunGen
      <div className={style.NavLinkUnderline}></div>
    </div>
  );
};

export default NavLink;
