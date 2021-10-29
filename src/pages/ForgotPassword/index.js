import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import LogoTickitzAuth from "assets/images/logo-tickitz-white.png";
import LogoTickitz from "assets/images/logo-tickitz-blue.png";
import Background from "assets/images/bg-auth.png";

// icons

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";
import Image from "components/Image";
import { showError, showSuccess } from "helpers/notification";

import axios from "helpers/axios";

import "./forgot.scss";
import Stepper from "components/Stepper";

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

export default function ForgotPassword() {
  const history = useHistory();
  const [notif, setNotif] = useState(initialState);
  const [status, setStatus] = useState(statusList.idle);

  const { error, success } = notif;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  useEffect(() => {
    document.title = "Ticketing | Forgot Password";
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
    <section className="reset">
      <div className="d-md-none">
        <Button type="link" href="/" className="btn reset__logo--mobile">
          <img src={LogoTickitz} alt="Logo mobile" className="img-cover" />
        </Button>
      </div>
      <div className="row">
        <div className="col-md-7 d-none d-md-block test p-0">
          <div className="reset__overlay">
            <div className="reset__overlay--content">
              <Image
                className="wrapper__image"
                srcImage={LogoTickitzAuth}
                altImage="Logo Brand"
                imgClass="img-cover"
              />

              <div className="content__text">
                <h1 className="content__text--heading">
                  Lets reset your password
                </h1>
                <div className="content__text--subheading">
                  To be able to use your account again, please complete the
                  following steps.
                </div>
                <div className="content__stepper"></div>
              </div>
            </div>
          </div>
          <img
            src={Background}
            alt="Banner auth"
            className="reset__background"
          />
        </div>
        <div className="col-md-5 m-0">
          <div className="reset__form d-md-flex justify-content-md-center align-items-md-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="reset__text">
                <h4 className="reset__text--heading">
                  Fill your complete email
                </h4>
                <p className="reset__text--subheading">
                  we'll send a link to your email shortly
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

              <Button
                className="btn btn-reset w-100"
                isPrimary
                isLoading={status === statusList.process}
              >
                Reset password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
