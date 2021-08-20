import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/bdb.jpg";
import team2 from "assets/img/faces/buge.jpg";
import team3 from "assets/img/faces/samzhangjy.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>这是我们的成员</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Bdbmzwsc
                <br />
                <small className={classes.smallTitle}>室长、管理员</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  初中生。他是最主要的工作室创始人，也是众多项目制作人之一。
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="tencent://Message/?Uin=1726016497&websiteName=www.oicqzone.com&Menu=yes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-qq"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="mailto:1726016497@qq.com"
                >
                  <i className={classes.socials + " fas fa-envelope"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/Bdbmzwsc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
            <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://bdbmzwsc.github.io/MyBdbmzwsc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-zhihu"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                samzhangjy
                <br />
                <small className={classes.smallTitle}>管理员</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  初中生。他为二哈工作室编写了此网站，后者受到了高度评价。
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="tencent://Message/?Uin=2947602769&websiteName=www.oicqzone.com&Menu=yes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-qq"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="mailto:samzhang951@outlook.com"
                >
                  <i className={classes.socials + " fas fa-envelope"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/samzhangjy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.zhihu.com/people/samzhangjy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-zhihu"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                lcxliuym
                <br />
                <small className={classes.smallTitle}>管理员</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  初中生。他辅助Bdbmzwsc创办了这个工作室，是二哈的创始人之一。
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="tencent://Message/?Uin=3604325579&websiteName=www.oicqzone.com&Menu=yes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-qq"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="mailto:lym986878@163.com"
                >
                  <i className={classes.socials + " fas fa-envelope"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/Doctor-Britt-de"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
