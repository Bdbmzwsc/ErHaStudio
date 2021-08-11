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

export default function VBSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function createData(title, platform, link, linkShow) {
    return { title, platform, link, linkShow };
  }

  const rowsVB = [
    createData(
      "第一集",
      "BiliBili",
      "https://www.bilibili.com/video/BV1fJ411G7r9",
      "BV1fJ411G7r9"
    ),
    createData(
      "第二集",
      "BiliBili",
      "https://www.bilibili.com/video/BV1oJ41177Hj",
      "BV1oJ41177Hj"
    ),
    createData(
      "第三集",
      "BiliBili",
      "https://www.bilibili.com/video/BV1t7411j7v1",
      "BV1t7411j7v1"
    ),
    createData(
      "第四集",
      "BiliBili",
      "https://www.bilibili.com/video/BV1FE411g7Wo",
      "BV1FE411g7Wo"
    ),
  ];
  const rowsCSharp = [
    createData(
      "第一集",
      "BiliBili",
      "https://www.bilibili.com/video/BV1FJ411W7e5",
      "BV1FJ411W7e5"
    ),
  ];
  const classes = useStyles();
  const classesAcc = useStylesAcc();
  const classesTable = useStylesTable();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>下载教程</h2>
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
              <Typography className={classesAcc.heading}>VB.Net教程</Typography>
              <Typography className={classesAcc.secondaryHeading}>
                共四集
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table className={classesTable.table} aria-label="simple table">
                  <caption>
                    此教程为网络搜集得来，如有侵权请联系管理员删除。
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>平台</TableCell>
                      <TableCell>链接</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsVB.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell>{row.platform}</TableCell>
                        <TableCell>
                          <a href={row.link} target="_blank" rel="noreferrer">
                            {row.linkShow}
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classesAcc.heading}>C#教程</Typography>
              <Typography className={classesAcc.secondaryHeading}>
                共一集
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table className={classesTable.table} aria-label="simple table">
                  <caption>
                    此教程为网络搜集得来，如有侵权请联系管理员删除。
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell>平台</TableCell>
                      <TableCell>链接</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsCSharp.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell>{row.platform}</TableCell>
                        <TableCell>
                          <a href={row.link} target="_blank" rel="noreferrer">
                            {row.linkShow}
                          </a>
                        </TableCell>
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
