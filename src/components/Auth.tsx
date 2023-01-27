import styled from "styled-components";

import { AuthContainer } from "../styles/Container-Auth";
import { IoCloseSharp } from "react-icons/io5";

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
  return (
    <>
      <Background onClick={() => setShowAuth(false)} />
      <AuthContainer>
        <span>
          <Exit onClick={() => setShowAuth(false)} />
        </span>
        <form action="">
          <input type="email" />
          <input type="text" />
          <button>Cadastro</button>
        </form>
      </AuthContainer>
    </>
  );
}
