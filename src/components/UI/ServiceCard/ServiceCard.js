import React from "react";
import classes from "./ServiceCard.module.css";
const DevCard = (props) => {
  let CardClasses = [
    classes.DevCard,
    props.Black ? classes.Black : classes.White,
  ].join(" ");
  return (
    <div className={CardClasses}>
      <p className={classes.Head}>{props.head}</p>
      <p className={classes.Text}>{props.children}</p>
      <p className={classes.Arrow}>
        <i className="fas fa-long-arrow-alt-right"></i>
      </p>
    </div>
  );
};
export default DevCard;
