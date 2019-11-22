import styled from "styled-components";

export const Card = styled.section`
  max-width: 50%;
  flex-grow: 1;
  color: black;
  padding: 25px;
  max-width: min-content;
  background-color: #eaeaea;

  b {
    font-size: 1.5rem;
  }
`;

export const Container = styled.section`
  display: flex;
  padding-left: 12%;
  padding-top: 5%;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto auto;
  * {
    flex: 1 1 0;
  }
`;
