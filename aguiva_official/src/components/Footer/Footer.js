import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/images/aguiva.svg';


const Footer = () => {
  return (
    <Background>
      <Container>
        <Contato>contato@aguiva.com.br</Contato>
        <Logo />
        <Copyright>copyright @ 2021. Aguiva Todos os direitos reservados.</Copyright>
      </Container>
    </Background>
  )
};

const Background = styled.footer`
  height: 10vh;
  background-color: #2f2f2f;

  @media screen and (max-width: 1024px) {
    height: 17vh;
  }
`;

const Container = styled.div`
  height: 50%;
  background-color: #182451;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 1vh;
  }
`;

const Contato = styled.span`
  color: #fff;
  margin-left: 8%;
  font-size: .8rem;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    font-size: 1.6rem;
  }
`;

const Logo = styled.div`
  background-image: url(${LogoImg});
  width: 115px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1024px) {
    width: 150px;
    margin: 5px 0;
  }
`;

const Copyright = styled.span`
  color: #fff;
  margin-right: 2%;
  font-size: .8rem;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    font-size: 1.5rem;
    width: 55%;
    text-align: center;

  }
`;

export default Footer;