import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${props => props.color};
  max-width: 50vw;
  margin-left: 60px;
`;

export const Title = styled.h2`
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