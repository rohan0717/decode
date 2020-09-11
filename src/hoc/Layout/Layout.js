import React, { Component } from "react";
import classes from "./Layout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class layout extends Component {
  state = {
    name: "Rishi",
  };

  changeName = () => {
    this.setState(() => {
      return {
        name: "Rohan",
      };
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Header></Header>
        <h2 onClick={this.changeName}>{this.state.name}</h2>
        <main>{this.props.children}</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default layout;
