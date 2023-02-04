import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${({ theme }) => theme.usedTheme.backgroundSecundary};
  height: 50px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 4%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  > nav {
    height: 100%;
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    span {
      color: ${({ theme }) => theme.usedTheme.fontColor};
    }
  }
`;
