import styled from "styled-components";

export const CreateCommentContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  input {
    outline: none;
    border: none;
    border-radius: 10px 0 0 10px;
    width: 80%;
    background-color: ${({ theme }) => theme.usedTheme.backgroundPrincipal};
    color: ${({ theme }) => theme.usedTheme.fontColor};
    padding-left: 10px;
    ::placeholder {
      color: ${({ theme }) => theme.usedTheme.fontColor};
      padding-left: 7px;
    }
  }
  button {
    border: none;
  }
`;
