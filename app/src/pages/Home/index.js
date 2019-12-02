import React from "react";

import { Wrapper, Section } from "./styles";

import HeaderSomar from "../../components/HeaderSomar";
import FetSomar from "./../../components/FetSomar";

// import HeaderDays from "./../../components/HeaderDay"

import FormLead from "../../components/FormLead";
import FetInpe from "../../components/FetInpe";

const Home = () => (
  <Wrapper>
    <HeaderSomar />
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
