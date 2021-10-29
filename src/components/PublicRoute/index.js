import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
