import React from "react";

import { Wrapper, Section } from "./styles";

import FetSomar from "./../../components/FetSomar";

import FormLead from "../../components/FormLead";
import FetInpe from "../../components/FetInpe";

import HeaderSomar from "../../components/HeaderSomar";

const Home = () => (
  
  <Wrapper>
    <Section>
      <HeaderSomar />
    </Section>
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
