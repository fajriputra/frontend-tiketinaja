/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getDataUser } from "store/user/action";
import axios from "helpers/axios";

import Card from "components/Card";
import InputText from "components/UI/Form/InputText";
import useTogglePassword from "hooks/useTogglePassword";
import Button from "components/UI/Button";

import "./profile-detail.scss";

const initProfileState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const initPasswordState = {
  newPassword: "",
  confirmPassword: "",
};

export default function ProfileDetail(props) {
  const dispatch = useDispatch();

  const [inputType, Icon] = useTogglePassword();
  const [profile, setProfile] = useState(initProfileState);
  const [password, setPassword] = useState(initPasswordState);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const { firstName, email, lastName, phoneNumber } = profile;

  useEffect(() => {
    dispatch(getDataUser()).then((res) => {
      setProfile({
        ...profile,
        firstName: res.value.data.data[0].firstName,
        lastName: res.value.data.data[0].lastName,
        email: res.value.data.data[0].email,
        phoneNumber: res.value.data.data[0].phoneNumber,
      });
    });
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({ ...profile, [name]: value });
    setPassword({ ...password, [name]: value });
  };

  const handleUpdateProfile = () => {
    setLoadingProfile(true);
    axios
      .patch("/user/update-profile", { firstName, lastName, phoneNumber })
      .then((res) => {
        toast.success(res.data.message);

        dispatch(getDataUser());
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoadingProfile(false);
      });
  };

  const handleUpdatePassword = () => {
    setLoadingPassword(true);

    axios
      .patch("/user/update-password", password)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        err.response.data.message && toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoadingPassword(false);
        setPassword(initPasswordState);
      });
  };

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
              name="firstName"
              placeholder="Write your lastname"
              onChange={handleChange}
              value={firstName}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <InputText
              name="lastName"
              placeholder="Write your lastname"
              onChange={handleChange}
              value={lastName}
            />
          </div>

          <div className="form-group position-relative">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <InputText
              type="email"
              name="email"
              readOnly
              placeholder="Write your email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <InputText
              type="number"
              name="phoneNumber"
              placeholder="Write your phone number"
              onChange={handleChange}
              value={phoneNumber}
            />
          </div>
        </div>
      </Card>

      <Button
        className="btn btn__updates"
        isPrimary
        isLoading={loadingProfile}
        onClick={handleUpdateProfile}
      >
        Update changes
      </Button>

      <Card className="profile__detail">
        <div className="profile__detail--head">
          <p className="detail__info--text">Account and Privacy</p>
          <hr className="line w-100" />
        </div>

        <div className="profile__detail--body">
          <div className="form-group position-relative">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <InputText
              type={inputType}
              name="newPassword"
              placeholder="Write your password"
              onChange={handleChange}
              value={password.newPassword}
            />

            <span className="eye-pass">{Icon}</span>
          </div>
          <div className="form-group position-relative">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <InputText
              type={inputType}
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={password.confirmPassword}
            />

            <span className="eye-pass">{Icon}</span>
          </div>
        </div>
      </Card>

      <Button
        className="btn btn__updates"
        isPrimary
        isLoading={loadingPassword}
        onClick={handleUpdatePassword}
      >
        Update changes
      </Button>
    </>
  );
}
