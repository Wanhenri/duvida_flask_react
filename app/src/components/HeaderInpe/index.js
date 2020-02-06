import React from "react";

import { Header } from "./styles";

import LogoAvatarInpe from "../../objects/LogoAvatarInpe";
import TitleInpe from "../../components/TitleInpe";

import SubtitleSomar from "../../objects/SubtitleSomar";



const HeaderInpe = () => (
  <Header>
    <LogoAvatarInpe />
    <TitleInpe>Minha Semana</TitleInpe>
    <SubtitleSomar>
      Previsões meteorológicas de acordo com a sua localidade
    </SubtitleSomar>
  </Header>
);

export default HeaderInpe;
