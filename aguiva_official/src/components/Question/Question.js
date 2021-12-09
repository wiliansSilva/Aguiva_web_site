import React from 'react'
import styled from 'styled-components';

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

const Background = styled.div`
  height: 60vh;
  background-color: #010f40;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 2rem;
  z-index: 10;

`;

const YellowBar = styled.div`
  position: relative;
  width: 192px;
  height: 23px;
  top: -85px;
  left: 8px;
  background-color: #cab710;
  z-index: 1;
`;

const Button = styled.button`
  background-color: #182451;
  color: #ffffff;
  border: 0.5px solid #000;
  font-size: 2rem;
  font-weight: bold;

  width: 100px;
  padding-top: 0.3rem;
  cursor: pointer;
`;

export default Question;