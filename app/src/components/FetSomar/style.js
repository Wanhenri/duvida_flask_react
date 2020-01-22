import styled from "styled-components";

export const Cards = styled.section`
  display: table;
  table-layout: fixed;
  max-width: 50%;
  flex-grow: 1;
  color: black;

  padding: 25px;
  background-color: ${props => props.BackgroundColor};

  b {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Container = styled.section`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  * {
    flex: 1;
  }
`;

// #eaeaea
// não funciona ainda
export const ColoredLine = styled.hr`
    color: ${props => props.color},
    background-color: ${props => props.color},
    height: 2px,
    width: 100px
`;

export const Section = styled.section`
  margin: auto auto;
  display: flex;
  padding-top: 40px;
`;
