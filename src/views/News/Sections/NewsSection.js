import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import TextField from "@material-ui/core/TextField";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
// import MaterialButton from "@material-ui/core/Button";
// import FilterListIcon from "@material-ui/icons/FilterList";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function NewsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>新闻</h2>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
