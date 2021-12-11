import React from 'react'
import styled from 'styled-components';
import LearnMore from '../LearnMore/LearnMore';

import BackgroundJellyfish from '../../assets/images/Background-Design.svg';
import JellyfishGray from '../../assets/images/aguaviva-design.svg';
import ChicagoLogo from '../../assets/images/Chicago-logo.svg';
import CaldeiraLogo from '../../assets/images/Caldeira-logo.svg';
import MutuaLogo from '../../assets/images/Mutua-logo.svg';
import SkemLogo from '../../assets/images/Skem-logo.svg';
import WilliamLogo from '../../assets/images/William-logo.svg';
import RaquelLogo from '../../assets/images/Raquel-logo.svg';

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
          link="#"
        />
        <Partners>
          <img src={ChicagoLogo} alt='Chicago' />
          <img src={CaldeiraLogo} alt='Gilberto Caldeira Advogado' />
          <img src={MutuaLogo} alt='Mutua' />
          <img src={SkemLogo} alt='Skem' />
          <img src={WilliamLogo} alt='William Viegas' />
          <img src={RaquelLogo} alt='Raquel Krause' />
        </Partners>
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
  filter: contrast(100%)
`;

const Main = styled.main`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Paragraph = styled.p`
  width: 60vw;
  margin-left: 150px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e304e;
  
`; 

const JellyfishImg = styled.div`
  flex: 1;
  height: 95%;
  margin-right: 95px;

  background-image: url(${JellyfishGray});
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Partners = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;

  margin-left: 150px;
  margin-top: 30px;
  
`;



export default VisualId;