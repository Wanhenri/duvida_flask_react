import React from "react";

import { Wrapper, Section } from "./styles";

import HeaderSomar from "../../components/HeaderSomar";
import FetSomar from "./../../components/FetSomar";

// import FormLead from '../../components/FormLead';

const Home = () => (
  <Wrapper>
    <HeaderSomar />
    <Section>
      <FetSomar />
    </Section>
  </Wrapper>
);

export default Home;
