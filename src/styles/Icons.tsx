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
  color: ${({ theme }) => theme.usedTheme.fontColor};
  &:hover {
    opacity: 60%;
  }
`;

export const IconComment = styled(IoChatbubbleEllipsesOutline)`
  color: ${({ theme }) => theme.usedTheme.fontColor};
  font-size: 28px;
  cursor: pointer;
  transition: opacity linear 0.2s;
  margin-top: 10px;
  &:hover {
    opacity: 60%;
  }
`;
