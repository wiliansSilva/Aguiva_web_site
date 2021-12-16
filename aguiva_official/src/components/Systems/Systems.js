import React from 'react';
import LearnMore from '../LearnMore/LearnMore';
import { Section, Title, Container } from './styles';

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

const Systems = () => {
  return (
    <Section id="systems">
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
    </Section>
  )
};


export default Systems;