import styled from "styled-components";
import { useEffect } from "react";

import { AuthContainer } from "../styles/Container-Auth";
import { IoCloseSharp } from "react-icons/io5";
import SignUp from "./Sign-up";

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
        <SignUp setShowAuth={setShowAuth} />
      </AuthContainer>
    </>
  );
}
