import { useSelector, useDispatch } from 'react-redux';
import { Btn, Name, LinkStyle , Btn41, BtnSpan} from './UserMenu.styled';
import { getUsername, getToken } from '../../redux/auth/authSelector';
import { logOut } from '../../redux/auth/authOpiretion';



const UserMenu = () => {
  const username = useSelector(getUsername);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  return (
    <div>
      <Name>Welcome, {username}</Name>

      <Btn
        type="button"

        onClick={() => dispatch(logOut())}
      >
         Log out 
      </Btn> 
       <LinkStyle to="contacts">Log out</LinkStyle>
    </div>
  );
};

export default UserMenu;
