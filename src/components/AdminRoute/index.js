import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { userData } = useSelector((state) => state.user);

  const isAdmin = userData.data ? userData.data[0].role : "";

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
