import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";

export const Header = styled.nav`
  background-color: var(--color-sixth);
  box-sizing: border-box;
  width: 100vw;
  height: 120px;
  position: sticky;
  top: 0;
  display: flex;
  & > ${LogoAvatar} {
    position: absolute;
    top: 15px;
  }
`;
