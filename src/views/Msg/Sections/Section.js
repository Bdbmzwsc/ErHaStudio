import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
const useStylesForm = makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      width: "calc(50% - 5px)",
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

var times = 0;

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

export default function Section() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [qq, setQQ] = React.useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertVariant, setAlertVariant] = React.useState("error");
  const [alertContent, setAlertContent] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [filterText, setFilterText] = React.useState("较新的在前");

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQQChange = (event) => {
    setQQ(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const XMasterKey =
    "$2b$10$M.6LYRE9ZIZfR1Lak.8LgeaS6kb.cOodsVANdE8cCmsUTmRcd2N3O";
  const submit = () => {
    console.log(name, qq, content);
    if (
      name.replace(" ", "") === "" ||
      qq.replace(" ", "") === "" ||
      content.replace(" ", "") === ""
    ) {
      setAlertVariant("error");
      setAlertContent("错误：请填写所有字段。");
      setAlertOpen(true);
      return;
    }
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        var curJson = JSON.parse(req.responseText).record;
        console.log(curJson.comments);
        var curDate = new Date();
        curJson.comments.push({
          name,
          qq,
          content,
          pub_time: curDate.format("yyyy-MM-dd hh:mm:ss"),
        });
        let req2 = new XMLHttpRequest();

        req2.onreadystatechange = () => {
          if (req2.readyState == XMLHttpRequest.DONE) {
            setAlertVariant("success");
            setAlertContent("留言发送成功！");
            setAlertOpen(true);
            if (filterText == "较新的在前")
              setComments(curJson.comments.reverse());
            else setComments(curJson.comments);
            return;
          }
        };

        req2.open(
          "PUT",
          "https://api.jsonbin.io/v3/b/6110dd3fe1b0604017a9a59e",
          true
        );
        req2.setRequestHeader("Content-Type", "application/json");
        req2.setRequestHeader("X-Master-Key", XMasterKey);
        console.log("123", curJson);
        req2.send(JSON.stringify(curJson));
      }
    };

    req.open(
      "GET",
      "https://api.jsonbin.io/v3/b/6110dd3fe1b0604017a9a59e/latest",
      true
    );
    req.setRequestHeader("X-Master-Key", XMasterKey);
    req.send();
    return;
  };
  const req = new XMLHttpRequest();
  if (times <= 1) {
    req.open(
      "GET",
      "https://api.jsonbin.io/v3/b/6110dd3fe1b0604017a9a59e/latest",
      true
    );
    req.setRequestHeader("X-Master-Key", XMasterKey);
    req.send();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        var curJson = JSON.parse(req.responseText).record;
        setComments(curJson.comments.reverse());
        return;
      }
    };
    times++;
  }

  const classesForm = useStylesForm();
  const Comments = () => {
    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index} style={{ margin: "10px" }}>
              <Grid container>
                <Grid item xs={3}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Avatar
                        src={`http://q2.qlogo.cn/headimg_dl?dst_uin=${comment.qq}&spec=100`}
                        alt={name}
                      >
                        {name}
                      </Avatar>
                    </Grid>
                    <Grid item xs={8}>
                      <h5>{comment.name}</h5>
                    </Grid>
                  </Grid>
                </Grid>
                <h5 item xs={9}>
                  <small>{comment.pub_time}</small>
                </h5>
              </Grid>
              <p style={{ marginLeft: "60px", marginRight: "60px" }}>
                {comment.content}
              </p>
              <br />
            </div>
          );
        })}
      </div>
    );
  };
  const changeFilter = () => {
    setComments(comments.reverse());
    if (filterText == "较新的在前") setFilterText("较新的在后");
    else setFilterText("较新的在前");
  };
  return (
    <div className={classes.section}>
      <Snackbar
        open={alertOpen}
        autoHideDuration={5000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleAlertClose} severity={alertVariant}>
          {alertContent}
        </Alert>
      </Snackbar>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>留言板</h2>
          <form className={classesForm.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="name"
                label="名称"
                value={name}
                onChange={handleNameChange}
                variant="outlined"
                style={{ marginRight: "5px" }}
                autoComplete={false}
              />
              <TextField
                id="qq"
                label="QQ号"
                value={qq}
                onChange={handleQQChange}
                variant="outlined"
              />
            </div>
            <br />
            <div>
              <TextField
                id="content"
                label="留言内容"
                value={content}
                onChange={handleContentChange}
                multiline
                style={{ width: "100%" }}
                variant="outlined"
              />
            </div>
            <br />
            <Button
              color="primary"
              onClick={() => {
                submit();
              }}
            >
              提交留言
            </Button>
          </form>
          <Divider />
          <br />
          <MaterialButton
            variant="outlined"
            color="primary"
            startIcon={<FilterListIcon />}
            onClick={() => {
              changeFilter();
            }}
          >
            {filterText}
          </MaterialButton>
          <Typography>
            <Comments />
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
}
