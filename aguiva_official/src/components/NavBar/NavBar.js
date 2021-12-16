import { useState } from 'react'
import { Wrapper, MenuBurger, CloseMenu, Menu, MenuContainer, Link } from './styles';
import logoImg from '../../assets/images/aguiva.svg';

const NavBar = () => {

  const [isOpened, setIsOpened] = useState(false)

  return (
    <Wrapper>
      {/* <Logo /> */}
      <img src={logoImg} alt="Aguiva" width="150px" />
     
      {!isOpened && <MenuBurger onClick={() => setIsOpened(true)} />}
      {isOpened && <CloseMenu onClick={() => setIsOpened(false)}/>} 
      {isOpened &&
        // <CloseMenu onClick={() => setIsOpened(false)}/> &&
        <Menu>
          <MenuContainer>
            <Link>VisualId</Link>
            <Link>Systems</Link>
          </MenuContainer>
        </Menu>
      }
    </Wrapper>
  )
};

export default NavBar;