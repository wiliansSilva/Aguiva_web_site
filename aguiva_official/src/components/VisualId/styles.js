import styled from "styled-components";
import BackgroundJellyfish from '../../assets/images/background-visualid.jpg';

export const Section = styled.section`
  width: 100%;
  padding-bottom: 20px;
  background-image: url(${BackgroundJellyfish});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 790px) {
    padding-bottom: 10px;
    background-position-x: 75%;
  }
`;

export const Margin = styled.div`
  max-width: 1320px;
  width: 85%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Main = styled.main`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 790px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Title = styled.h2`
  width: 60vw;
  max-width: 70ch;
  margin-left: 10%;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e304e;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    width: auto;
    font-size: 2.4rem;
  }

  @media screen and (max-width: 790px) {
    margin: 15% 10% 0;
  }
`; 

export const JellyfishImg = styled.img`
  flex: 1;
  height: 75%;
  margin-right: 5%;

  @media screen and (max-width: 1024px) {
    height: 50%;
    margin-right: 7%;
  }

  @media screen and (max-width: 790px) {
    width: 40%;
    margin-right: 0;
  }
    
`;

export const Container = styled.div`
  /* margin-top: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* margin-bottom: 5%; */

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
    align-items: center;
  }

`;

export const TitleLearnMore = styled.h1`
  display: none;

  @media screen and (max-width: 790px) {
    display: flex;
    color: #1e304e;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 3rem;
  }
`;

export const Partners = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  max-width: 600px;

  img {
    height: 100%;
    width: 80%;
    min-width: 130px;
    display: flex;
    justify-self: center;

    &.smaller {
      width: 70%;
    }
  }
  
  @media screen and (max-width: 790px) {
    grid-column-gap: 10px;

    img, &.smaller {
      width: 0;
      min-width: 140px;
    }
  }
`;