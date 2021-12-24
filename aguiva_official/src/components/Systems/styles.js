import styled from "styled-components";
import BackgroundBlue from '../../assets/images/background-systems.jpg';

export const Section = styled.section`
  width: 100%;
  height: 155vh;
  background-image: url(${BackgroundBlue});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 790px) {
    height: 135vh;
  }

  @media screen and (max-width: 425px) {
    height: 150vh;
  }

  /* @media screen and (max-width: 800px) and (max-height: 500px) {
    height: 180vh;
  } */
`;

export const Margin = styled.div`
  max-width: 1320px;
  width: 84%;
  height: 85%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
 
  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    margin: 50px 5% 5%;
  }

  @media screen and (max-width: 650px) {
    font-size: 2.5rem;
    text-align: start;
    margin: 15% 5% 5%;
  }
`;

export const Container = styled.div`
  height: 100%;
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
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex: 1;
    flex-direction: column;
    
  }
`;

export const Laptop = styled.img`
  flex: 1;
  width: 32%;
  height: 85%;
  margin-right: 5%;
`;


// export const Laptop = styled.div`
//   background-image: url(${LaptopImg});
//   flex: 1;
//   height: 100%;
//   width: 100%;
//   margin-right: 100px;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;
