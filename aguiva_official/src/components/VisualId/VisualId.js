import React from 'react'
import styled from 'styled-components';
import LearnMore from '../LearnMore/LearnMore';

import BackgroundJellyfish from '../../assets/images/Background-Design.svg';
import JellyfishGray from '../../assets/images/aguaviva-design.svg';

function VisualId() {
  return (
    <Background>
      <Main>
        <Paragraph>
          Queremos te apresentar alguns dos nossos serviços 
          que podem te auxiliar no fortalecimento ou criação
          da suas marca.
        </Paragraph>
        <JellyfishImg />
      </Main>
      <Container>
        <LearnMore 
          color="#1e304e"
          title="Identidade Visual"
          description="Uma boa marca possui uma logo que seja fácil de ser reconhecida 
          e de ser aplicada. porém, não é somente a logo que identifica uma 
          empresa para o cliente. Ter uma identidade visual estratégica faz 
          toda a diferença para se posicionar corretamente no mercado e conviver com concorrentes."
        />
        <Partners />
      </Container>
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundJellyfish});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;

`;

const Main = styled.main`
  height: 50vh;
  display: flex;
  /* /* flex-direction: column; */
  flex: 1;
  align-items: center;
  justify-content: center;

`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1e304e;

  padding-left: 4rem;
`; 

const JellyfishImg = styled.div`
  width: 210px;
  height: 210px;
  position: relative;
  right: 0px;

  background-image: url(${JellyfishGray});
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Partners = styled.div`

`;

export default VisualId;