import styled from "styled-components";
import BackgroundBlue from '../../assets/images/Background-sistemas.svg';


export const Background = styled.div`
  width: 100%;
  height: 150vh;
  background-image: url(${BackgroundBlue});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: start;
    margin: 15% 5% 5%;
  }
`;

export const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
  }
`;