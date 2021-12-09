import React from 'react'
import styled from "styled-components";
// import NavBar from '../NavBar/NavBar';

import backgroundWave from '../../assets/images/wave.svg';

function Header() {
  return (
    <div>
      <Wrapper>
        <Title>MERGULHE NO SEU <br/> NEGÓCIO, FAÇA-O <br /> CRESCER.</Title>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${backgroundWave});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  margin-top: 180px;
  margin-left: 140px;
  
  color: #ffffff;
  font-weight: bold;
  font-size: 60px;
`;

export default Header;