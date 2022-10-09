import { Route } from "react-router-dom";
import { useSelector  } from "react-redux";
import {getIsLoggrdIn} from "../../redux/auth/authSelector"
import HomePage from "../../page/HomePage/HomePage";
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from 'components/Layout/';


const PrivateRoute = ()=>{
    const isLoggrdIn = useSelector(getIsLoggrdIn)
return <>{isLoggrdIn?<> <Outlet /></> : <Navigate to="/login" /> }</>

}

export default PrivateRoute;

