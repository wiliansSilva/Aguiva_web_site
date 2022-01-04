import { useState } from 'react'
import {
  Wrapper, 
  Margin, 
  Logo, 
  MobileIcon, 
  MenuBurger, 
  CloseMenu, 
  NavMenu, 
  NavItem, 
  NavLink
} from './styles';
import LogoImg from '../../assets/images/aguiva.svg';

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false)

  const changeOpened = () => setIsOpened(!isOpened)

  return (
    <Wrapper>
      <Margin>
        <Logo src={LogoImg} alt="Aguiva" />
      
        <MobileIcon onClick={changeOpened}>
          {isOpened ? <CloseMenu /> : <MenuBurger />}
        </MobileIcon>

        <NavMenu isOpened={isOpened} >
          <NavItem>
            <NavLink onClick={changeOpened}> VisualId </NavLink>
            <NavLink onClick={changeOpened}> Systems </NavLink>
          </NavItem>
        </NavMenu>

      </Margin>
    </Wrapper>
  )
};

export default NavBar;