import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CodeIcon from "@material-ui/icons/Code";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
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
              description="二哈工作室成立于2020年，专注于为学习信息学的学生提供交流平台。欢迎使用各类编程语言，杜绝所谓“少儿编程”。也欢迎参加各类项目的编写与制作！"
              icon={CodeIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="为学生服务"
              description="二哈工作室的目的皆在为广大少年儿童学习编程提供一个良好的交流平台，促进学习。我们也会定期发布相关编程教程来进行辅助学习与讲解。服务是我们的唯一宗旨。"
              icon={AccessibilityNewIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="完全公益"
              description="二哈工作室是一个绝对的非营利性组织，代表加入二哈工作室的用户无需支付任何费用。当然，在后期我们可能会提供一些付费服务，但保证不会影响整个平台。"
              icon={AttachMoneyIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
