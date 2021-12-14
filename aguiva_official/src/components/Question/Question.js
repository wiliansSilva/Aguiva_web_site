import React from 'react'
import { Background, Title, YellowBar, Button } from './styles';

function Question() {
  return (
    <Background>
      <Title>
        VOCÊ POSSUI <br/> UMA MARCA <br/> FORTE?
      </Title>
      <YellowBar />
      {/* div para separar o 'flex-direction: collumm' de Background */}
      <div>   
        <Button> SIM </Button>
        <Button> NÃO </Button>
      </div>
    </Background>
  )
}


export default Question;