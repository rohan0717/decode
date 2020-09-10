import React, { Component } from "react";
import classes from "./Layout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header></Header>
        <main>{this.props.children}</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default layout;
