import React from 'react';
import styled from 'styled-components';
import LearnMore from '../LearnMore/LearnMore';
import BackgroundBlue from '../../assets/images/Background-sistemas.svg';

const data = [
  {
    side: "left",
    title: "SITE",
    description: "Nomear um produto ou uma empresa não é somente escolher um nome. É preciso escolher um nome de forma estratégica para se conectar com seu público e também, que esteja disponível para registro no INPI.",
    link: "#"
  },
  {
    side: "right",
    title: "APLICATIVOS",
    description: "Uma boa marca possui uma logo que seja fácil de ser reconhecida e de ser aplicada. Porém, não é somente a logo que identifica uma empresa para o cliente. Ter uma identidade visual estratégica faz toda a diferença para se posicionar corretamente no mercado e conviver com concorrentes.",
    link: "#"
  },
  {
    side: "left",
    title: "SISTEMA",
    description: "Só estar nas redes sociais não é o suficiente. Esta é a verdade. É preciso produzir conteúdo de relevância e que se comunique com o público consumidor. É preciso ter estratégia para saber o que e como fazer.",
    link: "#"
  }
];

function Systems() {
  return (
    <Background>
      <Title>Agora está na hora de colocar a sua empresa nos mares digitais</Title>
      <Container>
        {
          data.map(item =>
            <LearnMore 
              color="#fff"
              side={item.side}
              title={item.title}
              description={item.description}
              link={item.link}
            />  
          )
        }
      </Container>
    </Background>
  )
};

const Background = styled.div`
  width: 100%;
  height: 150vh;
  background-image: url(${BackgroundBlue});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
`;

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default Systems;