import React from "react";

import { Header } from "./styles";

import LogoAvatar from "../../objects/LogoAvatar";
import TitleSomar from "../../components/TitleSomar";

import SubtitleSomar from "../../objects/SubtitleSomar";

import TimeSummary from "../../objects/TimeSummary";

const HeaderSomar = () => (
  <Header>
    <LogoAvatar />
    <TitleSomar>Minha Semana</TitleSomar>
    <SubtitleSomar>
      Previsões meteorológicas de acordo com a sua localidade
    </SubtitleSomar>
  </Header>
);

export default HeaderSomar;
