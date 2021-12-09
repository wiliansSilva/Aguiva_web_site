import React from 'react'
import styled from 'styled-components';

function LearnMore(props) {
  return (
    <Wrapper color={props.color}>
      <Title>{props.title}</Title>
      <Description>
        {props.description}
      </Description>
      <Link>Saiba mais</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${props => props.color};
`;

const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const Link = styled.a`
  font-size: 1.3rem;
`;

export default LearnMore;