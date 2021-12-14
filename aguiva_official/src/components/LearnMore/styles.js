import styled from "styled-components";

export const Wrapper = styled.div(props =>`
  color: ${props.color};
  width: 50vw; 
  margin-left: 60px;
  margin-right: 60px;
  text-align: ${props.side};
`);

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;

  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Link = styled.a`
  font-size: 1.3rem;
  
`;