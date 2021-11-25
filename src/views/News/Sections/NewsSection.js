import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Card from "components/Card/Card.js";
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
          <Card>
            <h1 align="center">EAM上线！！</h1>
            <h3 align="center">
              <h1 align="center">EAM</h1>
              <br />
              EH-Account-Manager,一个EH的平台管理程序,您可以在此注册或登录您的EH账号
              <br />
              <h1 align="center">您在EAM可以做什么?</h1>
              <br />
              在里面用您的账户创建项目，或者安装您想使用的EH项目，不久的将来，我们将在此添加云保存功能，也就是说，您在本地安装的EH项目，可以在别的电脑进行还原
              <br />
              <h1 align="center">您该怎样开发?</h1>
              <br />
              您可以发送邮件到{" "}
              <a href="mailto:bdbmzwsc-lee@foxmail.com">
                bdbmzwsc-lee@foxmail.com
              </a>
              或到我们的<a href="https://github.com/Bdbmzwsc/EAM">Github</a>仓库
              <br />
              Thank for reading
            </h3>
          </Card>
          <Card>
            <h1 align="center">The First News</h1>
            <h3>
              如你所见，第一篇News发布成功，但这的一切都是在js里进行更改，并且其优化做的不算很好
              <br />
            </h3>
            <h2 align="center">但是</h2>
            <h3>
              这是第一篇News的发布，即(2021/11/5
              20:53),我们也会在不久的将来做好此优化
              <br />
              其中未完善的功能导致的有：不便的发布News、界面的不好看、无法查看时间等等问题,同样，我们也会在不久的将来补全这些功能
            </h3>
            <h2>
              以上就是EH第一篇测试性News的发布，如果发现Bug，请在
              <a href="https://github.com/samzhangjy/ErHaStudio/issues">
                Github中报告issues
              </a>
              ,谢谢访问
            </h2>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
