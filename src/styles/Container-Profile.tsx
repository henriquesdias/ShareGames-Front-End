import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
  img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
  > div {
    display: none;
    position: absolute;
    color: ${({ theme }) => theme.usedTheme.fontColor};
    background-color: ${({ theme }) => theme.usedTheme.backgroundPrincipal};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    top: 30px;
    right: 0;
    cursor: pointer;
  }
  &:hover > div {
    display: block;
  }
`;
