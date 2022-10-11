import { useSelector, useDispatch } from 'react-redux';
import {
  Btn,
  Name,
  LinkStyle,
  Btn41,
  BtnSpan,
  Wrapper,
  Img
} from './UserMenu.styled';
import { getUsername, getToken } from '../../redux/auth/authSelector';
import { logOut } from '../../redux/auth/authOpiretion';
import logo from "../../imag/1551511835_22.jpg"
import { postAvatarCat } from '../../utils/api';


const UserMenu = () => {
  const username = useSelector(getUsername);
  const token = useSelector(getToken);

 


  // const  foto = async() =>{
  //   try {
  //     const { data } = postAvatarCat();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     return console.log(error);;
  //   }
  // }

  // foto()


  const dispatch = useDispatch();

  return (
    // <Wrapper>
    <>
      
      <Wrapper><Img src={logo}  alt="альтернативный текст" />
      
        <Name>Welcome, {username}</Name>
        <Btn type="button" onClick={() => dispatch(logOut())}>
          Log out
        </Btn>
      </Wrapper>
    </>
    //  </Wrapper>
  );
};

export default UserMenu;
