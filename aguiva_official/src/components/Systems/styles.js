import styled from "styled-components";
import BackgroundBlue from '../../assets/images/background-systems.jpg';
import LaptopImg from '../../assets/images/note1.png';

export const Section = styled.section`
  width: 100%;
  height: 150vh;
  background-image: url(${BackgroundBlue});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: ; */

  @media screen and (max-width: 1024px) {
    height: auto;
    padding-bottom: 10%;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: start;
    margin: 15% 5% 5%;
  }
`;

export const Container = styled.div`
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const LaptopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex: 1;
    flex-direction: column;
    
  }
`;

export const Laptop = styled.div`
  background-image: url(${LaptopImg});
  flex: 1;
  height: 100%;
  width: 100%;
  margin-right: 100px;
  background-size: cover;
  background-repeat: no-repeat;
`;
