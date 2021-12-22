import React from 'react'
import LearnMore from '../LearnMore/LearnMore';
import { Section, Margin, Main, Title, JellyfishImg, Container, TitleLearnMore, Partners } from './styles';

import JellyfishGray from '../../assets/images/aguaviva.svg';
import ChicagoLogo from '../../assets/images/logo_chicago.svg';
import CaldeiraLogo from '../../assets/images/logo_gilberto_caldeira.svg';
import MutuaLogo from '../../assets/images/logo_mutua.svg';
import SkemLogo from '../../assets/images/logo_skem.svg';
import WilliamLogo from '../../assets/images/logo_william.svg';
import RaquelLogo from '../../assets/images/logo_raquel.svg';

const VisualId = () => {
  return (
    <Section id="visualId">
      <Margin>
        <Main>
          <Title>
            Queremos te apresentar alguns dos nossos serviços 
            que podem te auxiliar no fortalecimento ou criação
            da sua marca.
          </Title>
          <JellyfishImg src={JellyfishGray} />
        </Main>
        <Container>
          {/* <TitleLearnMore>Identidade Visual</TitleLearnMore> */}
          <LearnMore 
            color="#1e304e"
            side="left"
            alignSelf="flex-start"
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
      </Margin>
    </Section>
  )
}

export default VisualId;