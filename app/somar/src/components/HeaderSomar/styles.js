import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";


export const Header = styled.header`
    background-color: var(--color-header);
    box-sizing:border-box;
    
    
    width: 100vw;    
    height: 120px;
    position: absolute;    
    top:0;
    left:0;
    display:flex;
    align-items: left;
    justify-content:left;
    &> ${LogoAvatar}{
     position: absolute;
     top:15px;        
    }
`;
