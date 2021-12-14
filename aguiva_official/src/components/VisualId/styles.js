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

  /* filter: brightness(100%); */
`;

export const Main = styled.main`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Paragraph = styled.p`
  width: 60vw;
  margin-left: 150px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e304e;

`; 

export const JellyfishImg = styled.div`
  flex: 1;
  height: 80%;
  margin-right: 95px;

  background-image: url(${JellyfishGray});
  background-size: cover;
`;

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    height: 60px;
    width: 100%;
  }  
`;