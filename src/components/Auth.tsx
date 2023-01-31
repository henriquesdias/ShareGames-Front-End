import styled from "styled-components";
import { useEffect, useState } from "react";

import { AuthContainer } from "../styles/Container-Auth";
import { IoCloseSharp } from "react-icons/io5";
import SignUp from "./Sign-up";
import SignIn from "./Sign-in";

type AuthProps = {
  setShowAuth: Function;
};

const Exit = styled(IoCloseSharp)`
  font-size: 30px;
`;
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
