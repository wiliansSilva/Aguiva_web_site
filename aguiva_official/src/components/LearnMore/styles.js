import styled from "styled-components";
import { VscArrowRight } from 'react-icons/vsc';

export const Wrapper = styled.div`
  color: ${props => props.color};
  max-width: 70ch;
  margin: 60px;
  text-align: ${props => props.side};
  align-self: ${props => props.alignSelf};


  @media screen and (max-width: 790px) {
    margin: 5%;
  }
  
  @media screen and (max-width: 650px) {
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

  @media screen and (max-width: 790px) {

    &.visualId {
      display: none;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
    font-weight: 200;
  }
`;

export const Link = styled.a`
  display: none;

  color: ${props => props.color};
  font-size: 1.3rem;
  width: 135px;
  /* display: inline-flex; */
  align-items: center;

  &:hover .Arrow {
    margin-left: 9px;
    color: #cab710;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const ArrowLink = styled(VscArrowRight)`
  margin-left: 5px;
  transition: all .2s ease;
`;