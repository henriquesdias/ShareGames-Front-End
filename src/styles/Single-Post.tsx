import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  min-height: 200px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #cccccc;
  margin-bottom: 30px;
  span {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    p {
      font-weight: bold;
    }
  }
  > p {
    min-height: 120px;
    border-bottom: 1px solid #cccccc;
  }
`;
