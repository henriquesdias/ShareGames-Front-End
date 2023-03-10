import styled from "styled-components";

export const CreatePostContainer = styled.form`
  width: 450px;
  height: 50px;
  margin-bottom: 40px;
  display: flex;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  input {
    height: 100%;
    outline: none;
    border: none;
    width: 80%;
    border-radius: 10px 0 0 10px;
    color: ${({ theme }) => theme.usedTheme.fontColor};
    background-color: ${({ theme }) => theme.usedTheme.backgroundPrincipal};
    ::placeholder {
      color: ${({ theme }) => theme.usedTheme.fontColor};
    }
  }

  button {
    width: 20%;
    border: none;
    border-radius: 0 10px 10px 0;
  }
  @media (max-width: 694px) {
    width: 100%;
  }
`;
