import styled from "styled-components";

import {
  IoCloseSharp,
  IoPaperPlaneOutline,
  IoReorderThreeSharp,
  IoPersonSharp,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

export const Exit = styled(IoCloseSharp)`
  font-size: 30px;
`;

export const SendButton = styled(IoPaperPlaneOutline)`
  font-size: 28px;
`;
export const MenuPrincipal = styled(IoReorderThreeSharp)`
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;
export const IconAuth = styled(IoPersonSharp)`
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "black")};
  &:hover {
    opacity: 60%;
  }
`;

export const IconComment = styled(IoChatbubbleEllipsesOutline)`
  color: ${(props) => (!props.theme.isDarkMode ? "#1e1e1e" : "#f7f7f7")};
  font-size: 28px;
  cursor: pointer;
  transition: opacity linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;
