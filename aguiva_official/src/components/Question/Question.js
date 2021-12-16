import React from 'react'
import { Background, Title, YellowBar, ContainerButton, Link } from './styles';
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
        <Link href="#systems"> SIM </Link>
        <Link href="#visualId"> NÃO </Link>
      </ContainerButton>
    </Background>
  )
}


export default Question;