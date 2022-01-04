import styled from 'styled-components';
import LogoImg from '../../assets/images/aguiva.svg';

export const Background = styled.footer`
  background-color: #182451;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }
`;

export const Contato = styled.span`
  color: #fff;
  margin-left: 8%;
  font-size: .8rem;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    font-size: 1.6rem;
  }
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  width: 115px;
  height: 30px;
  margin-left: 7%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1024px) {
    width: 150px;
    margin: 18px 0;
  }
`;

export const Copyright = styled.span`
  color: #fff;
  margin-right: 2%;
  font-size: .8rem;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    font-size: 1.5rem;
    width: 55%;
    text-align: center;

  }
`;
