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
export const Menu = styled(IoReorderThreeSharp)`
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
  &:hover {
    opacity: 60%;
  }
`;

export const IconComment = styled(IoChatbubbleEllipsesOutline)`
  color: black;
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;
