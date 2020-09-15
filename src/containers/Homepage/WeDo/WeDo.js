import React from "react";
import classes from "./WeDo.module.css";
import SmallHeader from "../../../components/UI/SmallHeader/SmallHeader";
import Button from "../../../components/UI/Button/Button";
import Image from "../../../assets/images/Home/img3.png";
import ServiceCard from "../../../components/UI/ServiceCard/ServiceCard";

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
        <ServiceCard head="01">Business Strategy</ServiceCard>
        <ServiceCard head="02">Marketing Strategy</ServiceCard>
        <ServiceCard head="03">Cloud Technology</ServiceCard>
        <ServiceCard head="04">Product Design</ServiceCard>
        <ServiceCard head="05">Development</ServiceCard>
        <ServiceCard Black head="View All">
          Our Services
        </ServiceCard>
      </div>
    </section>
  );
};
export default WeDo;
