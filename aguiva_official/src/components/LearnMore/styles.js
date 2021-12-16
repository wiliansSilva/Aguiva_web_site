import styled from "styled-components";
import { VscArrowRight } from 'react-icons/vsc';

export const Wrapper = styled.div `
  color: ${props => props.color};
  width: 50vw; 
  margin-left: 60px;
  margin-right: 60px;
  text-align: ${props => props.side};

  @media screen and (max-width: 1024px) {
    margin: 5%;
    width: 90vw;
    text-align: left;
  } 
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Link = styled.a`
  color: ${props => props.color};
  font-size: 1.3rem;
  width: fit-content;
  
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const ArrowLink = styled(VscArrowRight)`
  margin-left: 5px;
`;