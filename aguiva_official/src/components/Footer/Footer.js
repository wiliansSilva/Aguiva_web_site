import React from 'react';
import { Background, Contato, Logo, Copyright } from './styles';

const Footer = () => {
  return (
    <Background>
      <Contato>contato@aguiva.com.br</Contato>
      <Logo />
      <Copyright>copyright @ 2021. Aguiva Todos os direitos reservados.</Copyright>
    </Background>
  )
};

export default Footer;