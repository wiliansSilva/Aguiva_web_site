import styled from 'styled-components';
import { VscClose, VscMenu } from "react-icons/vsc";

export const Wrapper = styled.nav`
  height: 6vh;
  background-color: #010f40;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBurger = styled(VscMenu)`
  color: #fff;
  width: 40px;
  height: 80%;
  margin-right: 0.5rem;
  z-index: 999;
  cursor: pointer;
`;

export const CloseMenu = styled(VscClose)`
  color: #fff;
  width: 40px;
  height: 6vh;
  margin-right: 0.5rem;
  z-index: 999;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 25%;
  background-color: #010f41;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  color: #fff;
  margin: 20px;
  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }
`;


