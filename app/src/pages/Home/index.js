import React from "react";

import { Wrapper, Section } from "./styles";

import FetSomar from "./../../components/FetSomar";

import FormLead from "../../components/FormLead";
import FetInpe from "../../components/FetInpe";

const Home = () => (
  <Wrapper>
    <Section>
      <FormLead />
      <FetSomar />
      <FetInpe />
    </Section>
  </Wrapper>
);

export default Home;

// <EchartGraph />
// <EchartGraphPie />
