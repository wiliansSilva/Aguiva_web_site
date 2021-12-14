import styled from "styled-components";

export const Background = styled.div`
  height: 70vh;
  background-color: #010f40;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  z-index: 10;

`;

export const YellowBar = styled.div`
  position: relative;
  width: 192px;
  height: 23px;
  top: -85px;
  left: 8px;
  background-color: #cab710;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: #182451;
  color: #ffffff;
  border: 0.5px solid #000;
  font-size: 2rem;
  font-weight: bold;

  width: 100px;
  padding-top: 0.3rem;
  cursor: pointer;
`;