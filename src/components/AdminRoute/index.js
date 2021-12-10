import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { userData } = useSelector((state) => state.user);

  const isAdmin = userData ? userData.role : "";

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin === "admin" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
