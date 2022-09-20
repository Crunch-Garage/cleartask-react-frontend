import React from "react";
import { Navigate, Route } from "react-router-dom";

// component that handles where to take authenticated users
const AuthedRoute = ({ component: Component, loading, ...rest }) => {
    // TO DO: check if token is about to expire
  const isAuthed = Boolean(localStorage.getItem("access_token"));
  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <p>Loading...</p>
        ) : !isAuthed ? (
          <Component history={props.history} {...rest} />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default AuthedRoute;