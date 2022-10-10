import { Link } from 'react-router-dom';
import { useSelector,  } from "react-redux";
import {
  Container,
  Logo,
  NavStyled,
  HeaderStyled,
  LinkItemNav,
  Wrapper,
  WrapperHome
} from './index';
import UserMenu from "../UserMenu/UserMenu"
import {getIsLoggrdIn} from "../../redux/auth/authSelector"



const navItems = [
  { href: 'login', text: 'Log in', icon: null },
  { href: 'register', text: 'Sign up', icon: null },
 
];

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggrdIn);

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
            {isLoggedIn?<UserMenu/>: <NavStyled>
            {navItems.map(({ href, text }) => (
              <LinkItemNav to={href} key={href}>
                {text}
              </LinkItemNav>
            ))}
          </NavStyled>}
          </Wrapper>
        </HeaderStyled>
      </Container>
    </>
  );
};

export default AppBar;
