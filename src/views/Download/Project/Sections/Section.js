import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Paper from "@material-ui/core/Paper";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";

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
  function createData(
    title,
    platform,
    link,
    language,
    author,
    currentver,
    desc,
    app
  ) {
    return { title, platform, link, language, author, currentver, app };
  }

  const rowsSkinTester = [
    createData(
      "SkinTester （0w01aBate）",
      "百度网盘",
      "https://pan.baidu.com/s/1KjVC1pe791ROUIEFA4miAg",
      "vb.net",
      "Bdbzwsc",
      "0w01aBate",
      1
    ),
  ];
  const rowsSJA = [
    createData(
      "Scratch JSON Analyzer",
      "Github",
      "https://codeload.github.com/Bdbmzwsc/SJA/zip/refs/heads/main",
      "C#",
      "Bdbmzwsc",
      "v1.0.0",
      1
    ),
    createData(
      "SJAWeb",
      "Web",
      "https://bdbmzwsc.github.io/SJA",
      "HTML",
      "Bdbmzwsc",
      "v0.1",
      2
    ),
  ];
  const rowsNitro = [
    createData(
      "Nitrogen",
      "Github",
      "https://github.com/Creeper2333/Nitro-Language",
      "Python",
      "cama233",
      "Unknow",
      1
    ),
    createData(
      "Nitrogen",
      "Official",
      "https://nitro-erha.vercel.app/",
      "Unknow",
      "camao233",
      "Unknow",
      2
    ),
  ];
  const rowsEADJ = [
    createData(
      "EADJ",
      "Github",
      "https://github.com/Bdbmzwsc/EAD_J",
      "Java+C#",
      "Bdbmzwsc",
      "v0.1",
      1
    ),
    createData(
      "EADWeb",
      "Vercel",
      "https://ead-j.vercel.app",
      "React",
      "Bdbmzwsc",
      "v0.1",
      2
    ),
  ];
  const rowsBaiduSpider = [
    createData(
      "BaiduSpider",
      "Github",
      "https://github.com/BaiduSpider/BaiduSpider",
      "Python",
      "samzhangjy",
      "v1.0",
      1
    ),
    createData(
      "BaiduSpider_Web",
      "Unknow",
      "https://baidus.netlify.app/",
      "React",
      "samzhangjy",
      "v1.0",
      2
    ),
  ];
  // const rowsEADJ = [createData("EADJ", "Github", "https://github.com/Bdbmzwsc/EAD_J", "N/A", 1),    createData("EADWeb", "Vercel", "https://ead-j.vercel.app", "N/A", 2),];
  const projects = [
    {
      title: "Skin Tester",
      desc: "在您使用其它UI时可以提取试用此UI,由于在百度网盘，故有提取码：jmms",
      project: rowsSkinTester,
      app: "1",
    },
    {
      title: "SJA",
      desc: "解析对比sb3文件，为抄袭作鉴定",
      project: rowsSJA,
      app: "2",
    },
    {
      title: "Nitro",
      desc: "一位15岁的高中生开发的语言",
      project: rowsNitro,
      app: "2",
    },
    {
      title: "EAD_J",
      desc: "一个加密解密的跨平台程序",
      project: rowsEADJ,
      app: "2",
    },
    {
      title: "BaiduSpider",
      desc: "此网站编写者写的百度搜索引擎",
      project: rowsBaiduSpider,
      app: "2",
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
          <h4 align="center">
            您可以使用Ctrl+F去搜索项目，当然，我们不能保证每一个项目都具有开源性
          </h4>
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
                    共{project.app}个应用
                    {/*project.project.map(function (ro) {
                      return (
                        <li key={ro.title}>
                          <div>
                            <Typography className={classesAcc.secondaryHeading}>
                              {ro.app}
                            </Typography>
                          </div>
                        </li>
                      );
                    })*/}
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
                          <TableCell>语言</TableCell>
                          <TableCell>作者</TableCell>
                          <TableCell>版本</TableCell>
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
                            <TableCell>{row.language}</TableCell>
                            <TableCell>{row.author}</TableCell>
                            <TableCell>{row.currentver}</TableCell>
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
