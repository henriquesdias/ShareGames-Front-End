import styled from "styled-components";

export const CreatePostContainer = styled.form`
  width: 450px;
  height: 50px;
  background-color: white;
  margin-top: 80px;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  input {
    height: 100%;
    outline: none;
    border: none;
    width: 80%;
    border-radius: 10px;
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
