import React from "react";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { scroller, Element } from "react-scroll";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import VBSection from "./Sections/VBSection.js";

const dashboardRoutes = [];

export default function DownloadTutorial(props) {
  const { ...rest } = props;
  const landingClasses = makeStyles(styles)();
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="二哈工作室"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={landingClasses.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={landingClasses.title}>下载编程教程</h1>
              <h4 style={{ color: "#fff" }}>
                二哈工作室提供从网络搜集的各类编程教程，包括VB.Net、C#教程等。
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                onClick={() => {
                  scroller.scrollTo("download", {
                    duration: 1000,
                    smooth: true,
                    delay: 100,
                  });
                }}
              >
                下载教程&nbsp;&nbsp;
                <ArrowForwardIosIcon />
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div>
        <div
          className={classNames(landingClasses.main, landingClasses.mainRaised)}
        >
          <div className={landingClasses.container}>
            <Element name="download">
              <VBSection />
            </Element>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
