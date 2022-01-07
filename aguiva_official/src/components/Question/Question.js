import React from 'react'
import { Background, Title, YellowBar, ContainerButton, LinkBtn } from './styles';
// import Systems from '../Systems';
// import VisualId from '../VisualId';

const Question = () => {
  return (
    <Background>
      <Title>
        VOCÊ POSSUI <br/> UMA MARCA <br/> FORTE?
      </Title>
      <YellowBar />
      <ContainerButton>   
        <LinkBtn to="systems" spy={true} smooth={true} offset={10} duration={500}> SIM </LinkBtn>
        <LinkBtn to="visualId" spy={true} smooth={true} offset={10} duration={500}> NÃO </LinkBtn>
      </ContainerButton>
    </Background>
  )
}

export default Question;