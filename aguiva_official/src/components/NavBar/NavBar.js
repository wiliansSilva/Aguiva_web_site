import { useState } from 'react'
import { Wrapper, Margin, Logo, MenuBurger, CloseMenu, Menu, MenuContainer, Link } from './styles';
import LogoImg from '../../assets/images/aguiva.svg';

const NavBar = () => {

  const [isOpened, setIsOpened] = useState(false)

  return (
    <Wrapper>
      <Margin>
        <Logo src={LogoImg} alt="Aguiva" />
      
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
      </Margin>
    </Wrapper>
  )
};

export default NavBar;