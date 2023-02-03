import styled from "styled-components";
// #f1f2f2
export const ContainerFeed = styled.div`
  background-color: ${(props) =>
    props.theme.isDarkMode ? "#222222" : "#f1f2f2"};
  min-height: 100vh;
  padding-top: 80px;
  > div {
    max-width: 1100px;
    width: 70%;
    margin: 0 auto;
  }
`;
