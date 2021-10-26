import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

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

// firstName:fajri
// lastName:admin
// email:tugasmikrotik@gmail.com
// password:test123
// phoneNumber:123456789

const initialState = {
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
  const history = useHistory();
  const [notif, setNotif] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);
  const [inputType, Icon] = useTogglePassword();

  const { error, success } = notif;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  useEffect(() => {
    document.title = "Ticketing | Sign up";
    window.scrollTo(0, 0);
  });

  const onSubmit = async (data) => {
    setStatus(statusList.process);
    try {
      // const res = await axios.post("/auth/login", data);
      // setNotif({ ...notif, error: "", success: res.data.message });
      // localStorage.setItem("token", res.data.data.token);
      // setTimeout(() => {
      //   setNotif("");
      //   history.push("/");
      // }, 3000);
    } catch (err) {
      // err.response.data.message &&
      //   setNotif({ ...notif, error: err.response.data.message, success: "" });
      // setTimeout(() => {
      //   setNotif("");
      //   reset({ ...data, email: "", password: "" });
      // }, 3000);
      // setStatus(statusList.error);
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
                <div className="content__stepper"></div>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="signup__text">
                <h4 className="signup__text--heading">
                  Fill your additional details
                </h4>
              </div>
              {error && showError(error)}
              {success && showSuccess(success)}
              <div className="form-group position-relative">
                <label htmlFor="firstname" className="form-label">
                  Firstname
                </label>
                <InputText
                  inputClassName={errors?.firstname && "invalid"}
                  type="text"
                  name="firstname"
                  placeholder="Write your firstname"
                  {...register("firstname", {
                    required: "Firstname is required",
                    minLength: {
                      value: 3,
                      message: "Firstname must be at least 3 characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("firstname");
                  }}
                />
                {errors?.firstname && (
                  <p className="error-helpers">{errors?.firstname?.message}</p>
                )}
              </div>
              <div className="form-group position-relative">
                <label htmlFor="lastname" className="form-label">
                  Lastname
                </label>
                <InputText
                  inputClassName={errors?.lastname && "invalid"}
                  type="text"
                  name="lastname"
                  placeholder="Write your lastname"
                  {...register("lastname", {
                    required: "Lastname is required",
                    minLength: {
                      value: 3,
                      message: "Lastname must be at least 3 characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("lastname");
                  }}
                />
                {errors?.lastname && (
                  <p className="error-helpers">{errors?.lastname?.message}</p>
                )}
              </div>

              <div className="form-group position-relative">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <InputText
                  inputClassName={errors?.email && "invalid"}
                  type="email"
                  name="email"
                  placeholder="Write your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Must be a valid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                />
                {errors?.email && (
                  <p className="error-helpers">{errors?.email?.message}</p>
                )}
              </div>
              <div className="form-group position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <InputText
                  inputClassName={errors?.password && "invalid"}
                  type={inputType}
                  name="password"
                  placeholder="Write your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 16,
                      message: "Password already exceeds 16 characters",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}
                />
                {errors?.password && (
                  <p className="error-helpers">{errors?.password.message}</p>
                )}
                <span className="eye-pass">{Icon}</span>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" htmlFor="checkbox">
                  I agree to terms & conditions
                </label>
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
                href="/forgot-password"
                style={{ textDecoration: "none" }}
              >
                <p className="have__account text-center">
                  Do you already have an account? <span> Sign in </span>
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