import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/Logo/Logo.svg";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Button from "../UI/Button/Button";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <NavLink className={classes.Logo} to="/" exact>
        <img src={Logo} alt="DECODE" />
      </NavLink>
      <NavigationItems></NavigationItems>
      <Button link="/">Contact Us</Button>
    </header>
  );
};
export default Header;
