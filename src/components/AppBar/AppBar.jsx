import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  NavStyled,
  HeaderStyled,
  LinkItemNav,
  Wrapper,
  WrapperHome
} from './index';


const navItems = [
  { href: 'login', text: 'Log in', icon: null },
  { href: 'register', text: 'Sign up', icon: null },
 
];

const AppBar = () => {
  return (
    <>
      <Container>
        <HeaderStyled>
        <WrapperHome>
            <LinkItemNav to={'/'}>
            Homepage 
              </LinkItemNav> <Logo />
              <LinkItemNav to={'/movies'}>
              Search Movies 
              </LinkItemNav>
              </WrapperHome>




          <Wrapper>
          <NavStyled>
            {navItems.map(({ href, text }) => (
              <LinkItemNav to={href} key={href}>
                {text}
              </LinkItemNav>
            ))}
          </NavStyled>
            
          </Wrapper>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default AppBar;
