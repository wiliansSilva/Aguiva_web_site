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

  @media screen and (max-width: 1024px) {
    height: 40vh;
    background-color: #182451;

  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const YellowBar = styled.div`
  position: relative;
  width: 192px;
  height: 23px;
  top: -85px;
  left: 8px;
  background-color: #cab710;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 20px;
    top: -70px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
`;

export const Link = styled.a`
  width: 80px;
  padding: 1rem;
  background-color: #182451;
  color: #ffffff;
  border: 0.1px solid #1d1f29;
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  cursor: pointer;

  &:hover {
    /* background-color: #273a81; */
    background-color: #cab710;
    border-radius: 20px;
    transition: 0.5s;
  }
`;