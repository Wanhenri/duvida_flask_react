import React from "react";

import { Wrapper, Section } from "./styles";

import HeaderSomar from "../../components/HeaderSomar";
import FetSomar from "./../../components/FetSomar";
import EchartGraph from "../../components/EchartLine"

// import HeaderDays from "./../../components/HeaderDay"

// import FormLead from '../../components/FormLead';

const Home = () => (
  <Wrapper>
    <HeaderSomar />
    <Section>
      <FetSomar />
      <EchartGraph />
    </Section>
  </Wrapper>
);

export default Home;
