import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import DownloadTutorial from "views/Download/Tutorial/Tutorial.js";
import DownloadProject from "views/Download/Project/Project.js";
import Msg from "views/Msg/Msg.js";
import Login from "views/"
import ScrollToTop from "views/ScrollToTop";
import "@fontsource/roboto";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ScrollToTop />
    <Switch>
      <Route path="/download/tutorial" component={DownloadTutorial} />
      <Route path="/download/project" component={DownloadProject} />
      <Route path="/msg" component={Msg} />
      <Route path="/" component={LandingPage} />
       <Route path="/msg" component={Msg} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

export default hist;
