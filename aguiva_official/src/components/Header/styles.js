import styled from "styled-components";
import backgroundWave from '../../assets/images/background-wave.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 94vh;
  background-image: url(${backgroundWave});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
`;

export const Margin = styled.div`
  max-width: 1300px;
  width: 100%;
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

  @media screen and (max-width: 790px) {
    margin: 0 5%;
    font-size: 3.1rem;
  }
`;