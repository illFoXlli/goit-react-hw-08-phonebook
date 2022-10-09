import { Route } from "react-router-dom";
import { useSelector  } from "react-redux";
import {getIsLoggrdIn} from "../../redux/auth/authSelector"
import HomePage from "../../page/HomePage/HomePage";
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from 'components/Layout/';


const PublicRoute = ()=>{
    const isLoggrdIn = useSelector(getIsLoggrdIn)
return <>{isLoggrdIn? <Navigate to="/contacts" /> :<><Outlet /></> }</>

}

export default PublicRoute;

