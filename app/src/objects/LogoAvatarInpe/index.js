import styled from "styled-components";

import avatarInpe from "../../img/inpe_logo.png";

const LogoAvatarInpe = styled.img.attrs({
    src: avatarInpe
})`
    width:150px;
    height: 120px;
    padding-left:13px;
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center
`;

export default LogoAvatarInpe;