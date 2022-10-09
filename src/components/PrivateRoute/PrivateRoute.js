import { Route } from "react-router-dom";

const PrivateRoute = ({chilldren, ...routeProps})=>{
return <Route {...routeProps}>{chilldren}</Route>
}

export default PrivateRoute;