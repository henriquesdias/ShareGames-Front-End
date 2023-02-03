import { useState } from "react";

import { ContainerHeader } from "../styles/Container-Header";
import Auth from "./Auth";
import { Menu, IconAuth } from "../styles/Icons";

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
