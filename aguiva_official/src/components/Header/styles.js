import styled from "styled-components";
import backgroundWave from '../../assets/images/wave.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${backgroundWave});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    height: 40vh;
  }
`;

export const Title = styled.h1`
  height: 80%;
  margin-left: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #ffffff;
  font-weight: bold;
  font-size: 3.7rem;

  @media screen and (max-width: 1024px) {
    margin-left: 5%;
    width: 100%;
    font-size: 3rem;
  }
`;