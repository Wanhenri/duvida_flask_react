import styled from "styled-components";

export const Cards= styled.section`
  display: table;
  table-layout: fixed;
  max-width: 50%;
  flex-grow: 1;
  color: black;

  padding: 25px;
  background-color: #eaeaea;

  b {
    font-size: 1.5rem;
  }
`;

export const Container = styled.section`
  display: flex;
  padding-left:20%;
  padding-top:5%;
  align-content: space-between;
  flex-direction: column;
  * {
    flex: 1;
  }
`;
