import React, { Fragment } from "react";

import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset";
import Base from "./styles/base";

import Home from "./pages/Home";
import Size from "./styles/settings/size";

import "@fortawesome/fontawesome-svg-core/styles.css";

// import ReactEcharts from "echarts-for-react";
// import EchartGraphPie from "./components/EchartPie"

const App = () => (
  <Fragment>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <Home />
  </Fragment>
);

export default App;
