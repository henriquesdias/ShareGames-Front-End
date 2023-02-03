import { MenuPrincipal } from "../styles/Icons";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

const MenuContainer = styled.div`
  position: relative;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "black")};
  > ul {
    display: none;
    position: absolute;
    background-color: ${({ theme }) =>
      !theme.isDarkMode ? "#ffffff" : "black"};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    top: 30px;
    left: -30px;
    color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "black")};
    cursor: pointer;
  }
  &:hover > ul {
    display: block;
  }
`;

export default function Menu() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <MenuContainer>
      <MenuPrincipal />
      <ul>
        <li onClick={() => setIsDarkMode(!isDarkMode)}>DarkMode</li>
      </ul>
    </MenuContainer>
  );
}
