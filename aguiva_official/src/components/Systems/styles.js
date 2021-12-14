import styled from "styled-components";
import BackgroundBlue from '../../assets/images/Background-sistemas.svg';


export const Background = styled.div`
  width: 100%;
  height: 150vh;
  background-image: url(${BackgroundBlue});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
`;

export const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;