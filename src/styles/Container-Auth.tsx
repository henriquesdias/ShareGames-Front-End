import styled from "styled-components";

export const AuthContainer = styled.div`
  background-color: #f1f2f2;
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  animation: auth 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes auth {
    from {
      right: -5000px;
    }
    to {
      right: 0;
    }
  }
  span {
    width: 80%;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 70%;
    input {
      height: 40px;
      margin-bottom: 20px;
      outline: none;
    }
    button {
      height: 40px;
      outline: none;
      border: 1px solid black;
      border-radius: 10px;
    }
  }
  p {
    margin-top: 20px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 694px) {
    width: 100%;
  }
`;
