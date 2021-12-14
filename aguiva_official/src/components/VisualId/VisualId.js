import React from 'react'
import LearnMore from '../LearnMore/LearnMore';
import { Background, Main, Paragraph, JellyfishImg, Container, Partners } from './styles';

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


export default VisualId;