import styled from "styled-components";
import backgroundWave from '../../assets/images/wave.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${backgroundWave});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  margin-top: 180px;
  margin-left: 140px;
  
  color: #ffffff;
  font-weight: bold;
  font-size: 60px;
`;