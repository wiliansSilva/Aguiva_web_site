import styled from "styled-components";
import { VscArrowRight } from 'react-icons/vsc';

export const Wrapper = styled.div `
  color: ${props => props.color};
  max-width: 70ch;
  margin-left: 60px;
  margin-right: 60px;
  text-align: ${props => props.side};
  align-self: ${props=> props.alignSelf};

  @media screen and (max-width: 790px) {
    align-self: ${props=> props.alignSelf};
  }
  
  @media screen and (max-width: 650px) {
    margin: 5%;
    text-align: left;
    align-self: flex-start;
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
    font-size: 2rem;
  }
`;

export const Link = styled.a`
  color: ${props => props.color};
  font-size: 1.3rem;
  width: fit-content;
  
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const ArrowLink = styled(VscArrowRight)`
  margin-left: 5px;
`;