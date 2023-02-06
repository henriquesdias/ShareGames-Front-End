import { MenuPrincipal } from "../styles/Icons";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";
import themes from "../styles/themes";

const MenuContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.usedTheme.fontColor};
  > ul {
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.usedTheme.backgroundPrincipal};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    top: 30px;
    left: -30px;
    color: ${({ theme }) => theme.usedTheme.fontColor};
  }
  &:hover > ul {
    display: block;
  }
  li {
    height: 100%;
    cursor: pointer;
  }
`;

export default function Menu() {
  const { usedTheme, setUsedTheme } = useContext(ThemeContext);

  return (
    <MenuContainer>
      <MenuPrincipal />
      <ul>
        <li
          onClick={() =>
            setUsedTheme(
              usedTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          DarkMode
        </li>
      </ul>
    </MenuContainer>
  );
}
