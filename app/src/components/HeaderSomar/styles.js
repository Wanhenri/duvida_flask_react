import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";

export const Header = styled.nav`
  background-color: var(--color-header);
  box-sizing: border-box;
  width: 100vw;
  height: 120px;
  position: sticky;
  display: flex;
  align-items: left;
  justify-content: left;
  & > ${LogoAvatar} {
    position: absolute;
    top: 15px;
  }
`;
