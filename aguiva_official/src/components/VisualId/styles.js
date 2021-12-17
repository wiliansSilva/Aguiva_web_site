import styled from "styled-components";
import BackgroundJellyfish from '../../assets/images/background-visualid.jpg';
import JellyfishGray from '../../assets/images/aguaviva.svg';

export const Section = styled.section`
  width: 100%;
  height: 110vh;
  background-image: url(${BackgroundJellyfish});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 650px) {
    /* background-size: ; */
    height: 120vh;
  }

`;

export const Main = styled.main`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  width: 60vw;
  max-width: 70ch;
  margin-left: 150px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e304e;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    margin: 15% 10% 0;
    width: auto;
    font-size: 2.4rem;
  }

`; 

export const JellyfishImg = styled.div`
  flex: 1;
  max-width: 600px;
  height: 75%;
  margin-right: 5%;
  z-index: 1;
  background-image: url(${JellyfishGray});
  background-size: cover;
  background-repeat: no-repeat;


  @media screen and (max-width: 650px) {
    position: relative;
    margin: 0;
    width: 60%;
    background-size: contain;
  }
`;

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5%;

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
    align-items: center;
  }

`;

export const TitleLearnMore = styled.h1`
  
`;

export const Partners = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  max-width: 600px;

  img {
    height: 100%;
    width: 70%;
    display: flex;
  }
  
  @media screen and (max-width: 790px) {
    grid-column-gap: 10px;

    img {
      width: 85%;
    }
  }
`;