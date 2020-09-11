import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../logo.svg";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <NavLink to="/" exact activeClassName={classes.active}>
        <img src={Logo} className={classes.Logo} alt="decode" />
      </NavLink>
      <ul>
        <NavLink to="/about" exact activeClassName={classes.active}>
          About Us
        </NavLink>
      </ul>
    </header>
  );
};
export default Header;
