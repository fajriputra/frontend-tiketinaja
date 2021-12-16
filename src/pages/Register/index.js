import React, { useEffect, useState } from "react";

import LogoTickitzAuth from "assets/images/logo-tickitz-white.png";
import LogoTickitz from "assets/images/logo-tickitz-blue.png";
import Background from "assets/images/bg-auth.png";

// icons
import { ReactComponent as IconGoogle } from "assets/images/icons/icon-google.svg";
import { ReactComponent as IconFacebook } from "assets/images/icons/icon-fb.svg";

// hooks
import useTogglePassword from "hooks/useTogglePassword";

import LineBreak from "components/LineBreak";
import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";
import Image from "components/Image";
import { showError, showSuccess } from "helpers/notification";

import axios from "helpers/axios";

import "./register.scss";
import Stepper from "components/Stepper";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  error: "",
  success: "",
};

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function RegisterPage() {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);
  const [inputType, Icon] = useTogglePassword();

  const { firstName, lastName, email, password, phoneNumber, error, success } =
    user;

  useEffect(() => {
    document.title = "Ticketing | Sign up";
    window.scrollTo(0, 0);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(statusList.process);
    try {
      const res = await axios.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });

      setUser({ ...user, error: "", success: res.data.message });

      setTimeout(() => {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          error: "",
        });
      }, 3000);
      setStatus(statusList.error);
    } catch (err) {
      err.response.data.message &&
        setUser({ ...user, error: err.response.data.message, success: "" });

      setTimeout(() => {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
          error: "",
        });
      }, 3000);
    }

    setStatus(statusList.success);
  };

  return (
    <section className="signup">
      <div className="d-md-none">
        <Button type="link" href="/" className="btn signup__logo--mobile">
          <img src={LogoTickitz} alt="Logo mobile" className="img-cover" />
        </Button>
      </div>
      <div className="row">
        <div className="col-md-7 d-none d-md-block test p-0">
          <div className="signup__overlay">
            <div className="signup__overlay--content">
              <Image
                className="wrapper__image"
                srcImage={LogoTickitzAuth}
                altImage="Logo Brand"
                imgClass="img-cover"
              />

              <div className="content__text">
                <h1 className="content__text--heading">
                  Lets build your account
                </h1>
                <div className="content__text--subheading">
                  To be a loyal moviegoer and access all of features, your
                  details are required.
                </div>
                <div className="content__stepper">
                  <Stepper
                    step1="Fill your additional details"
                    step2="Activate your account"
                    step3="Done"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src={Background}
            alt="Banner auth"
            className="signup__background"
          />
        </div>
        <div className="col-md-5 m-0">
          <div className="signup__form d-md-flex justify-content-md-center align-items-md-center">
            <form onSubmit={onSubmit}>
              <div className="signup__text">
                <h4 className="signup__text--heading">
                  Fill your additional details
                </h4>
              </div>
              {error && showError(error)}
              {success && showSuccess(success)}
              <div className="form-group position-relative">
                <label htmlFor="firstName" className="form-label">
                  Firstname
                </label>
                <InputText
                  type="text"
                  name="firstName"
                  placeholder="Write your firstname"
                  onChange={handleChange}
                  value={user.firstName}
                />
              </div>
              <div className="form-group position-relative">
                <label htmlFor="lastName" className="form-label">
                  Lastname
                </label>
                <InputText
                  type="text"
                  name="lastName"
                  placeholder="Write your lastname"
                  onChange={handleChange}
                  value={user.lastName}
                />
              </div>

              <div className="form-group position-relative">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <InputText
                  type="text"
                  name="email"
                  placeholder="Write your email"
                  onChange={handleChange}
                  value={user.email}
                />
              </div>
              <div className="form-group position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <InputText
                  type={inputType}
                  name="password"
                  placeholder="Write your password"
                  onChange={handleChange}
                  value={user.password}
                />

                <span className="eye-pass">{Icon}</span>
              </div>
              <div className="form-group position-relative">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <InputText
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  onChange={handleChange}
                  value={user.phoneNumber}
                />
              </div>

              <Button
                className="btn btn-signup w-100"
                isPrimary
                isLoading={status === statusList.process}
              >
                Join for free now
              </Button>

              <Button
                type="link"
                href="/sign-in"
                style={{ textDecoration: "none" }}
              >
                <p className="have__account text-center">
                  Already have an account? <span> Sign in </span>
                </p>
              </Button>

              <LineBreak />

              <div
                className="
                  d-flex
                  justify-content-evenly
                  justify-content-md-between
                  signup__button
                "
              >
                <Button
                  className="btn signup__button--btn-google d-flex align-items-center shadow"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <IconGoogle className="signup__sosmed me-0" />
                  <span className="ms-3 signup__sosmed--text d-none d-md-block">
                    Google
                  </span>
                </Button>
                <Button
                  className="btn btn
                    signup__button--btn-fb
                    d-flex
                    align-items-center shadow"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <IconFacebook className="signup__sosmed me-0" />
                  <span className="ms-3 signup__sosmed--text d-none d-md-block">
                    Facebook
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
