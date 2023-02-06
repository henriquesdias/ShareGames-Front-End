import styled from "styled-components";

export const ContainerFeed = styled.div`
  background-color: ${({ theme }) => theme.usedTheme.backgroundPrincipal};
  min-height: 100vh;
  padding-top: 80px;
  > div {
    max-width: 1100px;
    width: 70%;
    margin: 0 auto;
  }
`;
