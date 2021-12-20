import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import LogoTickitzAuth from "assets/images/logo-tickitz-white.png";
import LogoTickitz from "assets/images/logo-tickitz-blue.png";
import Background from "assets/images/bg-auth.png";

import InputText from "components/UI/Form/InputText";
import Button from "components/UI/Button";
import Image from "components/Image";

import "./forgot.scss";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function ForgotPassword() {
  const [status, setStatus] = useState(statusList.idle);

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
    } catch (err) {}
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
