import styled from "styled-components";

const logoSomar = require("../../img/logo-institucional.png");
const logoInpe = require("../../img/inpe_logo.png");

const routeStyle = {
  "/": {
    color: "var(--color-fourth)",
    background: "var(--color-header)",
    logo: logoSomar
  },
  "/ftp": {
    color: "var(--color-seventh)",
    background: "var(--color-sixth)",
    logo: logoInpe
  }
};

export const Title = styled.h1`
  display: inline-flex;
  color: ${props => routeStyle[props.route].color};
  height: fit-content;
  font-size: var(--size-very-big);
  text-align: center;
  margin: auto;
  line-height: 1.1em;
`;

export const Subtitle = styled.h2`
  color: var(--color-zero);
  font-size: var(--size-medium);
  margin-bottom: var(--spacing-big);
  margin-top: var(--spacing-small);
  text-align: center;
  white-space: nowrap;
`;

export const Strong = styled.strong`
  color: var(--color-zero);
  font-size: 1.5em;
`;

export const Logo = styled.img.attrs(props => {
  return { src: routeStyle[props.route].logo };
})`
  float: left;
  position: absolute;
  margin: 15px 20px;
  width: auto;
  height: 90px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.nav`
  background-color: ${props => routeStyle[props.route].background};
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  height: 120px;
  position: sticky;
  top: 0;
  display: flex;
  text-align: center;
  z-index: 1001;
`;
