import React from "react";
import classes from "./WeDo.module.css";
import SmallHeader from "../../../components/UI/SmallHeader/SmallHeader";
import Button from "../../../components/UI/Button/Button";
import Image from "../../../assets/images/Home/img3.png";
import DevCard from "../../../components/UI/DevCard/DevCard";

const WeDo = (props) => {
  return (
    <section className={classes.WeDo}>
      <div className={classes.TopText}>
        <SmallHeader>What we do</SmallHeader>
        <h2>
          We’re a team of experienced professional in their specialities. We
          believe that user experience is key in achieving the set goals.
        </h2>
      </div>
      <div className={classes.MidContent}>
        <div className={classes.MidText}>
          <p>
            We’re a team of experienced professional in their specialities. We
            believe that user experience is key in achieving the set goals.
            We’re a team of experienced professional in their specialities. We
            believe that user experience is key in achieving the set goals.
          </p>
          <p>
            We’re a team of experienced professional in their specialities. We
            believe that user experience is key in achieving the set goals.
          </p>
          <Button link="#" className={classes.Button}>
            SEND YOUR REQUIREMENT
          </Button>
        </div>
        <div className={classes.ImageGrp}>
          <img src={Image} alt="decode" />
          <img src={Image} alt="decode" />
        </div>
      </div>
      <div className={classes.DevFlow}>
        <DevCard head="01">Business Strategy</DevCard>
        <DevCard head="02">Marketing Strategy</DevCard>
        <DevCard head="03">Cloud Technology</DevCard>
        <DevCard head="04">Product Design</DevCard>
        <DevCard head="05">Development</DevCard>
        <DevCard Black head="View All">
          Our Services
        </DevCard>
      </div>
    </section>
  );
};
export default WeDo;
