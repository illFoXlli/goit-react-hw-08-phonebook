import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {getIsLoggrdIn} from "../../redux/auth/authSelector"

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggrdIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
