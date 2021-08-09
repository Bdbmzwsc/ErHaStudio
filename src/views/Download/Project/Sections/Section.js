import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
const useStylesAcc = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const useStylesTable = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Section() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function createData(title, platform, link, extract) {
    return { title, platform, link, extract };
  }

  const rowsSkinTester = [
    createData(
      "SkinTester （0w01aBate）",
      "百度网盘",
      "https://pan.baidu.com/s/1KjVC1pe791ROUIEFA4miAg",
      "jmms"
    ),
  ];
  const classes = useStyles();
  const classesAcc = useStylesAcc();
  const classesTable = useStylesTable();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>下载项目</h2>
          <br />
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classesAcc.heading}>
                Skin Tester
              </Typography>
              <Typography className={classesAcc.secondaryHeading}>
                共一个版本
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table className={classesTable.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>平台</TableCell>
                      <TableCell>链接</TableCell>
                      <TableCell>提取码</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsSkinTester.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell>{row.platform}</TableCell>
                        <TableCell>
                          <a href={row.link} target="_blank" rel="noreferrer">
                            前往
                          </a>
                        </TableCell>
                        <TableCell>{row.extract}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
