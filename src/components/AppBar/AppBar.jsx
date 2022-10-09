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
  { href: 'register', text: 'Log in', icon: null },
  { href: 'login', text: 'Sign up', icon: null },
 
];

const AppBar = () => {
  const isLoggrdIn = useSelector(getIsLoggrdIn);

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
            {isLoggrdIn?<UserMenu/>: <NavStyled>
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
