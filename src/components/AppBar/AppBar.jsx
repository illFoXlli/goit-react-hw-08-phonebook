import { Link } from 'react-router-dom';
import {
  Container,
  Logo,
  NavStyled,
  HeaderStyled,
  LinkItemNav,
  Wrapper,
} from './index';

const navItems = [
  { href: '/', text: 'Home', icon: null },
  { href: 'movies', text: 'Movies', icon: null },
];

const AppBar = () => {
  return (
    <>
      <Container>
        <HeaderStyled>
          <NavStyled>
            {navItems.map(({ href, text }) => (
              <LinkItemNav to={href} key={href}>
                {text}
              </LinkItemNav>
            ))}
          </NavStyled>
          <Wrapper>
            <Link to={'/'}>
              <Logo />
            </Link>
          </Wrapper>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default AppBar;
