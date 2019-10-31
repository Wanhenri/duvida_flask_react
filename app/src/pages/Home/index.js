import React from "react";

import { Wrapper, Section } from "./styles";

import HeaderSomar from "../../components/HeaderSomar";
import FetSomar from "./../../components/FetSomar";

import HeaderDays from "./../../components/HeaderDay"

// import FormLead from '../../components/FormLead';

const Home = () => (
  <Wrapper>
    <HeaderSomar />
    <Section>
      <HeaderDays />
    </Section>
  </Wrapper>
);

export default Home;
