import React from "react";
import { Redirect, Route } from "react-router-dom";

// component that handles where to take authenticated users
const AuthedRoute = ({ component: Component, loading, ...rest }) => {
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
          <Redirect
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