import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest}) => {

  
    const RouteComponent = (props) => {
        return localStorage.getItem("user") !== null  ? 
             React.createElement(Component, props) :
             <Redirect to={{ pathname: "/login"}}/>
     }
 
     return <Route render={RouteComponent} {...rest}/>
}

export default PrivateRoute;