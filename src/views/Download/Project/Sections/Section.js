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
  function createData(title, platform, link, extract, desc, versions) {
    return { title, platform, link, extract, versions };
  }

  const rowsSkinTester = [
    createData(
      "SkinTester （0w01aBate）",
      "百度网盘",
      "https://pan.baidu.com/s/1KjVC1pe791ROUIEFA4miAg",
      "jmms",
      1
    ),
  ];
  const rowsSJA = [
    createData(
      "Scratch JSON Analyzer",
      "Github",
      "https://codeload.github.com/Bdbmzwsc/SJA/zip/refs/heads/main",
      "N/A",
      1
    ),
    createData("SJAWeb", "Web", "https://bdbmzwsc.github.io/SJA", "N/A", 2),
  ];
  const rowsNitro = [
    createData(
      "Nitrogen",
      "Github",
      "https://github.com/Creeper2333/Nitro-Language",
      "N/A",
      1
    ),
    createData(
      "Nitrogen",
      "Official",
      "https://nitro-erha.vercel.app/",
      "N/A",
      2
    ),
  ];
  const rowsEADJ = [
    createData(
      "EADJ",
      "Github",
      "https://github.com/Bdbmzwsc/EAD_J",
      "N/A",
       1
    ), 
    createData(
      createData("EADJ", "Github", "https://github.com/Bdbmzwsc/EAD_J", "N/A", 1),
      createData("EADWeb", "Vercel", "https://ead-j.vercel.app", "N/A", 2),
  ];
  const projects = [
    {
      title: "Skin Tester",
      desc: "在您使用其它UI时可以提取试用此UI",
      project: rowsSkinTester,
    },
    {
      title: "SJA",
      desc: "解析对比sb3文件，为抄袭作鉴定",
      project: rowsSJA,
    },
    {
      title: "Nitro",
      desc: "一位15岁的高中生开发的语言",
      project: rowsNitro,
    },
    {
      title: "EAD_J",
      desc: "一个加密解密的跨平台程序",
      project: rowsEADJ,
    },
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
          {projects.map((project, index) => {
            return (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classesAcc.heading}>
                    {project.title}
                  </Typography>
                  <Typography className={classesAcc.secondaryHeading}>
                    {project.desc}
                  </Typography>
                </AccordionSummary>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classesAcc.secondaryHeading}>
                    共三个版本
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer component={Paper}>
                    <Table
                      className={classesTable.table}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>名称</TableCell>
                          <TableCell>平台</TableCell>
                          <TableCell>链接</TableCell>
                          <TableCell>提取码</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {project.project.map((row) => (
                          <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                              {row.title}
                            </TableCell>
                            <TableCell>{row.platform}</TableCell>
                            <TableCell>
                              <a
                                href={row.link}
                                target="_blank"
                                rel="noreferrer"
                              >
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
            );
          })}
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
