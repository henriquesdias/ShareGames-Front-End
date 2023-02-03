import { useState } from "react";

import { ContainerHeader } from "../styles/Container-Header";
import Auth from "./Auth";
import { Menu, IconAuth } from "../styles/Icons";
import picture from "../assets/default-profile.jpg";
import useToken from "../hooks/useToken";
import styled from "styled-components";

const ProfileContainer = styled.div`
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
    background-color: #f9f9f9;
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

function Profile() {
  const { setToken } = useToken();
  return (
    <ProfileContainer>
      <img src={picture} alt="profile picture" />
      <div
        onClick={() => {
          localStorage.removeItem("token");
          setToken("");
        }}
      >
        Sign out
      </div>
    </ProfileContainer>
  );
}

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
