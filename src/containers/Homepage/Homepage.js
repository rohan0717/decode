import React, { Component } from "react";
import classes from "./Homepage.module.css";
import SmallHeader from "../../components/UI/SmallHeader/SmallHeader";
import ReviewSVG from "../../assets/images/Home/ReviewCard.svg";
import Image_1 from "../../assets/images/Home/img1.png";
import Image_2 from "../../assets/images/Home/img2.png";
import Image_3 from "../../assets/images/Home/img3.png";
import Image_4 from "../../assets/images/Home/img4.png";
import Image_5 from "../../assets/images/Home/img5.png";
import ArrowDown from "../../assets/images/Home/Down.svg";

import WeDo from "./WeDo/WeDo";

class Homepage extends Component {
  render() {
    return (
      <div className={classes.Homepage}>
        <section className={classes.Intro}>
          <div className={classes.FloatingButton}>
            <div>
              <img src={ArrowDown} alt="Discover" />
            </div>
            <p className={classes.Divider}>|</p>
            <p className={classes.Text}>
              DISCOVER<br></br>DECODE
            </p>
          </div>
          <div className={classes.IntroContent}>
            <div className={classes.IntroTop}>
              <div className={classes.IntroText}>
                <SmallHeader>Decode</SmallHeader>
                <h2>
                  We know how
                  <br></br> to effectively use
                  <br></br>
                  the user experience
                </h2>
              </div>
              <div className={classes.Review}>
                <div className={classes.ReviewCard}>
                  <img src={ReviewSVG} alt="Review Card" />
                  <div>
                    <p>A brand is a voice and a product is a souvenir.</p>
                    <p>-Lisa Gansky</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.IntroBottom}>
              <img src={Image_4} alt="ImageCard" />
              <img src={Image_3} alt="ImageCard" />
              <img src={Image_2} alt="ImageCard" />
              <img src={Image_1} alt="ImageCard" />
              <img src={Image_5} alt="ImageCard" />
            </div>
          </div>
        </section>
        <WeDo></WeDo>
      </div>
    );
  }
}
export default Homepage;
