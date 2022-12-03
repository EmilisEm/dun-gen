import React from "react";
import NavLink from "./NavLink";
import style from "./NavStyle.module.css";

const Nav = () => {
  return (
    <nav className={style.Nav}>
      <NavLink />
    </nav>
  );
};

export default Nav;
