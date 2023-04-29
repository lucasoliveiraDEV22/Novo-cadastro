import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8);'}; 
  border-radius: 14px;
  border: ${props => props.isBack ? '1px solid #FFFFFF;' : 'none'};
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
  margin-top: 140px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
  
  img{
    transform: ${props => props.isBack && 'rotateY(180deg)'};
  }
`;
