import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.usedTheme.backgroundSecundary};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.usedTheme.fontColor};
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
    word-break: break-word;
    border-bottom: 1px solid #cccccc;
  }
  @media (max-width: 694px) {
    width: 100%;
  }
`;
