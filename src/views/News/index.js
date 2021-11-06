import React from "react";
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
import NewsSection from "./Sections/NewsSection";

export default function NewsPage() {
  const landingClasses = makeStyles(styles)();
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
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={landingClasses.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={landingClasses.title}>二哈大事记</h1>
              <h4 style={{ color: "#fff" }}>
                这里记载着二哈的点滴，可都是美好的回忆啊～不说了，小哈去看回忆啦！
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                onClick={() => {
                  scroller.scrollTo("news", {
                    duration: 1000,
                    smooth: true,
                    delay: 100,
                  });
                }}
              >
                看新闻&nbsp;&nbsp;
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
            <Element name="news">
              <NewsSection />
            </Element>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
