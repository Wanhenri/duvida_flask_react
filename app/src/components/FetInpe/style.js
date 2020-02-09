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
  hr {
    border-color: red;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  max-width: 90%;
  margin: auto;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  * {
    flex: 1 1 0;
  }
`;
