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

import { showError, showSuccess } from "helpers/notification";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "store/auth/action";
import { getDataUser } from "store/user/action";

import "./login.scss";

const initialState = {
  error: "",
  success: "",
};

export default function LoginPage() {
  const history = useHistory();
  const [notif, setNotif] = useState(initialState);
  const [inputType, Icon] = useTogglePassword();
  const { isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { error, success } = notif;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  useEffect(() => {
    document.title = "Ticketing | Sign in";
    window.scrollTo(0, 0);
  });

  const onSubmit = async (email, password) => {
    dispatch(userLogin(email, password))
      .then((res) => {
        setNotif({ ...notif, error: "", success: res.value.data.message });

        dispatch(getDataUser()).then((res) => {
          const role = res.value.data.data[0].role;

          if (role === "admin") {
            setTimeout(() => {
              setNotif("");
              history.push("/dashboard");
            }, 3000);
          } else {
            history.push("/");
          }
        });

        localStorage.setItem("token", res.value.data.data.token);
        localStorage.setItem("refreshToken", res.value.data.data.refreshToken);
      })
      .catch((err) => {
        err.response.data.message &&
          setNotif({ ...notif, error: err.response.data.message, success: "" });
        setTimeout(() => {
          setNotif("");
          reset({ email: "", password: "" });
        }, 3000);
      });
  };

  return (
    <section className="signin">
      <div className="d-md-none">
        <Button type="link" href="/" className="btn signin__logo--mobile">
          <img src={LogoTickitz} alt="Logo mobile" className="img-cover" />
        </Button>
      </div>
      <div className="row">
        <div className="col-md-7 d-none d-md-block test p-0">
          <div className="signin__overlay">
            <img
              src={LogoTickitzAuth}
              alt="Banner auth"
              className="signin__logo"
            />
            <h3 className="signin__title">wait, watch, wow!</h3>
          </div>
          <img
            src={Background}
            alt="Banner auth"
            className="signin__background"
          />
        </div>
        <div className="col-md-5 m-0">
          <div className="signin__form d-md-flex justify-content-md-center align-items-md-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="signin__text">
                <h1 className="signin__text--heading">Sign In</h1>
                <p className="signin__text--subheading">
                  Sign in with your data that you entered during your
                  registration
                </p>
              </div>
              {error && showError(error)}
              {success && showSuccess(success)}
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
              <div className="form-group position-relative mb-2">
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

              <Button
                className="btn btn-signin w-100"
                isPrimary
                isLoading={isLoading}
              >
                Sign In
              </Button>

              <Button
                type="link"
                href="/sign-up"
                style={{ textDecoration: "none" }}
              >
                <p className="sign-up-p text-center">
                  Don't have an account? <span>Sign up </span>
                </p>
              </Button>

              <LineBreak />

              <div
                className="
                  d-flex
                  justify-content-evenly
                  justify-content-md-between
                  signin__button
                "
              >
                <Button
                  className="btn signin__button--btn-google d-flex align-items-center shadow"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <IconGoogle className="signin__sosmed me-0" />
                  <span className="ms-3 signin__sosmed--text d-none d-md-block">
                    Google
                  </span>
                </Button>
                <Button
                  className="btn btn
                    signin__button--btn-fb
                    d-flex
                    align-items-center shadow"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <IconFacebook className="signin__sosmed me-0" />
                  <span className="ms-3 signin__sosmed--text d-none d-md-block">
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
