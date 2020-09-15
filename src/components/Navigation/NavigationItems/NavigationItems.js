import React from "react";
import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/services">Services</NavigationItem>

      <NavigationItem link="/work">Work</NavigationItem>

      <NavigationItem link="/about">About Us</NavigationItem>

      <NavigationItem link="/blog">Blog</NavigationItem>
    </ul>
  );
};
export default NavigationItems;
