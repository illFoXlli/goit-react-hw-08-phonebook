
import { useSelector, useDispatch } from "react-redux";
import { Btn, Name} from "./UserMenu.styled"
import { getUsername, getToken } from "../../redux/auth/authSelector";
import {logOut} from "../../redux/auth/authOpiretion";

const UserMenu = () => {
  const username = useSelector(getUsername);
  const token =useSelector(getToken)
  console.log(username);
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
    </div>
  );
}

export default UserMenu