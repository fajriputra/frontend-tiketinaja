import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  const role = user?.userData?.data.role;

  return (
    <Route
      {...rest}
      render={(props) =>
        role === "admin" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
