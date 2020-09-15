import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <Link className={classes.Link} to={props.link}>
      <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(" ")}
      >
        {props.children}
      </button>
    </Link>
  );
};
export default Button;
