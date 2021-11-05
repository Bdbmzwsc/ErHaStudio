import React from "react";
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import classNames from "classnames";
//import { makeStyles } from "@material-ui/core/styles";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
//import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//import { scroller, Element } from "react-scroll";
//import styles from "assets/jss/material-kit-react/views/landingPage.js";

export default function News() {
  return (
    <div>
      <Header
        color="transparent"
        brand="二哈工作室"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax
        filter
        image={require("assets/img/landing-bg.jpg").default}
      ></Parallax>
    </div>
  );
}
