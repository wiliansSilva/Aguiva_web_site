import React from 'react'
import styled from "styled-components";


import logoImg from '../../assets/images/aguiva_tipography.svg';
import backgroundWave from '../../assets/images/wave.svg';

function Header() {
  return (
    <div>
      <NavBar>
        <img src={logoImg} alt="Aguiva" width="150px" />
      
        {/* <Burger>
          <h1>Burger</h1>
        </Burger> */}
      </NavBar>
      <Wrapper>
        <Title>MERGULHE NO SEU <br/> NEGÓCIO, FAÇA-O <br /> CRESCER.</Title>
      </Wrapper>
    </div>
  )
}


const NavBar = styled.nav`
  padding: 1.2rem 0 0.4rem 1.2rem;
  background-color: #010f40;

  /* display: flex; */
  /* justify-content: space-around; */
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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