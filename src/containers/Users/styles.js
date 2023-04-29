import styled from "styled-components";
import Background from "../../assets/Background.svg";

export const Container = styled.div`
  min-height: calc(100vh-170px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: url("${Background}");
  background-size: cover;
`;
export const Image = styled.img`
  margin-top: 30px;
`;



export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  margin-top: 30px;

  color: #ffffff;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

