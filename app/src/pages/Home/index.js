import React from "react";

import { Wrapper, Section } from "./styles";

import FetSomar from "./../../components/FetSomar";

import FetInpe from "../../components/FetInpe";

const Home = () => (
  <Wrapper>
    <Section>
      <FetSomar />
      <FetInpe />
    </Section>
  </Wrapper>
);

export default Home;

// <EchartGraph />
// <EchartGraphPie />
