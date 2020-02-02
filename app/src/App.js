import React, { Fragment } from "react";

import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset";
import Base from "./styles/base";

import Size from "./styles/settings/size";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Router from "./router";

import HeaderSomar from "./components/HeaderSomar";

const App = () => (
  <Fragment>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <HeaderSomar />
    <Router />
  </Fragment>
);

export default App;
