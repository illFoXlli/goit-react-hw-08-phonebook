import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {getIsLoggrdIn} from "../../redux/auth/authSelector"

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggrdIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

