import { IoPersonSharp, IoReorderThreeSharp } from "react-icons/io5";
import styled from "styled-components";

import { useState } from "react";

import { ContainerHeader } from "../styles/Container-Header";
import Auth from "./Auth";

const Menu = styled(IoReorderThreeSharp)`
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;
const IconAuth = styled(IoPersonSharp)`
  font-size: 28px;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    opacity: 60%;
  }
`;

export default function Header() {
  const [showAuth, setShowAuth] = useState<boolean>(false);
  return (
    <>
      {showAuth ? <Auth setShowAuth={setShowAuth} /> : <></>}
      <ContainerHeader>
        <nav>
          <Menu />
          <span>Título do projeto</span>
          <IconAuth onClick={() => setShowAuth(true)} />
        </nav>
      </ContainerHeader>
    </>
  );
}
