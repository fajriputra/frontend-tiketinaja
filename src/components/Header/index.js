import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

import DefaultImage from "assets/images/bg-auth.png";

import LogoBrand from "assets/images/logo-tickitz-blue.png";
// icons
import IconToggle from "assets/images/icons/icon-toggler.svg";
import IconSearch from "assets/images/icons/icon-search.svg";

import Button from "components/UI/Button";
import UserProfile from "components/UserProfile";

import "./header.scss";
import { apiHost } from "config";
import { getDataUser } from "store/user/action";

const Header = (props) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  useEffect(() => {
    dispatch(getDataUser())
      .then((res) => {
        setLoading(true);

        if (res.value.data.data[0].role === "admin") {
          setIsAdmin(!isAdmin);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        new Error(err.response.data.message);
      });
  }, []);

  const handleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <header className={["header-nav", props.className].join(" ")}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Button className="logo-brand" type="link" href="/">
            <img src={LogoBrand} alt="Logo tickitz" className="img-cover" />
          </Button>
          <Button className="navbar-toggler p-0" onClick={handleCollapse}>
            <img src={IconToggle} alt="Icon Toggle" className="icon-toggle" />
          </Button>
          <div className={`${isCollapse ? "collapse" : ""} navbar-collapse`}>
            <ul className="navbar-nav me-auto">
              {isAdmin ? (
                <>
                  <li
                    className={`nav-item mx-md-4${getNavLinkClass(
                      "/dashboard"
                    )}`}
                  >
                    <Button className="nav-link" type="link" href="/dashboard">
                      Dashboard
                    </Button>
                  </li>
                  <li
                    className={`nav-item mx-md-4${getNavLinkClass("/movie")}`}
                  >
                    <Button className="nav-link" type="link" href="/movie">
                      Manage Movie
                    </Button>
                  </li>
                  <li
                    className={`nav-item mx-md-4${getNavLinkClass(
                      "/schedule"
                    )}`}
                  >
                    <Button className="nav-link" type="link" href="/schedule">
                      Manage Schedule
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className={`nav-item mx-md-4${getNavLinkClass("/")}`}>
                    <Button className="nav-link" type="link" href="/">
                      Home
                    </Button>
                  </li>
                  <li
                    className={`nav-item mx-md-4${getNavLinkClass("/payment")}`}
                  >
                    <Button className="nav-link" type="link" href="/payment">
                      Payment
                    </Button>
                  </li>
                  <li
                    className={`nav-item mx-md-4${getNavLinkClass("/order")}`}
                  >
                    <Button className="nav-link" type="link" href="/order">
                      Order
                    </Button>
                  </li>
                </>
              )}
            </ul>
            <form className="d-md-flex justify-content-md-start align-items-md-center">
              <li className="nav-item dropdown">
                <Button
                  className="nav-link dropdown-toggle ps-0 px-md-3"
                  type="link"
                  href="/location"
                >
                  Location
                </Button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Button className="dropdown-item" type="link" href="/">
                      Action
                    </Button>
                  </li>
                  <li>
                    <Button className="dropdown-item" type="link" href="/">
                      Another action
                    </Button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Button className="dropdown-item" type="link" href="/">
                      Something else here
                    </Button>
                  </li>
                </ul>
              </li>
              <img
                src={IconSearch}
                alt="Icon Search"
                className="icon-search my-2 my-md-0 mx-md-5"
              />
              {user.userData.data ? (
                <UserProfile
                  srcImage={
                    user.userData.data[0].image
                      ? `${apiHost}/uploads/images/user/${user.userData.data[0].image}`
                      : `${DefaultImage}`
                  }
                />
              ) : (
                <Button
                  className="
                  btn btn-primary
                  my-2 my-md-0
                  w-100 w-md-auto               
                  d-block d-md-inline-block
                "
                  type="link"
                  href="/sign-up"
                  style={{ padding: "0.625rem 1.875rem" }}
                >
                  Sign Up
                </Button>
              )}
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  className: propTypes.string,
};
