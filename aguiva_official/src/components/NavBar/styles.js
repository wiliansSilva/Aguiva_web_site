import styled from 'styled-components';
import { VscClose, VscMenu } from "react-icons/vsc";
import LogoImg from '../../assets/images/aguiva.svg';


export const Wrapper = styled.nav`
  height: auto;
  background-color: #010f40;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Margin = styled.div`
  max-width: 1320px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  background: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 40px;
`;

export const MobileIcon = styled.div`
  font-size: 2rem;
  margin-right: .5rem;
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    position: static;
    transform: none;
    font-size: 3.5rem;
  }
`;

export const MenuBurger = styled(VscMenu)`
  color: #fff;
`;

export const CloseMenu = styled(VscClose)`
  color: #fff;
`;

export const NavMenu = styled.ul`
  position: absolute;
  overflow-x: hidden;
  width: 30%;
  height: 92vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  top: 55px;
  right: 0;
  transform: ${({isOpened}) => (isOpened ? 'translate(0)' : 'translate(100%)')};
  opacity: 1;
  transition: all .5s ease;
  background: #010f40;
  z-index: 99;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    top: 50px;
  }
`;

export const NavItem = styled.li`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* para o menu desktop */
  /* border-bottom: 2px solid transparent; */

  &:hover {
    /* border-bottom: 2px solid #27409b; */
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 2rem;
  width: 100%;
  padding: 1rem 2rem;
  text-align: center;
  background: #182451;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    /* background: #27409b; */
    background: #cab710;
    border-radius: 32px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    padding: 2rem 4rem;
  }
`;


