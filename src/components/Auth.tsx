import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthContainer } from "../styles/Container-Auth";
import { Exit } from "../styles/Icons";
import SignUp from "./Sign-Up";
import SignIn from "./Sign-In";

type AuthProps = {
  setShowAuth: Function;
};

const Background = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  animation: moviment 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes moviment {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 694px) {
    display: none;
  }
`;

export default function Auth({ setShowAuth }: AuthProps) {
  const [authOption, setAuthOption] = useState("sign-in");

  useEffect(() => {
    document.addEventListener("keydown", (target: KeyboardEvent) => {
      if (target.key === "Escape") {
        setShowAuth(false);
      }
    });
  }, []);

  return (
    <>
      <Background onClick={() => setShowAuth(false)} />
      <AuthContainer>
        <span>
          <Exit onClick={() => setShowAuth(false)} />
        </span>
        {authOption === "sign-in" ? (
          <SignIn setShowAuth={setShowAuth} />
        ) : (
          <SignUp setShowAuth={setShowAuth} />
        )}
        {authOption === "sign-in" ? (
          <p onClick={() => setAuthOption("sign-up")}>
            Don't have an account ? Sign up
          </p>
        ) : (
          <p onClick={() => setAuthOption("sign-in")}>
            Have an account ? Log in now
          </p>
        )}
      </AuthContainer>
    </>
  );
}
