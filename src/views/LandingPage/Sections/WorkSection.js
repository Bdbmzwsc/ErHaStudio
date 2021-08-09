import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>加入我们</h2>
          <h4 className={classes.description}>
            你可以提交加入申请，我们的管理员会第一时间回复你。
          </h4>
          <Button color="primary" size="lg" fullWidth round>
            去发送申请
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
