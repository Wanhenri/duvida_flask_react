import styled from "styled-components";

const BtnSomar7dias = styled.button.attrs({
    type: "submit"

})`
    position: absolute;
    left: 0;
    top:50px;
    box-sizing:border-box;
    background-color:var(--color-zero);
    width:140px;
    height:40px;    
    border-radius: var(--radius-small);
    color:var(--color-first);
    font-weight:bold;
    font-size:var(--size-small);
    cursor: pointer;
    will-change:transform, width;
    transition: transform 100ms linear,
                box-shadow 100ms linear, 
                width 600ms cubic-bezier(.94, -0.64,0,1);
    box-shadow: 0px 0px 0px var(--color-base);
`;

export default BtnSomar7dias;