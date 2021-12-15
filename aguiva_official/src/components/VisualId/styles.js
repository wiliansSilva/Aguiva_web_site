import styled from "styled-components";
import BackgroundJellyfish from '../../assets/images/Background-Design.svg';
import JellyfishGray from '../../assets/images/aguaviva-design.svg';

export const Background = styled.div`
  width: 100%;
  height: 110vh;
  background-image: url(${BackgroundJellyfish});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    /* background-size: ; */
  }

`;

export const Main = styled.main`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  width: 60vw;
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
  height: 80%;
  margin-right: 95px;
  z-index: 1;
  background-image: url(${JellyfishGray});
  background-size: cover;
  background-repeat: no-repeat;


  @media screen and (max-width: 1024px) {
    position: relative;
    top: -7%;
    margin: 0;
    width: 69vw;
  }
`;

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap-reverse;
  }

`;

export const TitleLearnMore = styled.h1`
  
`;

export const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    height: 60px;
    width: 100%;
  }  
`;