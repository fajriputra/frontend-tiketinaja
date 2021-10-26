import React from "react";
import { useForm } from "react-hook-form";

import Card from "components/Card";
import InputText from "components/UI/Form/InputText";

import useTogglePassword from "hooks/useTogglePassword";

import "./profile-detail.scss";
import Button from "components/UI/Button";

export default function ProfileDetail(props) {
  const [inputType, Icon] = useTogglePassword();
  const {
    register,
    // handleSubmit,
    formState: { errors },
    trigger,
    // reset,
  } = useForm();

  return (
    <>
      <Card className="profile__detail">
        <div className="profile__detail--head">
          <p className="detail__info--text">Details Information</p>
          <hr className="line w-100" />
        </div>

        <div className="profile__detail--body">
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
        </div>
      </Card>

      <Button className="btn btn__updates d-none d-md-block" isPrimary>
        Update changes
      </Button>

      <Card className="profile__detail">
        <div className="profile__detail--head">
          <p className="detail__info--text">Account and Privacy</p>
          <hr className="line w-100" />
        </div>

        <div className="profile__detail--body">
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
          <div className="form-group position-relative">
            <label htmlFor="confirmatin_password" className="form-label">
              Confirm Password
            </label>
            <InputText
              inputClassName={errors?.password && "invalid"}
              type={inputType}
              name="confirmatin_password"
              placeholder="Confirm your password"
              {...register("confirmatin_password", {
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
                trigger("confirmatin_password");
              }}
            />
            {errors?.confirmatin_password && (
              <p className="error-helpers">
                {errors?.confirmatin_password.message}
              </p>
            )}
            <span className="eye-pass">{Icon}</span>
          </div>
        </div>
      </Card>

      <Button className="btn btn__updates" isPrimary>
        Update changes
      </Button>
    </>
  );
}
