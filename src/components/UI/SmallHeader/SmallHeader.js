import React from "react";
import classes from "./SmallHeader.module.css";
const SmallHeader = (props) => {
  return <p className={classes.SmallHeader}>{props.children}</p>;
};
export default SmallHeader;
