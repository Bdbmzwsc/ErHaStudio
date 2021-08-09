import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CodeIcon from "@material-ui/icons/Code";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="about">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>关于我们</h2>
          <h5 className={classes.description}>
            我们，是二哈工作室——是一个年更工作室：但是每更都是精品。
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="由学生组成"
              description="二哈工作室成立于2020年，专注于为学习信息学的学生提供交流平台。欢迎使用各类编程语言，杜绝所谓“少儿编程”。"
              icon={CodeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="由学生组成"
              description="二哈工作室成立于2020年，专注于为学习信息学的学生提供交流平台。欢迎使用各类编程语言，杜绝所谓“少儿编程”。"
              icon={CodeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="由学生组成"
              description="二哈工作室成立于2020年，专注于为学习信息学的学生提供交流平台。欢迎使用各类编程语言，杜绝所谓“少儿编程”。"
              icon={CodeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
