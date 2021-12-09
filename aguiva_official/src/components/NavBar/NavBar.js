import React from 'react'
import styled from 'styled-components';

import logoImg from '../../assets/images/aguiva_tipography.svg';

function NavBar() {
  return (
    <Wrapper>
      {/* <Logo /> */}
      <img src={logoImg} alt="Aguiva" width="150px" />
     
      {/* <Burger>
        <h1>Burger</h1>
      </Burger> */}
    </Wrapper>
    
  )
};


const Wrapper = styled.nav`
  height: 5vh;
  background-color: #010f40;
  padding: 0.5rem 0 0.6rem 1.2rem;


  /* display: flex;
  justify-content: space-around; */
`;

// const Logo = styled.div`
//   background-image: url(${logoImg});
//   background-size: cover;
//   width: 130px;
//   padding: 1.2rem 0 0 1.2rem;

// `;

// const Burger = styled.div`
//   display: none;
//   cursor: pointer;
// `;

export default NavBar;