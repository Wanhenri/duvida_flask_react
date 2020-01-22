import styled from "styled-components";

const BtnSomarCidade = styled.button.attrs({
  type: "submit"
})`
  position: absolute;
  left: 200px;
  top: 0;
  box-sizing: border-box;
  background-color: var(--color-fourth);
  width: 140px;
  height: 38px;
  border-radius: var(--radius-small);
  color: var(--color-zero);
  font-weight: bold;
  font-size: var(--size-small);
  cursor: pointer;
  will-change: transform, width;
  transition: transform 100ms linear, box-shadow 100ms linear,
    width 600ms cubic-bezier(0.94, -0.64, 0, 1);
  box-shadow: 0px 0px 0px var(--color-base);
`;

export default BtnSomarCidade;
