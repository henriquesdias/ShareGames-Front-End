import { useState } from "react";

import { ContainerHeader } from "../styles/Container-Header";
import Auth from "./Auth";
import { IconAuth } from "../styles/Icons";
import useToken from "../hooks/useToken";
import Profile from "./Profile";
import Menu from "./Menu";

export default function Header() {
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const { token } = useToken();
  return (
    <>
      {showAuth ? <Auth setShowAuth={setShowAuth} /> : <></>}
      <ContainerHeader>
        <nav>
          <Menu />
          <span>Título do projeto</span>
          <div>
            {token ? (
              <Profile />
            ) : (
              <IconAuth onClick={() => setShowAuth(true)} />
            )}
          </div>
        </nav>
      </ContainerHeader>
    </>
  );
}
