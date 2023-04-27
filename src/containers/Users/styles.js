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

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(22.5px);
  border-radius: 61px 61px 0px 0px;
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  padding: 50px 36px;
  border-radius: 61px 61px 0px 0px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 80px;

  color: #ffffff;
`;


export const Button = styled.button`
   background: transparent;
  margin-top: 140px;
  border: 1px solid #FFFFFF;

  border-radius: 14px;
  width: 342px;
  height: 74px;
  left: 35px;
  top: 497px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #ffffff;
  cursor: pointer;

  img{
    transform: rotateY(180deg);
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
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

