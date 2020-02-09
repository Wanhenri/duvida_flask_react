import React from "react";

import { Header, Title, Strong, Subtitle, Logo, TextWrapper } from "./styles";

import { withRouter } from "react-router";

const HeaderMenu = props => {
  return (
    <Header route={props.location.pathname}>
      <Logo route={props.location.pathname} />
      <TextWrapper>
        <Title route={props.location.pathname}>
          Minha <Strong>Semana</Strong>
        </Title>
        <Subtitle>
          Previsões meteorológicas de acordo com a sua localidade
        </Subtitle>
      </TextWrapper>
    </Header>
  );
};

export default withRouter(HeaderMenu);
