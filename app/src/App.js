
import React, { Fragment } from "react";


import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset"
import Base from "./styles/base";

import Home from "./pages/Home";
import Size from "./styles/settings/size";

import FetSomar from "./components/FetSomar";

const App = () => (
    <Fragment>
        <Colors />
        <Size />
        <Spacing />
        <Reset />
        <Base />
        
        <Home />
        <FetSomar />
        

    </Fragment>
);

export default App;
