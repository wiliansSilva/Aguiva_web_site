import React from 'react';
import { Background, Container, Contato, Logo, Copyright } from './styles';

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

export default Footer;